# JR_MW_TEAMGEN
Sujet : Création d'un site générateur de tirage de groupe aléatoire

L'idée générale :
Afficher dans un tableau à deux colonnes la liste des élèves divisés en deux. Ces derniers seront choisis aléatoirement. Au pied de chaque colonne sera affiché les jours de présentiel et de distanciel. L'opération sera générée par un bouton cliquable.

- Premièrement, structurer notre document HTML (titre, tableau, bouton cliquable)
Pour le côté responsive : nous utiliserons le framework Bootstrap, car il nous permet d'être responsive avec les options @media en utilisant : SM, MD, LG, XL,

- Ensuite, pour choisir aléatoirement les élèves à répartir : création d'un tableau en JS avec les noms des 15 élèves. On utilisera la méthode Math.floor et Math.random pour les récupérer.

- Enfin, on terminera par le côté esthétique avec un fichier CSS

Pour la gestion de travail : nous travaillerons avec un outil de gestion de version de sources (Gitlab)





----------------------------------------------

COTE GRAPHIQUE: 
- L'interface graphique est simple et effice. 
- Les couleurs sont bien choisies car pas trop nuancées.
- Dans la page, il appararait un texte qui na pas modifié et donc celui ci doit etre modifié ou effacé.



COTE TECHNIQUE:
- Lorsque je clique sur le bouton: "Tirage aléatoire", a premier clic il forme bien 2 groupes, puis ensuite, les tirages suivants ne forment plus 2 groupes. il faudrait un bouton qui permet de réinitialiser.
- C'est dommage qu'on ne puisse pas voir la liste des stagiaires (et eventuellement en rajouter)

- Je trouve bien d'avoir proposé une séparation en 2 groupes selon les contraintes de chacun (disponibilité journalière)
- le HTML a ete fait tout en <div> 


Je trouve que ce générateur de groupes est clair a comprendre. IL y a juste des mofifications a faire au niveau du bouton et du texte.

