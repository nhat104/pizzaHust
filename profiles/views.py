import django
from django.db.models import query
from django.shortcuts import render, redirect
from django.contrib import messages
# from myproject.profiles import serializer
# from myproject.profiles.serializer import CartSerializer, OrderSerializer
from profiles.serializer import *
from .models import *
from rest_framework import generics, serializers

# from myproject.profiles.models import Profile
from .forms import RegisterForm
# Create your views here.
from rest_framework import generics, permissions
from rest_framework.response import Response
from knox.models import AuthToken
from .serializer import UserSerializer, RegisterSerializer


# Register API
class RegisterAPI(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1]
        })


from knox.views import LoginView as KnoxLoginView
from rest_framework.authtoken.serializers import AuthTokenSerializer
from django.contrib.auth import login

class LoginAPI(KnoxLoginView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        serializer = AuthTokenSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        login(request, user)
        return super(LoginAPI, self).post(request, format=None)


def register(request):
    if request.method == "POST":
        form = RegisterForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, "User created successfully!")
            return redirect('home:index1')
    else:
        form = RegisterForm()
    return render(request, "profiles/register.html", {"form": form})


class ProfileDeltail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfilesSerializaer
    name = 'profile-detail'
    
class ProfileList(generics.ListCreateAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfilesSerializaer
    name = 'profile-list'
    filter_fields = ['user__username']


class OrderList(generics.ListCreateAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    name = 'order-list'


class OrderDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    name = 'order-detail'


class CartDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Cart.objects.all()
    serializer_class = CartSerializer
    name = 'cart-detail'
    
class CartList(generics.ListCreateAPIView):
    queryset = Cart.objects.all()
    serializer_class = CartSerializer
    name = 'cart-list'
    filter_fields = ['user__username']

class OrderPizzaList(generics.ListCreateAPIView):
    queryset = OrderPizza.objects.all()
    serializer_class = OrderPizzaSerializer
    name = 'orderpizza-list'


class OrderPizzaDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = OrderPizza.objects.all()
    serializer_class = OrderPizzaSerializer
    name = 'orderpizza-detail'


class OrderSideDishesList(generics.ListCreateAPIView):
    queryset = OrderSideDishes.objects.all()
    serializer_class = OrderSideSerializer
    name = 'ordersidedishes-list'


class OrderSideDishesDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = OrderSideDishes.objects.all()
    serializer_class = OrderSideSerializer
    name = 'ordersidedishes-detail'


class OrderComboList(generics.ListCreateAPIView):
    queryset = OrderCombo.objects.all()
    serializer_class = OrderComboSerializer
    name = 'ordercombo-list'


class OrderComboDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = OrderCombo.objects.all()
    serializer_class = OrderComboSerializer
    name = 'ordercombo-detail'


class UserList(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    name = 'user-list'


# class ComboClientList(generics.ListCreateAPIView):
#     queryset = ComboClient.objects.all()
#     serializer_class = ComboClientSerializer
#     name = 'comboclient-list'


# class ComboClientDetail(generics.RetrieveUpdateDestroyAPIView):
#     queryset = ComboClient.objects.all()
#     serializer_class = ComboClientSerializer
#     name = 'comboclient-detail'


class PizzaInComboClientList(generics.ListCreateAPIView):
    queryset = PizzaInComboClient.objects.all()
    serializer_class = PizzaInComboClientSerializer
    name = 'pizzaincomboclient-list'


class PizzaInComboClientDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = PizzaInComboClient.objects.all()
    serializer_class = PizzaInComboClientSerializer
    name = 'pizzaincomboclient-detail'


class SideInComboClientList(generics.ListCreateAPIView):
    queryset = SideDishesInComboClient.objects.all()
    serializer_class = SideDishesInComboClientSerializer
    name = 'sidedishesincomboclient-list'


class SideInComboClientDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = SideDishesInComboClient.objects.all()
    serializer_class = SideDishesInComboClientSerializer
    name = 'sidedishesincomboclient-detail'


class ToppingAmountList(generics.ListCreateAPIView):
    queryset = ToppingAmount.objects.all()
    serializer_class = ToppingAmountSerializer
    name = 'toppingamount-list'


class ToppingAmountDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = ToppingAmount.objects.all()
    serializer_class = ToppingAmountSerializer
    name = 'toppingamount-detail'
# class ScorePizzaList(generics.ListCreateAPIView):
#     queryset = ScorePizza.objects.all()
#     serializer_class = ScorePizzaSerialize
#     name = 'scorepizza-list'
