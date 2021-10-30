import requests
from django.conf import settings
from urllib.parse import urlencode
from source.helpers import cleanParameters
link = settings.BORED_LINK

def getActivity(parameters):
    parameters = cleanParameters(parameters)
    parameters = urlencode(parameters)
    print(parameters)
    request = requests.get(link + '?' + parameters)
    if request.status_code == 200:
        response = request.json()
        return response
    return {'error': 'there is no response'}

def getChoices():
    return ["education", "recreational", "social", "diy", "charity", "cooking", "relaxation", "music", "busywork"]