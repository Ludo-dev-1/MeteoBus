# Meteo Bus

Meteo Bus est une petite application web qui affiche la météo actuelle pour une ville française donnée.  
Elle récupère les prévisions météo via l'API **Météo Concept** et les affiche de manière simple et claire avec une icône représentant le temps.

## Fonctionnalités

- Affiche le nom de la ville.
- Affiche la date et l’heure des prévisions.
- Affiche la température, la probabilité de pluie et la vitesse du vent.
- Affiche une icône correspondant aux conditions météo.
- Mise à jour automatique des données toutes les heures.

## Installation / Lancement

1. Cloner ou télécharger le projet.
2. Ouvrir le fichier `index.html` dans un navigateur moderne.

> L'application fonctionne directement depuis le navigateur, aucune installation supplémentaire n'est nécessaire.


## Configuration

Le fichier `conf.json` contient les informations de la ville pour laquelle les prévisions sont affichées, vous pouvez le modifier pour afficher la météo d'une autre ville :

```json
{
  "city": "Niort",
  "insee": "79191",
  "postal": "79000",
  "country": "France",
  "_note": "Code INSEE obligatoire pour l'API météo"
}
```

## Technologies utilisées

- HTML5

- JavaScript (ES Modules)

- TailwindCSS

- API Météo Concept 



Projet réalisé dans le cadre d'un exercice Simplon / MAIF.