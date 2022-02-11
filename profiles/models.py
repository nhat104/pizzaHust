import re
from django.db import models
from django.contrib.auth.models import User
from django.db.models.aggregates import Avg
from django.db.models import query
from django.db.models.fields.mixins import NOT_PROVIDED
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.forms import ModelForm, fields
from datetime import date, datetime
from django.utils import timezone
from project.models import SideDishes, Combo, Pizza, ScoreCombo, Topping
# Create your models here.
class ToppingAmount(models.Model):
    REGULAR = 1
    DOUBLE = 2
    TRIPLE = 3
    AMOUNT_CHOICES = (
        (REGULAR, 'Regular'),
        (DOUBLE, 'Double'),
        (TRIPLE, 'Triple'),
    )
    orderpiza = models.ForeignKey('OrderPizza', related_name='topping_amounts', on_delete=models.SET_NULL, null=True)
    # topping = models.ForeignKey('Topping', related_name='topping_amounts', on_delete=models.SET_NULL, null=True, blank=True)
    topping = models.ForeignKey(Topping, related_name='topping_amount', on_delete=models.SET_NULL, null=True, blank=True)
    amount = models.IntegerField(choices=AMOUNT_CHOICES, default=REGULAR)
class Profile(models.Model):
    user = models.OneToOneField(User,on_delete=models.CASCADE)
    image =models.ImageField(default="default.jpg",upload_to="profile_pictures")
    name = models.CharField(max_length=100,default='')
    email = models.EmailField(blank=True)
    number_phone = models.CharField(max_length=10,blank=False)
    address = models.CharField(max_length=500, blank=False)
    pub_date = models.DateField('Birthday',default=date.today)
    def __str__(self) :
        return f'{self.user.username}\'s Profile...'
    # @receiver(post_save,sender=User)
    # def create_profile(sender,instance,created,**kwargs):
    #     if created:
    #         Profile.objects.create(user=instance)
class ProfileForm(ModelForm):
    class Meta:
        model=Profile
        fields=['image','name','number_phone','address','pub_date']
