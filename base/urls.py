from django.urls import path
from . import views

urlpatterns = [
    path("joueurs/", views.joueurs, name="joueurs"),
    path("joueurs/q1", views.q1, name="q1"),
    path("joueurs/q2", views.q2, name="q2"),
    path("clubs/", views.clubs, name="clubs"),
    path("clubs/q3", views.q3, name="q3"),
    path("clubs/q6/<int:id>", views.q6, name="q6"),
    path("clubs/q5/<int:id>", views.q5, name="q5"),
    path("clubs/", views.clubs, name="clubs"),
    path("sponsors/", views.sponsors, name="sponsors"),
    path("sponsors/q4", views.q4, name="q4"),
    path("clubs/q7a", views.q7a, name="q7a"),
    path("clubs/q7b", views.q7b, name="q7b"),
    path("clubs/q7c", views.q7c, name="q7c"),
    path("joueur/", views.joueur, name="joeur"),
    path("joueur/stat/<int:id>", views.statJoueur, name="statJoueur"),
]
