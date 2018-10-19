# oss-117-minigame
Projet scolaire en HTML5, CSS3, JS. 3 minijeux pour tester ses connaissances sur OSS 117.

On lance le site via le fichier index.

le site entier est moche et vieux pour correspondre à l'éthique du film (tous comme les couleurs qui sont celles du logo)

Un menu nous propose 3 jeux:

-"Réplicatrou": une réplique du film s'affiche, il faut ensuite trouver la partie manquante de la phrase .
  La réplique est alors joué une fois la réponse validé; il est donc préferable de jouer avec le son.

-"une question une réponse": La question s'affiche, il faut trouver la bonne réponse parmi quatre placées aléatoirement.
-"une image un nom" : Une image apparait, on a alors le choix entre plusieurs prénoms placées aléatoirement.

A chaque fois on a le score actuel et le meilleur score pour chaque jeu.
Le meilleur score est sauvegarder dans un cookie pour chaque jeu.

L'application est responsive.

Le jeu pourrait être amélioré en poussant les regex d'analyse de réponse aux questions afin d'éviter les erreurs d'orthographe. On peut aussi lier notre jeu à une BD afin de ne plus avoir d'objet JS dans le projet pour stocker nos données
