from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator
# from django.contrib.auth.models import User


class Championnat(models.Model):
    # Field name made lowercase.
    # user = models.ForeignKey(User, models.DO_NOTHING, null=False)
    id_champ = models.AutoField(
        auto_created=True, db_column='ID_CHAMP', primary_key=True)
    # Field name made lowercase.
    nomchamp = models.TextField(db_column='NOMCHAMP')
    season = models.TextField(db_column='SEASON')  # Field name made lowercase.
    TypeChamp = models.TextField(db_column='TYPECHAMP')

    class Meta:
        # managed = False
        db_table = 'championnat'


class Club(models.Model):
    # Field name made lowercase.
    id_club = models.AutoField(
        auto_created=True, db_column='ID_CLUB', primary_key=True)
    # Field name made lowercase.
    nomclub = models.TextField(db_column='NOMCLUB')
    # Field name made lowercase.
    image = models.TextField(db_column='IMAGE', blank=True, null=True)
    # Field name made lowercase.
    paysclub = models.TextField(db_column='PAYSCLUB', blank=True, null=True)
    # Field name made lowercase.
    villeclub = models.TextField(db_column='VILLECLUB', blank=True, null=True)

    class Meta:
        # managed = False
        db_table = 'club'


class Contribue(models.Model):
    # Field name made lowercase.
    id_joueur_game = models.AutoField(
        auto_created=True, db_column='ID_CLUB_GAME', primary_key=True)
    id_joueur = models.ForeignKey(
        'Joueur', models.DO_NOTHING, db_column='ID_JOUEUR')
    # Field name made lowercase.
    id_game = models.ForeignKey('Game', models.DO_NOTHING, db_column='ID_GAME')

    class Meta:
        # managed = False
        db_table = 'contribue'
        # unique_together = (('id_joueur', 'id_game'),)


class Equipenational(models.Model):
    # Field name made lowercase.
    id_equipe = models.AutoField(
        auto_created=True, db_column='ID_EQUIPE', primary_key=True)
    # Field name made lowercase.
    nomequipe = models.TextField(db_column='NOMEQUIPE', blank=True, null=True)
    pays = models.TextField(db_column='PAYS')  # Field name made lowercase.
    # Field name made lowercase.
    image = models.TextField(db_column='IMAGE', blank=True, null=True)

    class Meta:
        # managed = False
        db_table = 'equipenational'


class Evaluation(models.Model):
    # Field name made lowercase.
    id_evaluation = models.AutoField(
        auto_created=True, db_column='ID_EVALUATION', primary_key=True)
    # Field name made lowercase.
    id_joueur = models.ForeignKey(
        'Joueur', models.DO_NOTHING, db_column='ID_JOUEUR', blank=True, null=True)
    # Field name made lowercase.
    id_game = models.ForeignKey('Game', models.DO_NOTHING, db_column='ID_GAME')
    # Field name made lowercase.
    nombpt1 = models.IntegerField(db_column='NOMBPT1')
    # Field name made lowercase.
    nombpt2 = models.IntegerField(db_column='NOMBPT2')
    # Field name made lowercase.
    nombpt3 = models.IntegerField(db_column='NOMBPT3')
    # Field name made lowercase.
    nombptr1 = models.IntegerField(db_column='NOMBPTR1')
    # Field name made lowercase.
    nombptr2 = models.IntegerField(db_column='NOMBPTR2', blank=True, null=True)
    # Field name made lowercase.
    nombptr3 = models.IntegerField(db_column='NOMBPTR3', blank=True, null=True)
    # Field name made lowercase.
    nombreb = models.IntegerField(db_column='NOMBREB', blank=True, null=True)
    # Field name made lowercase.
    nombpassd = models.IntegerField(db_column='NOMBPASSD')
    # Field name made lowercase.
    nombctre = models.IntegerField(db_column='NOMBCTRE', blank=True, null=True)
    # Field name made lowercase.
    nombfaute = models.IntegerField(
        db_column='NOMBFAUTE', blank=True, null=True)

    class Meta:
        # managed = False
        db_table = 'evaluation'


class Game(models.Model):
    # Field name made lowercase.
    id_game = models.AutoField(
        auto_created=True, db_column='ID_GAME', primary_key=True)
    # Field name made lowercase.
    id_champ = models.ForeignKey(
        Championnat, models.DO_NOTHING, db_column='ID_CHAMP')
    # Field name made lowercase.
    phase = models.TextField(db_column='PHASE', blank=True, null=True)
    # Field name made lowercase.
    datematch = models.DateField(db_column='DATEMATCH', blank=True, null=True)

    class Meta:
        # managed = False
        db_table = 'game'


class Joueur(models.Model):
    # Field name made lowercase.
    id_joueur = models.AutoField(
        auto_created=True, db_column='ID_JOUEUR', primary_key=True)
    # Field name made lowercase.
    id_club = models.ForeignKey(Club, models.DO_NOTHING, db_column='ID_CLUB')
    # Field name made lowercase.
    id_equipe = models.ForeignKey(
        Equipenational, models.DO_NOTHING, db_column='ID_EQUIPE', blank=True, null=True)
    # Field name made lowercase.
    nomjoueur = models.TextField(db_column='NOMJOUEUR')
    # Field name made lowercase.
    image = models.TextField(db_column='IMAGE', blank=True, null=True)
    # Field name made lowercase.
    prenomjoueur = models.TextField(db_column='PRENOMJOUEUR')
    # Field name made lowercase.
    datenaiss = models.DateField(db_column='DATENAISS')
    # Field name made lowercase.
    nationalite = models.TextField(db_column='NATIONALITE')
    # Field name made lowercase.
    taillejoueur = models.FloatField(
        db_column='TAILLEJOUEUR', validators=[MinValueValidator(1.0), MaxValueValidator(3.2)], blank=True)
    # Field name made lowercase.
    date_debut_eq = models.DateField(
        db_column='DATE_DEBUT_Eq', blank=True, null=True)
    # Field name made lowercase.
    date_fin_eq = models.DateField(
        db_column='DATE_FIN_Eq', blank=True, null=True)
    # Field name made lowercase.
    date_debut_cl = models.DateField(
        db_column='DATE_DEBUT_Cl', blank=True, null=True)
    # Field name made lowercase.
    date_fin_cl = models.DateField(
        db_column='DATE_FIN_Cl', blank=True, null=True)

    class Meta:
        # managed = False
        db_table = 'joueur'


