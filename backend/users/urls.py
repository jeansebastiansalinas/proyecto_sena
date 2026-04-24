from django.urls import path
from .views import test_api
from .views import perfil
from .views import register


urlpatterns = [
    path('test/', test_api),
    path('perfil/', perfil),
    path('register/', register),
]