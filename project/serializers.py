from codecs import lookup
from django.db.models import fields, query
from rest_framework import serializers
from project.models import *
from profiles.models import *
import project.views
class ToppingSerializers(serializers.Serializer):
    pk = serializers.IntegerField(read_only = True)
    name = serializers.CharField(max_length = 100)
    cost = serializers.IntegerField()
    description = serializers.CharField(max_length = 200)
    # class Meta:
    #     model = Topping
    #     fields=('name','cost','countPizza')
    def create(self, validated_data):
        return Topping.objects.create(**validated_data)
    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.cost = validated_data.get('cost',instance.cost)
        instance.description = validated_data.get('countPizza', instance.description)
        instance.save()
        return instance
class SideDishesSerializers(serializers.Serializer):
    pk = serializers.IntegerField(read_only=True)
    name = serializers.CharField(max_length = 100)
    cost = serializers.IntegerField()
    image = serializers.ImageField()
    description = serializers.CharField(max_length = 200)
    def create(self, validated_data):
        return SideDishes.objects.create(**validated_data)
    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.cost = validated_data.get('cost', instance.cost)
        instance.image = validated_data.get('image', instance.image)
        instance.description = validated_data.get('image', instance)
        instance.save()
        return instance
class PizzaSerializers(serializers.Serializer):
    pk = serializers.IntegerField(read_only = True)
    name = serializers.CharField(max_length = 100)
    cost = serializers.IntegerField()
    # image = serializers.ImageField(default='D:\tt\my_django\myproject\media\pizza\Screenshot_4.png')
    image = serializers.ImageField(required=False)
    description = serializers.CharField(max_length = 200)
    def create(self, validated_data):
        return Pizza.objects.create(**validated_data)
    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.cost = validated_data.get('cost', instance.cost)
        instance.image = validated_data.get('image', instance.image)
        instance.description = validated_data.get('image', instance)
        instance.save()
        # instance.addtopping(topping_set)
class ComboSerializers(serializers.Serializer):
    pk = serializers.IntegerField(read_only = True)
    name = serializers.CharField(max_length = 100)
    cost = serializers.IntegerField()
    image = serializers.ImageField()
    description = serializers.CharField(max_length = 200)
    def create(self, validated_data):
        return Pizza.objects.create(**validated_data)
    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.cost = validated_data.get('cost', instance.cost)
        instance.image = validated_data.get('image', instance.image)
        instance.description = validated_data.get('image', instance)
        instance.save()
# Hàm để trả ra thông tin của các đối tượng trong combo
# Code API mới

class ToppingSerializer(serializers.HyperlinkedModelSerializer):
    # topping_amounts = serializers.SlugRelatedField(queryset = Pizza.objects.all(), slug_field='name')
    # pk = serializers.IntegerField(read_only=True)
    topping_amount = serializers.HyperlinkedRelatedField(many = True, read_only = True, view_name = 'toppingamount-detail')
    cost = serializers.IntegerField()
    name = serializers.CharField(max_length = 100)
    image = serializers.ImageField()
    description = serializers.CharField(max_length = 200)
    class Meta:
        model = Topping
        fields = (
            'url',
            'cost',
            'name',
            'image',
            'description',
            # 'topping_amounts',
            'pk',
            'topping_amount'
        )
class ToppingAmountSerializer(serializers.HyperlinkedModelSerializer):
    # pk = serializers.IntegerField(read_only=True)
    orderpizza = serializers.SlugRelatedField(queryset = OrderPizza.objects.all(), slug_field='pk')
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
class PizzaSerializer(serializers.HyperlinkedModelSerializer):
    # pk = serializers.IntegerField(read_only=True)
    # topping_amounts = serializers.HyperlinkedRelatedField(many = True, read_only = True, view_name='toppingamount-detail')
    # pizza = serializers.HyperlinkedRelatedField(many = True, read_only = True, view_name='comboamount-detail')
    # topping_amounts = ToppingAmountSerializer(many = True)
    name = serializers.CharField(max_length = 100)
    image = serializers.ImageField( read_only = True)
    description = serializers.CharField(max_length = 200)
    cost = serializers.IntegerField()
    costm = serializers.IntegerField()
    costl = serializers.IntegerField()
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
#     pizas = PizzaSerializer(source = 'piza', read_only = True)
#     pizza = serializers.SlugRelatedField(queryset = Pizza.objects.all(), slug_field='pk')
#     # pk = serializers.IntegerField(read_only=True)
#     size = serializers.ChoiceField(choices=ComboAmount.SIZE_CHOICES)
#     amountPizza = serializers.IntegerField()
#     dishes = serializers.SlugRelatedField(queryset = SideDishes.objects.all(), slug_field='pk')
#     dishe = SideDishesSerializer(read_only = True, source = 'side')
#     # dishes = SideDishesSerializers()
#     amount = serializers.IntegerField()
#     class Meta:
#         model = ComboAmount
#         fields = ('url',
#             'combo',
#             'pizza',
#             'pizas',
#             'pk',
#             'size',
#             'amountPizza',
#             'dishes',
#             'dishe',
#             'amount',)
class PizzaInComboSerializer(serializers.HyperlinkedModelSerializer):
    combo = serializers.SlugRelatedField(queryset = Combo.objects.all(), slug_field='name')
    pizzacombo = serializers.SlugRelatedField(queryset = Pizza.objects.all(), slug_field='pk')
    pizza = PizzaSerializer(read_only = True, source = 'piza')
    class Meta:
        model = PizzaInCombo
        fields = (
            'url',
            'pk',
            'combo',
            'pizzacombo',
            'pizza',
            # 'amount',
        )
