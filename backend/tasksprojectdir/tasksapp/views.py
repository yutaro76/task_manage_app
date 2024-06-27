from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class SimpleView(APIView):
    def get(self, request):
        data = {'message': 'hello from backend'}
        return Response(data, status=status.HTTP_200_OK)