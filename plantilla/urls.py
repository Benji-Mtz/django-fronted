from django.contrib import admin
from django.urls import path

from . import views

urlpatterns = [
    path('login/', views.login, name='login'),
    path('', views.index, name='index'),
    path('mantenimiento/', views.mantenimiento, name='mantenimiento'),
    path('admin/', admin.site.urls),
]