class SideDishesInComboSerializer(serializers.HyperlinkedModelSerializer):
    combo = serializers.SlugRelatedField(queryset = Combo.objects.all(), slug_field='name')
    sidecombo = serializers.SlugRelatedField(queryset = SideDishes.objects.all(), slug_field='pk')
    sidedishes = SideDishesSerializer(read_only = True, source = 'side')
    type = serializers.ChoiceField(choices=SideDishes.TYPE_CHOICES, read_only = True)
    sides = SideDishesSerializer(read_only = True, source = 'sidedishes', many=True)
    class Meta:
        model = SideDishesInCombo
        fields = (
            'url',
            'combo',
            'pk',
            'sidecombo',
            'sidedishes',
            'type',
            'sides',
            # 'amount',
        )
class ComboSerializer(serializers.HyperlinkedModelSerializer):
    # pk = serializers.IntegerField(read_only=True)
    # combo = serializers.HyperlinkedRelatedField(many = True, read_only = True, view_name='comboamount-detail')
    # combocategory = serializers.SlugRelatedField(queryset = ComboCategory.objects.all(), slug_field='name')
    pizzaincombo = PizzaInComboSerializer(many = True)
    sideincombo = SideDishesInComboSerializer(many = True)
    pizzas = PizzaSerializer(many=True, read_only = True)
    # sides = SideDishesSerializer(many = True)
    # sides = SideDishesSerializer(many = True)
    # combo = ComboAmountSerializer(many = True, read_only = True)
    name = serializers.CharField(max_length = 100)
    numberperson = serializers.IntegerField()
    time = serializers.DateTimeField()
    # cost = serializers.IntegerField()
    image = serializers.ImageField()
    description = serializers.CharField(max_length = 200)
    menu = serializers.ChoiceField(choices=Pizza.choi, read_only = True)
    current_sides_fields = SideDishesSerializer(many = True, source = 'current_sides',read_only = True)
    # price_field = serializers.IntegerField(source = 'price', read_only = True)
    score_fields = serializers.FloatField(source = 'score', read_only = True)
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
            'pizzaincombo',
            'sideincombo',
            'pizzas',
            # 'sides',
            # 'combocategory',
            # 'price_field',
            'current_sides_fields',
            'score_fields',
            # 'side'
            # 'typeside'
            )
    # def __init__(self, *args, **kwargs):
    #     context = kwargs.pop("sides")
    #     self.combo_id = context.get('combo_id')
    #     super(ComboSerializer, self).__init__(*args, **kwargs)
    # def get_typeside(self,combo):
    #     # data = combo.sides
    #     return SideDishesSerializer(many = True, source = 'current_sides').data
class ScorePizzaSerialize(serializers.HyperlinkedModelSerializer):
    pizza = serializers.SlugRelatedField(queryset = Pizza.objects.all(), slug_field='pk')
    score = serializers.ChoiceField(choices=ScorePizza.SCORE_CHOICE)
    class Meta:
        model = ScorePizza
        fields = (
            'url',
            'pizza',
            'score'
        )
class ScoreSideSerializer(serializers.HyperlinkedModelSerializer):
    side = serializers.SlugRelatedField(queryset = SideDishes.objects.all(), slug_field = 'pk')
    score = serializers.ChoiceField(choices = ScorePizza.SCORE_CHOICE)
    class Meta:
        model = ScoreSide
        fields = (
            'url',
            'side',
            'score'
        )
class ScoreComboSerializer(serializers.HyperlinkedModelSerializer):
    combo = serializers.SlugRelatedField(queryset = Combo.objects.all(), slug_field = 'pk')
    score = serializers.ChoiceField(choices = ScorePizza.SCORE_CHOICE)
    class Meta:
        model = ScoreCombo
        fields = (
            'url',
            'combo',
            'score'
        )