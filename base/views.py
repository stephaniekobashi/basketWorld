from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.urls import reverse
from django.template.loader import render_to_string
from django.http import HttpResponse, JsonResponse, HttpResponseNotFound, HttpResponseRedirect
from django.db import connection
# from newsapi import NewsApiClient
# general SQL functions


def dictfetchall(cursor):
    "Return all rows from a cursor as a dict"
    columns = [col[0] for col in cursor.description]
    return [
        dict(zip(columns, row))
        for row in cursor.fetchall()
    ]

# General view functions


@api_view(['GET'])
def joueurs(request):
    try:
        cursor = connection.cursor()
        response_data = cursor.execute('''SELECT * FROM `joueur`''')
        response_data = dictfetchall(cursor)
        return Response(response_data)
    except:
        return Response({'error': "this request is not available"})


@api_view(['GET'])
def clubs(request):
    try:
        cursor = connection.cursor()
        cursor.execute(
            '''SELECT *  FROM `club`''')
        response_data = dictfetchall(cursor)
        return Response(response_data)
    except:
        return Response({'error': "this request is not available"})


@api_view(['GET'])
def sponsors(request):
    try:
        cursor = connection.cursor()
        cursor.execute('''SELECT * FROM `sponsor`''')
        response_data = dictfetchall(cursor)
        return Response(response_data)
    except:
        return Response({'error': "this request is not available"})


# questions view functions

# question 1
@api_view(['GET'])
def q1(request):
    try:
        cursor = connection.cursor()
        cursor.execute('''select J.ID_JOUEUR, J.NOMJOUEUR, J.PRENOMJOUEUR,J.IMAGE, J.NATIONALITE, 3*SUM(NOMBPTR3*1.)+2*SUM(NOMBPTR2*1.)+SUM(NOMBPTR1*1.) as PointsTotal
from evaluation E, joueur J
where E.ID_GAME in (
	SELECT G.ID_GAME
	from game G, championnat CHAMP 
	where CHAMP.TypeCHAMP = 'Championnat') and
	E.ID_JOUEUR = J.ID_JOUEUR
group by J.ID_JOUEUR, J.NOMJOUEUR,J.PRENOMJOUEUR,J.IMAGE, J.NATIONALITE
order by PointsTotal desc
limit 10;
''')
        response_data = dictfetchall(cursor)
        return Response(response_data)
    except:
        return Response({'error': "this request is not available"})

# question 2


@api_view(['GET'])
def q2(request):
    try:
        cursor = connection.cursor()
        cursor.execute('''select J.ID_JOUEUR, J.NOMJOUEUR, J.PRENOMJOUEUR,J.ID_JOUEUR,J.IMAGE, case when sum(E.NOMBPT1*1.) = 0 then 0 else sum(E.NOMBPTR1*1.)/sum(E.NOMBPT1*1.) end as  Lancelibre
from evaluation E, joueur J
where E.ID_GAME in (
	SELECT G.ID_GAME
	from game G, championnat Champ 
	where Champ.NOMCHAMP = 'Eurobasket' and Champ.SEASON = '2015' and G.PHASE = 'Finale') and
	J.ID_JOUEUR = E.ID_JOUEUR
group by J.ID_JOUEUR
order by Lancelibre desc
limit 3;''')
        response_data = dictfetchall(cursor)
        return Response(response_data)
    except:
        return Response({'error': "this request is not available"})

# question 3


@api_view(['GET'])
def q3(request):
    try:
        cursor = connection.cursor()
        cursor.execute('''SELECT
    C.ID_CLUB, C.IMAGE, C.NOMCLUB, AVG(J.TAILLEJOUEUR) as avg
FROM
    joueur J, club C
WHERE
    J.DATE_FIN_Cl > CURRENT_DATE() and J.ID_CLUB = C.ID_CLUB
    GROUP BY
        C.ID_CLUB
    ORDER BY
        AVG(J.TAILLEJOUEUR)
    DESC
    limit 10;''')
        response_data = dictfetchall(cursor)
        return Response(response_data)
    except:
        return Response({'error': "this request is not available"})

 # question 4


