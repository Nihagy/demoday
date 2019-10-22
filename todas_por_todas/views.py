from django.shortcuts import render
from django.contrib.auth.models import User
from django.contrib.auth import authenticate

# Create your views here.

def index(request):
    return render(request, 'index.html')

def contato(request):
    return render(request, 'contato.html')

def sobre(request):
    return render(request, 'sobre.html')

def login(request):
    return render(request, 'login.html')

 
