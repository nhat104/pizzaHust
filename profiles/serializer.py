# from django.db.models import query
# from django.db.models.fields import IntegerField
# from myproject.project.serializers import ComboSerializers
from django.db.models import query
from rest_framework import serializers
from rest_framework.relations import SlugRelatedField
from .models import *
from project.models import *
from django.contrib.auth.models import User
# from project.serializers import *
# from project.serializers import ComboSerializer
from drf_writable_nested import WritableNestedModelSerializer


class ProfilesSerializaer(serializers.HyperlinkedModelSerializer):
    user = serializers.SlugRelatedField(queryset = User.objects.all(),slug_field='username')
    image =serializers.ImageField(allow_null = True)
    name = serializers.CharField(max_length=100)
    number_phone = serializers.CharField(max_length=10)
    address = serializers.CharField(max_length=500)
    pub_date = models.DateField()
    class Meta:
        model = Profile
        fields=(
            'url',
            'image',
            'name',
            'email',
            'number_phone',
            'address',
            'pub_date',
            'user',
            'pk',
            # 'cost',
        )
class PizzaSerializer(serializers.HyperlinkedModelSerializer):
    # pk = serializers.IntegerField(read_only=True)
    # topping_amounts = serializers.HyperlinkedRelatedField(many = True, read_only = True, view_name='toppingamount-detail')
    # pizza = serializers.HyperlinkedRelatedField(many = True, read_only = True, view_name='comboamount-detail')
    # topping_amounts = ToppingAmountSerializer(many = True)
    name = serializers.CharField(max_length = 100)
    image = serializers.ImageField( read_only = True)
    description = serializers.CharField(max_length = 200)
    cost = serializers.IntegerField()
    menu = serializers.ChoiceField(choices = Pizza.choi, read_only = True)
    score_fields = serializers.FloatField(source = 'score', read_only = True)
    class Meta:
        model = Pizza
        fields = (
            'url',
            'name',
            'cost',
            'costl',
            'costm',
            'pk',
            'image',
            'description',
            'menu',
            'score_fields'
        )
class SideDishesSerializer(serializers.HyperlinkedModelSerializer):
    # pk = serializers.IntegerField(read_only=True)
    # dishes = serializers.HyperlinkedRelatedField(many = True, read_only = True, view_name='comboamount-detail')
    name = serializers.CharField(max_length = 100)
    cost = serializers.IntegerField()
    image = serializers.ImageField()
    description = serializers.CharField(max_length = 200)
    type = serializers.ChoiceField(choices= SideDishes.TYPE_CHOICES)
    menu = serializers.ChoiceField(choices = Pizza.choi)
    score_fields = serializers.FloatField(source = 'score')
    class Meta:
        model = SideDishes
        fields = (
            'url',
            'name',
            'pk',
            'cost',
            'image',
            'description',
            'type',
            'menu',
            # 'test',
            # 'dishes',
            'score_fields',
        )
# class ComboAmountSerializer(serializers.ModelSerializer):
#     combo = serializers.SlugRelatedField(queryset = Combo.objects.all(), slug_field='name')
#     pizza = PizzaSerializer()
#     #pizza = serializers.SlugRelatedField(queryset = Pizza.objects.all(), slug_field='name')
#     # pk = serializers.IntegerField(read_only=True)
#     size = serializers.ChoiceField(choices=ComboAmount.SIZE_CHOICES)
#     amountPizza = serializers.IntegerField()
#     #dishes = serializers.SlugRelatedField(queryset = SideDishes.objects.all(), slug_field='name')
#     dishes = SideDishesSerializer(read_only = True)
#     # dishes = SideDishesSerializers()
#     amount = serializers.IntegerField()
#     class Meta:
#         model = ComboAmount
#         fields = ('url',
#             'combo',
#             'pizza',
#             'pk',
#             'size',
#             'amountPizza',
#             'dishes',
#             'amount',)
class PizzaInComboClientSerializer(serializers.HyperlinkedModelSerializer):
    comboclient = serializers.SlugRelatedField(queryset = ComboClient.objects.all(), slug_field='pk')
    pizzacomboclient = serializers.SlugRelatedField(queryset = Pizza.objects.all(), slug_field='pk')
    pizza = PizzaSerializer(read_only = True, source = 'piza')
    class Meta:
        model = PizzaInComboClient
        fields = (
            'url',
            'pk',
            'comboclient',
            'pizzacomboclient',
            'pizza',
            # 'amount',
        )
class SideDishesInComboClientSerializer(serializers.HyperlinkedModelSerializer):
    comboclient = serializers.SlugRelatedField(queryset = ComboClient.objects.all(), slug_field='pk')
    sidecomboclient = serializers.SlugRelatedField(queryset = SideDishes.objects.all(), slug_field='pk')
    sidedishes = SideDishesSerializer(read_only = True, source = 'side')
    type = serializers.ChoiceField(choices=SideDishes.TYPE_CHOICES, read_only = True)
    sides = SideDishesSerializer(read_only = True, source = 'sidedishes', many=True)
    class Meta:
        model = SideDishesInComboClient
        fields = (
            'url',
            'comboclient',
            'pk',
            'sidecomboclient',
            'sidedishes',
            'type',
            'sides',
            # 'amount',
        )
