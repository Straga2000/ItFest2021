from django.shortcuts import render
import rest_framework.decorators
from django.shortcuts import render

# Create your views here.
# -*- coding: utf-8 -*-
import base64
import hashlib
import hmac
import json
import os
from uuid import uuid4

import requests
from django.contrib.auth import authenticate

from django.http import HttpResponse, JsonResponse, HttpResponseRedirect
from django.conf import settings
from django.views.decorators.csrf import csrf_exempt

from rest_framework.authentication import BasicAuthentication, SessionAuthentication, TokenAuthentication
from rest_framework.authtoken.models import Token

from django.shortcuts import render, get_object_or_404, get_list_or_404

from rest_framework.decorators import api_view, permission_classes
from django.contrib.auth.decorators import login_required

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.renderers import BrowsableAPIRenderer
from rest_framework.decorators import renderer_classes
from rest_framework import generics
from rest_framework import mixins
from rest_framework.settings import api_settings

from rest_framework import status

from rest_framework.permissions import IsAdminUser, IsAuthenticated, AllowAny
from django.contrib.auth.models import User
from source.helpers import optionHelper, getStringFromList, APIExtended
from .helpers.activityHelpers import getActivity, getChoices


# Create your views here.

@api_view(['GET'])
@permission_classes([AllowAny])
def getSomeActivity(request):
    choice = request.GET.get('choice', None)
    parametersDict = {
        'type': choice if choice in getChoices() else None,
        'participants': request.GET.get('participants', None)
    }
    response = getActivity(parametersDict)
    if response.get('error') is not None:
        return JsonResponse(data=response, status=status.HTTP_400_BAD_REQUEST)
    return JsonResponse(data=response, status=status.HTTP_200_OK)

def getActivityChoices(request):
    return JsonResponse(data={'choices': getChoices()}, status=status.HTTP_200_OK)

# class ActivityView(APIExtended):
#     permission_classes = [IsAuthenticated]
#
#     def __init__(self, **kwargs):
#         super().__init__(UserSerializer, **kwargs)
#
#     def options(self, request, *args, **kwargs):
#
#         fieldsString = getStringFromList(self.fieldsNormalized, ', ')
#
#         self.parameters = optionHelper(request, self, {
#             'description': 'This endpoint receives %s and creates an account' % fieldsString,
#         })
#         return super().options(request, args, kwargs)
#
#     def createUser(self, data):
#         serializedUser = UserSerializer(data=data)
#         if serializedUser.is_valid():
#             user = serializedUser.create(validated_data=serializedUser.validated_data)
#             token, created = Token.objects.get_or_create(user=user)
#
#             response = Response({'user': serializedUser.getJsonVariant(user), 'token': token.key},
#                                 status=status.HTTP_201_CREATED)
#             response.set_cookie('auth_token', token.key)
#             return response
#         else:
#             return Response({'error': serializedUser.errors}, status=status.HTTP_400_BAD_REQUEST)
#
#     def get(self, request):
#         data = super().getTransform(request)
#         return self.createUser(data)
#
#     def post(self, request):
#         data = super().postTransform(request)
#         return self.createUser(data)
