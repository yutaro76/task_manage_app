from django.urls import path
from .views import SimpleView

urlpatterns = [
    path('hello/', SimpleView.as_view(), name='hello'),
]