@api_view(['GET'])
def q4(request):
    try:
        cursor = connection.cursor()
        cursor.execute('''WITH cte AS (
   SELECT matchequipe.ID_equipe, matchequipe.ID_Game, championnat.SEASON, sponsor_equipe.ID_SPONSOR,
            RANK() OVER ( PARTITION BY ID_game
            ORDER BY Score DESC
            ) AS r
    FROM matchequipe JOIN game on matchequipe.ID_Game = game.ID_GAME JOIN championnat on game.ID_CHAMP = championnat.ID_CHAMP  JOIN sponsor_equipe on matchequipe.ID_EQUIPE = sponsor_equipe.ID_EQUIPE
    where championnat.NOMCHAMP = "World Cup" and game.PHASE = "Finale"
)
SELECT cte.ID_equipe, equipenational.PAYS,season, cte.id_sponsor, s.NOMSPONSOR,s.IMAGE
FROM cte , equipenational, sponsor s
WHERE r = 1 and cte.ID_equipe = equipenational.ID_EQUIPE and cte.ID_SPONSOR = s.ID_SPONSOR;''')
        response_data = dictfetchall(cursor)
        return Response(response_data)
    except:
        return Response({'error': "this request is not available"})
# # question 5


@api_view(['GET'])
def q5(request, id):
    try:
        cursor = connection.cursor()
        cursor.execute('''Select  J.ID_Joueur, J.NOMJOUEUR, J.PRENOMJOUEUR, sum(E.nombptR3)*1./sum(E.nombpt3)*100 as '%Point3'
from evaluation E, joueur J
where J.ID_JOUEUR in (
	SELECT ID_Joueur
	from joueur where E.ID_JOUEUR = joueur.ID_JOUEUR and ID_Club = %s) and
	E.ID_GAME in (
	SELECT ID_Game
	from game G, championnat Champ 
	where E.ID_GAME = G.ID_GAME and Champ.TYPECHAMP = 'League' and Champ.SEASON = '2021/2022')
group by J.ID_Joueur
order by sum(E.nombptR3)*1./sum(E.nombpt3)*100 desc
limit 5;
''', [id])
        response_data = dictfetchall(cursor)
        return Response(response_data)
    except:
        return Response({'error': "this request is not available"})
 # question 6


@api_view(['GET'])
def q6(request, id):
    try:
        cursor = connection.cursor()
        cursor.execute('''select J.ID_Joueur,J.IMAGE, J.NOMJOUEUR, J.PRENOMJOUEUR, avg(E.nombPassD*1.0) as Passe
from evaluation E, joueur J
where J.ID_Club = %s and J.ID_JOUEUR = E.ID_JOUEUR
group by J.ID_Joueur
order by avg(E.nombPassD*1.0) desc
limit 5;''', [id])
        response_data = dictfetchall(cursor)
        return Response(response_data)
    except:
        return Response({'error': "this request is not available"})

 # question 7A


@api_view(['GET'])
def q7a(request):
    try:
        cursor = connection.cursor()
        cursor.execute('''WITH cte AS (
   SELECT ID_club, matchclub.ID_Game, Score, game.ID_CHAMP, championnat.SEASON, championnat.NOMCHAMP, game.PHASE,
            RANK() OVER ( PARTITION BY ID_game
            ORDER BY Score DESC
            ) AS r
    FROM matchclub JOIN game on matchclub.ID_Game = game.ID_GAME JOIN championnat on game.ID_CHAMP = championnat.ID_CHAMP
    where championnat.NOMCHAMP = "Euroleague" and game.PHASE = "Finale" 
)
SELECT cte.ID_club, club.NOMCLUB, season, club.IMAGE
FROM cte , club
WHERE r = 1 and cte.ID_Club = club.ID_CLUB;
''')
        response_data = dictfetchall(cursor)
        return Response(response_data)
    except:
        return Response({'error': "this request is not available"})

 # question 7B


