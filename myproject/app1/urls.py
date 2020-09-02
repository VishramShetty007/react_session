from django.conf.urls import include, url
from app1 import views

 
urlpatterns = [ 
    url(r'^test/$', views.test),
]