## :construction: Projet en cours de développement :construction:

# Visualiseur DMARC : Serveur

Visualiseur DMARC permet de parser, de stocker et d'exposer des rapports DMARC. Il est construit pour permettre aux utilisateurs d'interagir facilement avec ces derniers.
Il est basé sur le projet `https://github.com/userjack6880/Open-DMARC-Analyzer`.

## Installation

### Intallez Open DMARC Analyzer

Clonez le dépôt ```git clone https://github.com/userjack6880/Open-Report-Parser``` et suivez les instructions.

### Installez DMARC-serveur

Clonez ce dépôt ```git clone https://github.com/Rulio974/DMARC-serveur```.

Copiez les fichiers ```cp -r DMARC-serveur/* {CHEMIN VERS Open-Report-Parser} && cd DMARC-serveur```.

Installez les modules ```npm install```.

Lancez le serveur ```node serveur.js -p 3000```.


## Usage

Installez et suivez les instrcutions du dépôt client ```https://github.com/Rulio974/DMARC-Flutter-Viewer``` pour intéragir et visualiser les données.