class Matchclub(models.Model):
    # Field name made lowercase.
    id_club_game = models.AutoField(
        auto_created=True, db_column='ID_CLUB_GAME', primary_key=True)
    # Field name made lowercase.
    id_club = models.ForeignKey(Club, models.DO_NOTHING, db_column='ID_CLUB')
    # Field name made lowercase.
    id_game = models.ForeignKey(Game, models.DO_NOTHING, db_column='ID_GAME')
    type = models.TextField(db_column='Type')  # Field name made lowercase.
    # Field name made lowercase.
    score = models.IntegerField(db_column='SCORE', blank=True, null=True)

    class Meta:
        # managed = False
        db_table = 'matchclub'


class Matchequipe(models.Model):
    # Field name made lowercase.
    id_equipe_game = models.AutoField(
        auto_created=True, db_column='ID_EQUIPE_GAME', primary_key=True)
    # Field name made lowercase.
    id_equipe = models.ForeignKey(
        Equipenational, models.DO_NOTHING, db_column='ID_EQUIPE')
    # Field name made lowercase.
    id_game = models.ForeignKey(Game, models.DO_NOTHING, db_column='ID_GAME')
    type = models.TextField(db_column='Type')  # Field name made lowercase.
    # Field name made lowercase.
    score = models.IntegerField(db_column='SCORE', blank=True, null=True)

    class Meta:
        # managed = False
        db_table = 'matchequipe'


class ParticipeChamp(models.Model):
    # Field name made lowercase.
    id_equipe_champ = models.AutoField(
        auto_created=True, db_column='ID_EQUIPE_CHAMP', primary_key=True)
    id_equipe = models.ForeignKey(
        Equipenational, models.DO_NOTHING, db_column='ID_EQUIPE')
    # Field name made lowercase.
    id_champ = models.ForeignKey(
        Championnat, models.DO_NOTHING, db_column='ID_CHAMP')

    class Meta:
        # managed = False
        db_table = 'participe_champ'


class ParticipeLeague(models.Model):
    id_equipe_club = models.AutoField(
        auto_created=True, db_column='ID_EQUIPE_CLUB', primary_key=True)
    # Field name made lowercase.
    id_champ = models.ForeignKey(
        Championnat, models.DO_NOTHING, db_column='ID_CHAMP')
    # Field name made lowercase.
    id_club = models.ForeignKey(Club, models.DO_NOTHING, db_column='ID_CLUB')

    class Meta:
        # managed = False
        db_table = 'participe_league'


class Sponsor(models.Model):
    # Field name made lowercase.
    id_sponsor = models.AutoField(
        auto_created=True, db_column='ID_SPONSOR', primary_key=True)
    # Field name made lowercase.
    nomsponsor = models.TextField(
        db_column='NOMSPONSOR', blank=True, null=True)
    # Field name made lowercase.
    ville = models.TextField(db_column='VILLE', blank=True, null=True)
    # Field name made lowercase.
    image = models.TextField(db_column='IMAGE', blank=True, null=True)

    class Meta:
        # managed = False
        db_table = 'sponsor'


class SponsorClub(models.Model):
    # Field name made lowercase.
    id_sponsor_club = models.AutoField(
        auto_created=True, db_column='ID_SPONSOR_CLUB', primary_key=True)
    id_club = models.ForeignKey(
        Club, models.DO_NOTHING, db_column='ID_CLUB')
    # Field name made lowercase.
    id_sponsor = models.ForeignKey(
        Sponsor, models.DO_NOTHING, db_column='ID_SPONSOR')
    # Field name made lowercase.
    montant = models.FloatField(db_column='MONTANT', blank=True, null=True)
    # Field name made lowercase.
    date_debut = models.DateField(
        db_column='DATE_DEBUT', blank=True, null=True)
    # Field name made lowercase.
    date_fin = models.DateField(db_column='DATE_FIN', blank=True, null=True)

    class Meta:
        # managed = False
        db_table = 'sponsor_club'


class SponsorEquipe(models.Model):
    # Field name made lowercase.
    id_sponsor_equipe = models.AutoField(
        auto_created=True, db_column='ID_SPONSOR_EQUIPE', primary_key=True)
    id_sponsor = models.ForeignKey(
        Sponsor, models.DO_NOTHING, db_column='ID_SPONSOR')
    # Field name made lowercase.
    id_equipe = models.ForeignKey(
        Equipenational, models.DO_NOTHING, db_column='ID_EQUIPE')
    # Field name made lowercase.
    montant = models.FloatField(db_column='MONTANT', blank=True, null=True)
    # Field name made lowercase.
    date_debut = models.DateField(
        db_column='DATE_DEBUT', blank=True, null=True)
    # Field name made lowercase.
    date_fin = models.DateField(db_column='DATE_FIN', blank=True, null=True)

    class Meta:
        # managed = False
        db_table = 'sponsor_equipe'