@api_view(['GET'])
def q7b(request):
    try:
        cursor = connection.cursor()
        cursor.execute('''WITH cte AS (
   SELECT ID_club, matchclub.ID_Game, Score, game.ID_CHAMP, championnat.SEASON, championnat.NOMCHAMP, game.PHASE,
            RANK() OVER ( PARTITION BY ID_game
            ORDER BY Score DESC
            ) AS r
    FROM matchclub JOIN game on matchclub.ID_Game = game.ID_GAME JOIN championnat on game.ID_CHAMP = championnat.ID_CHAMP
    where championnat.NOMCHAMP = "Euroleague" and game.PHASE = "Finale" 
)
SELECT cte.ID_club, club.NOMCLUB, count(cte.ID_club) as "Combien d'Euroleague?", club.IMAGE
FROM cte , club
WHERE r = 1 and cte.ID_Club = club.ID_CLUB
GROUP by cte.ID_club;''')
        response_data = dictfetchall(cursor)
        return Response(response_data)
    except:
        return Response({'error': "this request is not available"})

 # question 7C


@api_view(['GET'])
def q7c(request):
    try:
        cursor = connection.cursor()
        cursor.execute('''WITH cte AS (
   SELECT ID_club, matchclub.ID_Game, Score, game.ID_CHAMP, championnat.SEASON, championnat.NOMCHAMP, game.PHASE,
            RANK() OVER ( PARTITION BY ID_game
            ORDER BY Score DESC
            ) AS r
    FROM matchclub JOIN game on matchclub.ID_Game = game.ID_GAME JOIN championnat on game.ID_CHAMP = championnat.ID_CHAMP
    where championnat.NOMCHAMP = "Euroleague" and game.PHASE = "Finale" 
)
SELECT cte.ID_club, club.NOMCLUB, count(cte.ID_club) as "Combien", club.IMAGE
FROM cte , club
WHERE r = 1 and cte.ID_Club = club.ID_CLUB
GROUP by cte.ID_club
having count(cte.ID_club) >2;''')
        response_data = dictfetchall(cursor)
        return Response(response_data)
    except:
        return Response({'error': "this request is not available"})


# A single view page
# for a player

@api_view(['GET'])
def joueur(request):
    try:
        cursor = connection.cursor()
        cursor.execute('''SELECT joueur.*,c.NOMCLUB,c.PAYSCLUB ,c.VILLECLUB,c.IMAGE as imageClub,eq.NOMEQUIPE ,eq.PAYS,eq.IMAGE as imageEq
FROM ((joueur
INNER JOIN equipenational eq ON joueur.ID_equipe = eq.ID_equipe)
JOIN club c ON joueur.ID_club = c.ID_club);
''')
        response_data = dictfetchall(cursor)
        return Response(response_data)
    except:
        return Response({'error': "this request is not available"})


@api_view(['GET'])
def statJoueur(request, id):
    try:
        cursor = connection.cursor()
        cursor.execute('''Select  championnat.id_champ, nomchamp, season, avg(nombptR3*1.0) as 
'MoyPt3', avg(nombptR2*1.0) as MoyPt2, avg(nombpassD*1.0) 
as 'MoyPass', avg(nombReb*1.0) as MoyReb, avg(nombCtre*1.0) as 'MoyBlock'
from ((evaluation inner join game on evaluation.ID_GAME = game.ID_GAME) inner JOIN championnat on game.ID_CHAMP = championnat.ID_CHAMP)
where id_joueur=%s
group by id_joueur, id_champ;''', [id])
        response_data = dictfetchall(cursor)
        return Response(response_data)
    except:
        return Response({'error': "this request is not available"})
