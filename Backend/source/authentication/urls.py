"""mysite URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.urls import include, path
from rest_framework.authtoken import views

from .views.views import dummyView, getFakeList, getUserLocation, getRandom

from .views.userViews import UserLoginView, UserRegisterView
from .views.profileViews import createNewProfile, getProfiles, updateProfile, deleteProfile

urlpatterns = [
    url('api-token-auth/', views.obtain_auth_token, name='auth'),
    url('register/', UserRegisterView.as_view(), name='register'),
    url('dummy/', dummyView, name='dummy'),
    url('login/', UserLoginView.as_view(), name='login'),
    url('create/profile/', createNewProfile, name='create-profile'),
    path('get/profiles/<slug:name>', getProfiles, name='get-profile'),
    path('get/profiles/', getProfiles, name='get-profiles'),
    url('update/profile/', updateProfile, name='update-profile'),
    url('delete/profile/', deleteProfile, name='delete-profile'),
    url('get/fakes/', getFakeList, name='get-fake-persons'),
    url('location/', getUserLocation, name='get-location'),
    url('random/', getRandom, name='get-random')
]
