from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import authenticate, get_user_model
from rest_framework_simplejwt.tokens import RefreshToken
from django.conf import settings
from rest_framework.renderers import JSONRenderer
from rest_framework.permissions import IsAuthenticated
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework_simplejwt.authentication import JWTAuthentication  # Add this import

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
        refresh = RefreshToken.for_user(user)
        return Response({
            'refresh': str(refresh),
            'access': str(refresh.access_token),
            "message": "User created successfully"
        }, status=status.HTTP_201_CREATED)

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

        refresh = RefreshToken.for_user(user)
        return Response({
            'refresh': str(refresh),
            'access': str(refresh.access_token),
            "message": "Logged in successfully"
        }, status=status.HTTP_200_OK)

class UserDetailsView(APIView):
    renderer_classes = [JSONRenderer]
    parser_classes = [MultiPartParser, FormParser]
    permission_classes = [IsAuthenticated]  # Ensure only authenticated users can access
    authentication_classes = [JWTAuthentication]  # Add this line

    def get(self, request):
        user = request.user
        user_data = {
            "name": user.username,
            "email": user.email,
            "profileImage": user.profile.profile_image.url if user.profile.profile_image else None,
        }
        return Response(user_data, status=status.HTTP_200_OK)

    def put(self, request):
        user = request.user
        user_data = request.data
        name = user_data.get("name")
        profile_image = user_data.get("profileImage")

        if name:
            user.username = name
        if profile_image:
            user.profile.profile_image = profile_image

        user.save()
        updated_data = {
            "name": user.username,
            "email": user.email,
            "profileImage": user.profile.profile_image.url if user.profile.profile_image else None,
        }
        return Response(updated_data, status=status.HTTP_200_OK)