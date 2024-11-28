from django.shortcuts import render

from django.http import JsonResponse

def api_overview(request):
    return JsonResponse({
        "message": "Welcome to Rex AI Backend API",
        "endpoints": [
            "/api/tasks/",
            "/api/notes/",
        ]
    })
