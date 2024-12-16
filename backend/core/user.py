# user.py

from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.renderers import JSONRenderer

class UserDetailsView(APIView):
    renderer_classes = [JSONRenderer]
    parser_classes = [MultiPartParser, FormParser]
    permission_classes = [IsAuthenticated]  # Ensure only authenticated users can access

    def get(self, request):
        user = request.user
        user_data = {
            "name": user.username,
            "email": user.email,
            "profileImage": user.profile.profile_image.url if user.profile.profile_image else None,
            "stats": {
                "posts": 10,  # Placeholder for actual stats
                "comments": 50,
                "likes": 200
            }
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
            "stats": {
                "posts": 10,
                "comments": 50,
                "likes": 200
            }
        }
        return Response(updated_data, status=status.HTTP_200_OK)
