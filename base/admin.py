from django.contrib import admin
from .models import Championnat 
from .models import Club
from .models import Equipenational
from .models import ParticipeChamp
from .models import ParticipeLeague

from .models import Game
from .models import Joueur
from .models import Matchclub
from .models import Matchequipe
from .models import Contribue
from .models import Evaluation

from .models import Sponsor
from .models import SponsorClub
from .models import SponsorEquipe

# Register your models here.
admin.site.register(Championnat)
admin.site.register(Club)
admin.site.register(Equipenational)
admin.site.register(ParticipeChamp)
admin.site.register(ParticipeLeague)

admin.site.register(Game)
admin.site.register(Joueur)
admin.site.register(Matchclub)
admin.site.register(Matchequipe)
admin.site.register(Contribue)
admin.site.register(Evaluation)

admin.site.register(Sponsor)
admin.site.register(SponsorClub)
admin.site.register(SponsorEquipe)

