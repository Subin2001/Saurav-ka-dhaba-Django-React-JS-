from django.urls import path
from blog import views

urlpatterns = [
    path('',views.index,name='home'),
    path('create/',views.studentCreate),
    path('retrieve/',views.retrieveStudent),
    path('update/',views.updateStudent),
    path('delete/',views.delete_Student),
]
