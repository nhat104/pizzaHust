from django.db import models
from django.db.models.base import Model
# from profiles.models import OrderPizza
# Create your models here.
class Topping(models.Model):
    cost = models.IntegerField()
    name=models.CharField(max_length=100)
    image = models.ImageField(default = 'topping.jpg', upload_to='topping')
    description = models.CharField(max_length = 200, blank = True)
    # class Meta:
    #     ordering = ('name',)
    def __str__(self):
        return self.name
class Pizza(models.Model):
    # toppings = models.ManyToManyField(Topping)
    # toppings = models.ManyToManyField('Topping', through='ToppingAmount', related_name='pizzas')
    name = models.CharField(max_length=100, blank=False)
    # class Size(models.TextChoices):
    # SMALL='S'
    # MEAN='M'
    # BIG='L'
    # choice = [(SMALL,'S'),(MEAN,'M'),(BIG,'L')]
    cost = models.IntegerField()
    costm = models.IntegerField()
    costl = models.IntegerField()
    # size = models.CharField(max_length=1,choices=choice,default='S')
    image=models.ImageField(default='defaultpizza.webp',upload_to='pizza')
    XOP = 'Mem xop'
    GION = 'Gion'
    DE_CHOICE = [
        (XOP, 'Mem xop'),
        (GION, 'Gion')
    ]
    # soles = models.CharField(choices=DE_CHOICE, max_length=10, default='GION')
    description = models.CharField(max_length = 200, blank = True)
    SAN = "Appetizer"
    TRU = "Main"
    CHI = 'Dessert'
    CHA = 'Vegetarian'
    TRE = 'Children'
    choi = (
        (SAN,'Appetizer'),
        (TRU,'Main'),
        (CHI,'Dessert'),
        # (TOI,'Toi'),
        (CHA,'Vegetarian'),
        (TRE,'Children')
        )
    menu = models.CharField(default=SAN, choices=choi, max_length=10)
    SMALL='S'
    MEAN='M'
    BIG='L'
    choice = [(SMALL,'S'),(MEAN,'M'),(BIG,'L')]
    # class Meta:
    #     ordering = ('id',)
    # def addtopping(self, topping_set):
    #     # topping = Topping.objects.get(pk=topping_id)
    #     for tp in topping_set:
    #         self.toppings.add(tp)
    # def addtopping(self, topping_id):
    #     topping = Topping.objects.get(topping_id)
    #     self.toppings.add(topping)
    # def removetopping(self, topping_id):
    #     topping = Topping.objects.get(pk=topping_id)
    #     self.toppings.remove(topping)
    def __str__(self):
        return self.name
    @property
    def score(self):
        a = ScorePizza.objects.filter(pizza__id = self.id)
        score = float(0.0)
        count =0
        for scorepizza in a:
            count+=1
            score += scorepizza.score
        if(count == 0):
            return 5
        return score/count

class PizzaInCombo(models.Model):
    combo = models.ForeignKey('Combo', on_delete=models.SET_NULL, related_name='pizzaincombo', null=True)
    pizzacombo = models.ForeignKey('Pizza', on_delete=models.SET_NULL, null = True, related_name='pizzacombo')
    # amount = models.IntegerField(default=0)
    @property
    def piza(self):
        return Pizza.objects.get(id = self.pizzacombo.id)
# class SideDishesInCombo(models.Model):
#     combo = models.ForeignKey('Combo', related_name='sideincombo', on_delete=models.SET_NULL, null=True)
#     sidecombo = models.ForeignKey('SideDishes', on_delete=models.SET_NULL,null = True,related_name='sidecombo')
#     # amount = models.IntegerField(default=0)
#     type = models.CharField(choices=)
#     @property
#     def side(self):
#         return SideDishes.objects.get(id = self.sidecombo.id)
# class ToppingAmount(models.Model):
#     REGULAR = 1
#     DOUBLE = 2
#     TRIPLE = 3
#     AMOUNT_CHOICES = (
#         (REGULAR, 'Regular'),
#         (DOUBLE, 'Double'),
#         (TRIPLE, 'Triple'),
#     )
#     orderpiza = models.ForeignKey(OrderPizza, related_name='topping_amounts', on_delete=models.SET_NULL, null=True)
#     # topping = models.ForeignKey('Topping', related_name='topping_amounts', on_delete=models.SET_NULL, null=True, blank=True)
#     topping = models.ForeignKey('Topping', related_name='topping_amount', on_delete=models.SET_NULL, null=True, blank=True)
#     amount = models.IntegerField(choices=AMOUNT_CHOICES, default=REGULAR)
    # def __str__(self):
    #     return self.orderpiza.name
