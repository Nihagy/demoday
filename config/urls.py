"""config URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from todas_por_todas import views
import todas_por_todas
# from django.views.generic import RedirectView


# troca o caminho das url pelo caminha que ta com aspas
urlpatterns = [
    path('admin/', admin.site.urls),
    path('home/', views.index),
    path('', views.index),
    path('sobre/', views.sobre),
    path('contato/', views.contato),
    path('login/', views.login),
]

# urlpatterns += [
#     path('', RedirectView.as_view(url='/home/')),
# ]
