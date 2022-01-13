from django.shortcuts import render
from django.http import HttpResponse
from django.conf import settings
from django.core.files.storage import FileSystemStorage
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

def root(request):
    return render(request,'main/home.html')


@csrf_exempt
def test01(request):
    print('this is test01')
    #return HttpResponse('plop')
    # return render(request,'main/test.html' )
    my_json = {'response':'Youpi ça marche'}
    return JsonResponse(my_json)