class SideDishes(models.Model):
    name = models.CharField(max_length=100)
    cost = models.IntegerField()
    image = models.ImageField(default='defaultdishes.jpg', upload_to='sidedishes')
    description = models.CharField(max_length = 200, blank = True)
    menu = models.CharField(default='Sang',choices = Pizza.choi,max_length=10)
    MY = 'Noodle'
    DRINK = 'Drink'
    GA = 'GaBBQ'
    KHOAI = 'Frenchfries'
    SIDE = 'SideDishes'
    TYPE_CHOICES = (
        (MY,'Noodle'),
        (DRINK,"Drink"),
        (GA,'GaBBQ'),
        (KHOAI,'Franchfries'),
        (SIDE, 'Sidedishes'),
    )
    type = models.CharField(choices=TYPE_CHOICES,default=SIDE, max_length=50)
    def __str__(self):
        return self.name
    @property
    def score(self):
        a = ScoreSide.objects.filter(side__id = self.id)
        score = float(0.0)
        count =0
        for scoreside in a:
            count+=1
            score += scoreside.score
        if(count == 0):
            return 5
        return score/count
# class ComboCategory(models.Model):
#     name = models.CharField(max_length=1000)
#     image = models.ImageField(default = 'combo', upload_to = 'combo')
#     description = models.CharField(max_length=1000)
    def __str__(self):
        return self.name
class SideDishesInCombo(models.Model):
    combo = models.ForeignKey('Combo', related_name='sideincombo', on_delete=models.SET_NULL, null=True)
    sidecombo = models.ForeignKey('SideDishes', on_delete=models.SET_NULL,null = True,related_name='sidecombo')
    # amount = models.IntegerField(default=0)
    type = models.CharField(choices=SideDishes.TYPE_CHOICES, default='Drink', max_length=15)
    @property
    def side(self):
        return SideDishes.objects.get(id = self.sidecombo.id)
    def sidedishes(self):
        # a = self.type
        return SideDishes.objects.filter(type = self.type)
class Combo(models.Model):
    # combocategory = models.ForeignKey(ComboCategory,related_name='category',on_delete=models.CASCADE)
    name=models.CharField(max_length=100)
    # cost = models.IntegerField()
    time = models.DateTimeField("Expires on")
    image = models.ImageField(default = 'combo', upload_to = 'combo')
    numberperson = models.IntegerField()
    percent = models.IntegerField(default=10)
    description = models.CharField(max_length = 200, blank = True)
    pizzas= models.ManyToManyField(Pizza,related_name='pizzas')
    # sides = models.ManyToManyField(SideDishes,related_name='sides')
    menu = models.CharField(default='Sang',choices = Pizza.choi,max_length=10)
    # class Meta:
    #     ordering = ('name',)
    def __str__(self):
        return self.name
    # def addpizza(self, pizza_id):
    #     pizza=Pizza.objects.get(pk=pizza_id)
    #     self.pizzas.add(pizza)
    # def removepizza(self, pizza_id):
    #     pizza = Pizza.objects.get(pk=pizza_id)
    #     self.pizzas.add(pizza)
    # def adddishes(self,dishes_id):
    #     dishes = SideDishes.objects.get(pk=dishes_id)
    #     self.dishes.add(dishes)
    # def remvedishes(self, dishes_id):
    #     dishes = SideDishes.objects.get(pk=dishes_id)
        # self.dishes.remove(dishes)
    def current_side(self):
        return SideDishes.objects.filter(type='Noodle')
    def pricecombo(self):
        price = 0
        a = PizzaInCombo.objects.filter(combo__id  = self.id)
        for pizacb in a:
            price += pizacb.pizzacombo.cost
        b = SideDishesInCombo.objects.filter(combo__id = self.id)
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
    def price(self):
        price = 0
        a = PizzaInCombo.objects.filter(combo__id  = self.id)
        for pizacb in a:
            price += pizacb.pizzacombo.cost
        b = SideDishesInCombo.objects.filter(combo__id = self.id)
        for sidecb in b:
            price+= sidecb.sidecombo.cost
        return int(price*(100-self.percent))/100
class ScorePizza(models.Model):
    pizza = models.ForeignKey(Pizza,related_name='pizzascore',on_delete=models.CASCADE)
    STAR1 = 1
    STAR2 = 2
    STAR3 = 3
    STAR4 = 4
    STAR5 = 5
    SCORE_CHOICE = (
        (STAR1,1),
        (STAR2,2),
        (STAR3,3),
        (STAR4,4),
        (STAR5,5),
    )
    score = models.IntegerField(choices=SCORE_CHOICE,default=STAR5)
class ScoreSide(models.Model):
    side = models.ForeignKey(SideDishes,related_name='sidescore',on_delete=models.CASCADE)
    score = models.IntegerField(choices=ScorePizza.SCORE_CHOICE,default=5)
class ScoreCombo(models.Model):
    combo = models.ForeignKey(Combo,related_name='comboscore',on_delete=models.CASCADE)
    score = models.IntegerField(choices=ScorePizza.SCORE_CHOICE, default=5)

