from django.urls import path
from .views import TaskListCreateView, AIResponseView, RegisterUserView, LoginUserView
urlpatterns = [
    path("tasks/", TaskListCreateView.as_view(), name="task-list-create"),
    path("ai-response/", AIResponseView.as_view(), name="ai-response"),
    path('register/', RegisterUserView.as_view(), name='register'),
    path('login/', LoginUserView.as_view(), name='login'),
]