# class ComboClient(object):
#     def __init__(self, image):
#         self.image = image
class ComboSerializer(serializers.HyperlinkedModelSerializer):
    # pk = serializers.IntegerField(read_only=True)
    # combo = serializers.HyperlinkedRelatedField(many = True, read_only = True, view_name='comboamount-detail')
    # combocategory = serializers.SlugRelatedField(queryset = ComboCategory.objects.all(), slug_field='name')
    # pizzaincomboclient = PizzaInComboClientSerializer(many = True,required=False)
    # sideincomboclient = SideDishesInComboClientSerializer(many = True, required=False)
    # pizzas = PizzaSerializer(many=True, read_only = True)
    # sides = SideDishesSerializer(many = True)
    # sides = SideDishesSerializer(many = True)
    # combo = ComboAmountSerializer(many = True, read_only = True)
    name = serializers.CharField(max_length = 100)
    numberperson = serializers.IntegerField()
    time = serializers.DateTimeField()
    # cost = serializers.IntegerField()
    image = serializers.ImageField(required=False)
    description = serializers.CharField(max_length = 200)
    menu = serializers.ChoiceField(choices=Pizza.choi, read_only = True)
    # current_sides_fields = SideDishesSerializer(many = True, source = 'current_sides',read_only = True)
    # price_field = serializers.IntegerField(source = 'price', read_only = True)
    # score_fields = serializers.FloatField(source = 'score', read_only = True)
    class Meta:
        model = Combo
        fields = ('url',
            'name',
            'time',
            'pk',
            'numberperson',
            # 'cost',
            'image',
            'percent',
            'description',
            'menu',
            # 'combo',
            # 'pizzaincomboclient',
            # 'sideincomboclient',
            # 'pizzas',
            # 'sides',
            # 'combocategory',
            # 'price_field',
            # 'current_sides_fields',
            # 'score_fields',
            # 'side'
            # 'typeside'
            )
class ToppingAmountSerializer(serializers.HyperlinkedModelSerializer):
    # pk = serializers.IntegerField(read_only=True)
    orderpizza = serializers.SlugRelatedField(queryset = OrderPizza.objects.all(), slug_field='pk', required = False)
    topping = serializers.SlugRelatedField(queryset = Topping.objects.all(), slug_field='pk')
    amount = serializers.ChoiceField(choices = ToppingAmount.AMOUNT_CHOICES)
    class Meta:
        model = ToppingAmount
        fields = ('url',
        'pk',
        'orderpizza',
        'topping',
        'amount',
        )
class OrderPizzaSerializer(serializers.HyperlinkedModelSerializer):
    # order = serializers.StringRelatedField()
    order = serializers.SlugRelatedField(queryset = Order.objects.all(), slug_field='pk')
    # pizaa = PizzaSerializer()
    comboorder = serializers.SlugRelatedField(queryset = Combo.objects.all(), slug_field='pk', allow_null = True)
    pizaa = serializers.SlugRelatedField(queryset = Pizza.objects.all(), slug_field='pk')
    pizzaa = PizzaSerializer(source = 'pizza', read_only = True)
    #pizaa = serializers.PrimaryKeyRelatedField(queryset = Pizza.objects.all(),pk_field=UUIDField(format='hex'))
    # pizaa = serializers.HyperlinkedIdentityField(view_name='pizza-detail')
    topping = serializers.ChoiceField(allow_null = True, choices = OrderPizza.TOPPING_CHOICE)
    # topping_amounts = ToppingAmountSerializer(many = True, read_only = True)
    # cost  = serializers.SerializerMethodField(read_only = True)
    # size = serializers.CharField()
    # test = serializers.IntegerField(read_only = True)
    class Meta:
        model = OrderPizza
        fields = (
            'url',
            'pk',
            'order',
            'comboorder',
            'size',
            'soles',
            'topping',
            'pizaa',
            'pizzaa',
            'rating',
            'pecent',
            'amount',
            # 'cost',
            # 'size',
            # 'test',
        )
    # def get_test(self,orderpiza):
    #     if orderpiza.size == "S":
    #         return 0
    #     return 1
    # def get_cost(self,orderpiza):
    #     if orderpiza.size == 'S':
    #         return orderpiza.pizaa.sizes*orderpiza.amount
    #     if orderpiza.size == 'M':
    #         return orderpiza.pizaa.sizem*orderpiza.amount
    #     if orderpiza.size == 'L':
    #         return orderpiza.pizaa.sizel*orderpiza.amount