class Cart(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    def __str__(self):
        return self.user.username
    def countorder(self):
        return Order.objects.filter(cart__id = self.id).count()
    def ordercart(self):
        return Order.objects.filter(cart__id = self.id)
    @property
    def pricecart(self):
        price = 0
        order_set = Order.objects.filter(cart__id=self.id)
        for order in order_set:
            price +=order.price()
        return price
    def confirm(self):
        a = Order.objects.filter(cart__id=self.id)
        return a.filter(delive="Xac nhan")
    def confirming(self):
        a = Order.objects.filter(cart__id=self.id)
        return a.filter(delive="Dang xac nhan")
    def delivering(self):
        a= Order.objects.filter(cart__id = self.id)
        return a.filter(delive = 'Dang giao')
    def success(self):
        a= Order.objects.filter(cart__id = self.id)
        return a.filter(delive = 'Hoan thanh')
    @receiver(post_save,sender=User)
    def create_cart(sender,instance,created,**kwargs):
        if created:
            Cart.objects.create(user=instance)
    # def pricecart(self):
    #     price=int(0)
    #     order_set = Order.objects.filter(cart__id=self.id)
    #     for order in order_set:
    #         price +=order.cost()
    #     return price
class Order(models.Model):
    cart = models.ForeignKey(Cart, related_name='cart', on_delete=models.SET_NULL,null=True, blank=True)
    name = models.CharField(max_length=100, blank=False)
    phonenumber = models.CharField(max_length=10,blank=False)
    email = models.EmailField(blank=True)
    address = models.CharField(max_length=100)
    XAC = 'Dang xac nhan'
    NHA = 'Xac nhan'
    DAN = 'Dang giao'
    OKE = 'Hoan thanh'
    HUY = 'Huy'
    DELIVE_CHOICE =[
        (XAC,'Dang xac nhan'),
        (NHA, 'Xac nhan'),
        (DAN,'Dang giao'),
        (OKE,'Hoan thanh '),
        (HUY, 'Huy')
        ]
    delive = models.CharField(choices=DELIVE_CHOICE, max_length= 30)
    rating = models.IntegerField(default=0)
    create = models.DateTimeField(default = datetime.now())
    def __str__(self):
        return self.name
    def price(self):
        cost = 0
        a = OrderPizza.objects.filter(order__id = self.id)
        for piza in a:
            cost +=piza.cost()
        b = OrderSideDishes.objects.filter(order__id = self.id)
        for side in b:
            cost+=side.cost()
        # c = OrderCombo.objects.filter(order__id = self.id)
        # for combo in c:
        #     cost+=combo.cost()
        return cost+22000
    def ordercombox(self):
        # a = OrderPizza.objects.filter(order__id = self.id)
        b = OrderPizza.objects.filter(order__id = self.id)
        idcombo = b.values_list('comboorder__id')
        c=[]
        for  a in idcombo:
            if a[0] != None :
                combobox = Combo.objects.get(id = a[0])
                c.append(combobox)
        return c
    @property
    def costorder(self):
        cost = 0
        a = OrderPizza.objects.filter(order__id = self.id)
        for piza in a:
            cost+=piza.cost()
        b = OrderSideDishes.objects.filter(order__id = self.id)
        for side in b:
            cost+=side.cost()
        # c = OrderCombo.objects.filter(order__id = self.id)
        # for combo in c:
        #     cost+=combo.cost()
        return cost
    def querycombo(self):
        # a = OrderPizza.objects.filter(order__id = self.id)
        b = OrderPizza.objects.filter(order__id = self.id)
        idcombo = b.values_list('comboorder__id')
        c=[]
        for  a in idcombo:
            if a[0] != None :
                combobox = Combo.objects.get(id = a[0])
                c.append(combobox)
        return c
    # def querytest(self):
    #     b = OrderPizza.objects.filter(order__id = self.id)
    #     idcombo = b.values_list('comboorder__id')
    #     c=[]
    #     for a in idcombo:
    #         if a[0]!=None:
    #             d=[]
    #             d.append(a[0])
    #             c.append(d)
    #     return c
    def querypizzacombo(self):
        b = OrderPizza.objects.filter(order__id = self.id)
        idcombo = b.values_list('comboorder__id')
        querypiza= []
        for c in idcombo:
            if c[0]!=None:
                querypiza.append(b.filter(comboorder__id = c[0]))
        return querypiza
    def querysidecombo(self):
        a = OrderSideDishes.objects.filter(order__id = self.id)
        idcombo = a.values_list('comboorder__id')
        queryside = []
        for c in idcombo:
            if c[0]!=None:
                queryside.append(a.filter(comboorder__id = c[0]))
        return queryside
    def querycostcombo(self):
        a = OrderSideDishes.objects.filter(order__id = self.id)
        b = OrderPizza.objects.filter(order__id = self.id)
        idcombo = b.values_list('comboorder__id')
        querycost = []
        for c in idcombo:
            if c[0]!=None:
                cost = 0
                for orderside in a.filter(comboorder__id = c[0]):
                    cost+=orderside.cost()
                for orderpiza in b.filter(comboorder__id = c[0]):
                    cost+=orderpiza.cost()
                querycost.append(cost)
        return querycost
class OrderPizza(models.Model):
    comboorder = models.ForeignKey(Combo, related_name='comboorder',on_delete=models.CASCADE, null = True, blank=True)
    order = models.ForeignKey(Order,related_name='orderpizza',on_delete= models.CASCADE, null = False)
    pizaa = models.ForeignKey(Pizza,related_name='pizaa', on_delete=models.CASCADE)
    size  = models.CharField(default='S', choices=Pizza.choice, max_length=20)
    soles = models.CharField(choices=Pizza.DE_CHOICE, max_length = 10, default='Gion')
    TOP1 = 'Thêm phô mai phủ'
    TOP2 = 'Thêm phô mai viền'
    TOP3 = 'Double sốt'
    TOPPING_CHOICE = [
        (TOP1, 'Thêm phô mai phủ'),
        (TOP2, 'Thêm phô mai viền'),
        (TOP3, 'Double sốt'),
    ]
    topping = models.CharField(choices=TOPPING_CHOICE, max_length= 30, blank=True, null = True)
    rating = models.BooleanField(default=False)
    pecent = models.IntegerField(default=0)
    amount = models.IntegerField(default=1)
    def __str__(self):
        return 'Pizza: '+ self.pizaa.name 
    def cost(self):
        price=0
        if self.size == 'S':
            price+=self.pizaa.cost*(100-self.pecent)/100*self.amount
        if self.size == 'M':
            price+=self.pizza.costm*(100-self.pecent)/100*self.amount
        if self.size == 'L':
            price+=self.pizza.costl*(100-self.pecent)/100*self.amount
        if self.topping != None:
            price+=10000*self.amount
        return price
    @property
    def pizza(self):
        return Pizza.objects.get(id = self.pizaa.id)
class OrderSideDishes(models.Model):
    comboorder = models.ForeignKey(Combo, related_name='comboside',on_delete=models.CASCADE, null = True, blank=True)
    order = models.ForeignKey(Order, related_name = 'orderside', on_delete = models.CASCADE)
    sidess = models.ForeignKey(SideDishes,related_name= 'sidess', on_delete=models.CASCADE)
    amount = models.IntegerField(default=1)
    rating  = models.BooleanField(default=False)
    pecent = models.IntegerField(default=0)
    def cost(self):
        return self.sidess.cost*(100-self.pecent)/100*self.amount
    @property
    def sidedishes(self):
        return SideDishes.objects.get(id = self.sidess.id)
class OrderCombo(models.Model):
    order = models.ForeignKey(Order, related_name = 'ordercombo', on_delete = models.CASCADE)
    combobox = models.ForeignKey('ComboClient',related_name= 'combobox',on_delete = models.CASCADE)
    amount = models.IntegerField(default=1)
    def cost(self):
        return self.combobox.pricecombo()*self.amount
    @property
    def comboboss(self):
        return Combo.objects.get(id = self.combobox.id)
class ComboClient(models.Model):
    name=models.CharField(max_length=100)
    cost = models.IntegerField()
    time = models.DateTimeField("Expires on")
    image = models.ImageField(default = 'combo', upload_to = 'combo', null = True)
    numberperson = models.IntegerField()
    percent = models.IntegerField(default=10)
    description = models.CharField(max_length = 200, blank = True, null=True)
    # pizzas= models.ManyToManyField(Pizza,related_name='pizzas')
    # sides = models.ManyToManyField(SideDishes,related_name='sides')
    menu = models.CharField(default='Sang',choices = Pizza.choi,max_length=10)
    # class Meta:
    #     ordering = ('name',)
    # def __str__(self):
    #     return self.name
    def addpizza(self, pizza_id):
        pizza=Pizza.objects.get(pk=pizza_id)
        self.pizzas.add(pizza)
    def removepizza(self, pizza_id):
        pizza = Pizza.objects.get(pk=pizza_id)
        self.pizzas.add(pizza)
    def adddishes(self,dishes_id):
        dishes = SideDishes.objects.get(pk=dishes_id)
        self.dishes.add(dishes)
    def remvedishes(self, dishes_id):
        dishes = SideDishes.objects.get(pk=dishes_id)
        self.dishes.remove(dishes)
    def current_side(self):
        return SideDishes.objects.filter(type='Noodle')
    def pricecombo(self):
        price = 0
        a = PizzaInComboClient.objects.filter(comboclient__id  = self.id)
        for pizacb in a:
            price += pizacb.pizzacombo.cost
        b = SideDishesInComboClient.objects.filter(comboclient__id = self.id)
        for sidecb in b:
            price+= sidecb.sidecombo.cost
        return int(price*(100-self.percent))/100
    @property
    def current_sides(self):
        return SideDishes.objects.filter(type='Drink')
    def score(self):
        a = ScoreCombo.objects.filter(combo__id = self.id)
        score = float(0.0)
        count = 0
        for scorecombo in a:
            count+=1
            score += scorecombo.score
        if(count == 0):
            return 5
        return score/count
    # def price(self):
    #     price = 0
    #     a = PizzaInCombo.objects.filter(combo__id  = self.id)
    #     for pizacb in a:
    #         price += pizacb.pizzacombo.cost
    #     b = SideDishesInCombo.objects.filter(combo__id = self.id)
    #     for sidecb in b:
    #         price+= sidecb.sidecombo.cost
    #     return int(price*(100-self.percent))/100 
class SideDishesInComboClient(models.Model):
    comboclient = models.ForeignKey('ComboClient', related_name='sideincomboclient', on_delete=models.SET_NULL, null=True)
    sidecomboclient = models.ForeignKey(SideDishes, on_delete=models.SET_NULL,null = True,related_name='sidecomboclient')
    # amount = models.IntegerField(default=0)
    type = models.CharField(choices=SideDishes.TYPE_CHOICES, default='Drink', max_length=15)
    @property
    def side(self):
        return SideDishes.objects.get(id = self.sidecombo.id)
    def sidedishes(self):
        # a = self.type
        return SideDishes.objects.filter(type = self.type)
class PizzaInComboClient(models.Model):
    comboclient = models.ForeignKey('ComboClient', on_delete=models.SET_NULL, related_name='pizzaincomboclient', null=True)
    pizzacomboclient = models.ForeignKey(Pizza, on_delete=models.SET_NULL, null = True, related_name='pizzacomboclient')
    # amount = models.IntegerField(default=0)
    @property
    def piza(self):
        return Pizza.objects.get(id = self.pizzacombo.id)