from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt

# Create your views here.


@csrf_exempt
def test(request):
	print(request.POST)
	return HttpResponse(request.POST["testData"], content_type="text")