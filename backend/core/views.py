from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import authenticate, get_user_model
import jwt as pyjwt
from django.conf import settings
from rest_framework.renderers import JSONRenderer

User = get_user_model()

class TodoAPIView(APIView):
    renderer_classes = [JSONRenderer]
    def get(self, request):
        # Placeholder for fetching todos
        return Response({"message": "Fetch todos logic goes here"}, status=status.HTTP_200_OK)

class GeminiAPIView(APIView):
    renderer_classes = [JSONRenderer]
    def post(self, request):
        data = request.data
        gemini_response = requests.post(
            'https://api.gemini.com/some-endpoint',
            headers={'Authorization': f"Bearer {settings.GEMINI_API_KEY}"},
            json=data
        )
        return Response(gemini_response.json(), status=gemini_response.status_code)

class SignupView(APIView):
    renderer_classes = [JSONRenderer]
    def post(self, request):
        username = request.data.get("username")
        email = request.data.get("email")
        password = request.data.get("password")

        if not username or not email or not password:
            return Response({"message": "Username, email, and password are required"}, status=status.HTTP_400_BAD_REQUEST)

        if User.objects.filter(email=email).exists():
            return Response({"message": "Email is already taken"}, status=status.HTTP_400_BAD_REQUEST)

        user = User.objects.create_user(username=username, email=email, password=password)
        token = pyjwt.encode({"id": user.id, "email": user.email}, settings.SECRET_KEY, algorithm="HS256")
        return Response({"token": token, "message": "User created successfully"}, status=status.HTTP_201_CREATED)

class LoginView(APIView):
    renderer_classes = [JSONRenderer]
    def post(self, request):
        email = request.data.get("email")
        password = request.data.get("password")

        if not email or not password:
            return Response({"message": "Email and password are required"}, status=status.HTTP_400_BAD_REQUEST)

        user = authenticate(request, username=email, password=password)

        if user is None or not user.is_active:
            return Response({"message": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)

        token = pyjwt.encode({"id": user.id, "email": user.email}, settings.SECRET_KEY, algorithm="HS256")
        return Response({"token": token, "message": "Logged in successfully"}, status=status.HTTP_200_OK)
