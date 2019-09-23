from django.urls import path, include
from base_project.core import views

app_name = 'core'

urlpatterns = [
    path('', views.index, name='index'),
]
