from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import requests

class TodoAPIView(APIView):
    def get(self, request):
        # Example: Fetch Todos
        todos = {"message": "Fetch todos logic goes here"}
        return Response(todos, status=status.HTTP_200_OK)

class GeminiAPIView(APIView):
    def post(self, request):
        # Example: Make a request to Gemini API
        data = request.data
        gemini_response = requests.post(
            'https://api.gemini.com/some-endpoint',
            headers={'Authorization': f"Bearer {YOUR_API_KEY}"},
            json=data
        )
        return Response(gemini_response.json(), status=gemini_response.status_code)