class OrderSideSerializer(serializers.HyperlinkedModelSerializer):
    # order = serializers.StringRelatedField()
    order = serializers.SlugRelatedField(queryset = Order.objects.all(), slug_field='pk')
    comboorder = serializers.SlugRelatedField(queryset  = Combo.objects.all(), slug_field='pk', allow_null = True)
    sidess = serializers.SlugRelatedField(queryset = SideDishes.objects.all(), slug_field='pk')
    # sidess = serializers.HyperlinkedRelatedField(read_only = True, view_name='sidedishes-detail')
    sidedis = SideDishesSerializer(read_only = True, source = 'sidedishes')
    cost = serializers.SerializerMethodField(read_only = True)
    class Meta:
        model = OrderSideDishes
        fields = (
            'url',
            'pk',
            'order',
            'sidess',
            'comboorder',
            'sidedis',
            'pecent',
            'rating',
            'amount',
            'cost'
        )
    def get_cost(self,orderside):
        return orderside.sidess.cost*orderside.amount
class OrderComboSerializer(serializers.HyperlinkedModelSerializer):
    order = serializers.StringRelatedField()
    combobox = serializers.SlugRelatedField(queryset = ComboClient.objects.all(), slug_field='pk')
    # combobox = serializers.HyperlinkedRelatedField(read_only = True, view_name='combo-detail')
    # comboinformation = ComboClientSerializer(read_only = True, source = 'comboboss')
    cost = serializers.SerializerMethodField(read_only = True)
    class Meta:
        model = OrderCombo
        fields = (
            'url',
            'pk',
            'order',
            'combobox',
            # 'comboinformation',
            'amount',
            'cost'
        )
    def get_cost(self, ordercombo):
        return ordercombo.combobox.cost*ordercombo.amount
class OrderSerializer(WritableNestedModelSerializer, serializers.HyperlinkedModelSerializer):
    cart = serializers.SlugRelatedField(queryset = Cart.objects.all(), slug_field='pk', allow_null = True)
    # cart = serializers.StringRelatedField()
    # piza = serializers.SlugRelatedField(queryset = Pizza.objects.all(), slug_field='name')
    # side = serializers.SlugRelatedField(queryset = SideDishes.objects.all(), slug_field='name')
    # combobox = serializers.SlugRelatedField(queryset = Combo.objects.all(), slug_field = 'name')
    # combobox = serializers.HyperlinkedRelatedField(read_only = True, view_name = 'combo-detail')
    # cost_fields = models.IntegerField(source = 'cost')
    # cost  = serializers.SerializerMethodField(read_only=True)
    orderpizza = OrderPizzaSerializer(many = True, required = False)
    orderside = OrderSideSerializer(many = True, required = False)
    cost = serializers.IntegerField(source = 'costorder', read_only = True)
    # ordercombo = OrderComboSerializer( many = True, required = False)
    # cost_fields = serializers.IntegerField(source = 'cost', read_only = True)
    class Meta:
        model = Order
        fields = (
            'url',
            'cart',
            'pk',
            # 'piza',
            # 'amountpizza',
            # 'side',
            # 'amountside',
            # 'combobox',
            # 'amountcombo',
            'name',
            'phonenumber',
            'email',
            'address',
            'orderpizza',
            'orderside',
            # 'ordercombo',
            'delive',
            'rating',
            'cost'
        )
class CartSerializer(serializers.HyperlinkedModelSerializer):
    user = serializers.SlugRelatedField(queryset = User.objects.all(), slug_field='username')
    cart = OrderSerializer(many=True,read_only = True)
    pricecart_fields = serializers.IntegerField(source = 'pricecart')
    # cost = serializers.SerializerMethodField('get_cost')
    # delived_fields = OrderSerializer(many = True, source = 'delived', read_only = True)
    # notdelived_fields = OrderSerializer(many = True, source = 'notdelived', read_only = True)
    confirms = OrderSerializer(source = 'confirm', read_only = True, many = True)
    confirmings = OrderSerializer(source = 'confirming', read_only = True, many = True)
    deliving = OrderSerializer(source = 'delivering', read_only = True, many = True)
    successes = OrderSerializer(source = 'success', read_only = True, many = True)
    class Meta:
        model = Cart
        fields=(
            'url',
            'pk',
            'cart',
            'user',
            # 'cost'
            'pricecart_fields',
            'confirms',
            'confirmings',
            'deliving',
            'successes',
        )
class UserSerializer(serializers.HyperlinkedModelSerializer):
    # name = serializers.CharField(max_length = 50)
    cart = serializers.SlugRelatedField(queryset=Cart.objects.all(),slug_field='pk')
    class Meta:
        model = User
        fields=(
            'username',
            'first_name',
            # 'name',
            'password',
            # 'password2'
            'cart'
        )

# User Serializer
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email')

# Register Serializer
class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(validated_data['username'], validated_data['email'], validated_data['password'])

        return user


# class ScorePizzaSerialize(serializers.HyperlinkedModelSerializer):
#     pizza = serializers.StringRelatedField()
#     score = serializers.ChoiceField(choices=ScorePizza.SCORE_CHOICE)
#     class Meta:
#         model = ScorePizza
#         fields = (
#             'url',
#             'pizza',
#             'score'
#         )
