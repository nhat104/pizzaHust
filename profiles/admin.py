from django.contrib import admin
from .models import *
# Register your models here.
class OrderPizzaInLine(admin.TabularInline):
    model = OrderPizza
    extra = 0
    readonly_fields = ['pizaa','size','soles','topping','amount']
    exclude = ['rating', 'comboorder', 'pecent']
class OrderSideInLine(admin.TabularInline):
    model = OrderSideDishes
    extra = 0
    readonly_fields = ['sidess','amount']
    exclude = ['rating', 'comboorder', 'pecent']
class OrderComboInLine(admin.StackedInline):
    model = OrderCombo
    extra = 0
    readonly_fields = ['sidess', 'amount', 'pecent', 'comboorder']
class OrderAdmin(admin.ModelAdmin):
    list_filter = ['delive']
    list_display = ['name','address','price']
    readonly_fields = ['cart','name','phonenumber','email','address','create','price']
    exclude = ['rating']
    
    # def price(self):
    #     return 10
    # fields_set = (
    #     (None, {
    #         'fields': ['name']
    #     }),
    # )
    inlines = [OrderPizzaInLine,OrderSideInLine]
class PizzaInComboClientAdmin(admin.StackedInline):
    model = PizzaInComboClient
    extra = 0
class SideDishesInComboClientAdmin(admin.StackedInline):
    model = SideDishesInComboClient
    extra = 0
class OrderInLine(admin.StackedInline):
    model = Order
    extra = 0
    readonly_fields = ['cart','name','phonenumber','email','address','delive','create','price']
    exclude = ['rating']
    
class ComboClientAdmin(admin.ModelAdmin):
    list_display=('name','numberperson','cost','time')
    list_filter=['numberperson','cost']
    search_fields=['name']
    fieldsets = (
        # (None,{
        #     'fields':(
        #         ['combocategory']
        #     ),
        # }
        # ),
        (None, {
            "fields": (
                ['name']
            ),
        }),
        (None,{
            'fields':
            ['cost']
        }),
        (None,{
            'fields':['percent']
        }),
        (None,{
            'fields':['time']
        }),
        (None,{
            'fields':['image']
        }),
        (None,{
            'fields':['numberperson']
        }),
        (None,{
            "fields":['description']
        }
        ),
         (None,{
            'fields':['menu']
        }),
        # (None, {
        #     "fields": (
        #         ['pizzas']
        #     ),
        # }),
        # (None, {
        #     "fields": (
        #         ['sides']
        #     ),
        # }),
    )
    inlines=[PizzaInComboClientAdmin,SideDishesInComboClientAdmin]
class CartAdmin(admin.ModelAdmin):
    (None, {
            "fields": (
                ['user'],
            ),
        }),
    list_display = ['user', 'countorder']
    inlines = [OrderInLine]
class ProfileAdmin(admin.ModelAdmin):
    model = Profile
    readonly_fields = ['user','email','name','number_phone','address','pub_date']
    exclude = ['image']
admin.site.register(Profile, ProfileAdmin)
admin.site.register(Cart,CartAdmin)
# admin.site.register(Profile)
# admin.site.register(Cart)
admin.site.register(Order,OrderAdmin)
# admin.site.register(ComboClient, ComboClientAdmin)