# Visualiseur DMARC : Serveur

> ## :construction: Projet en cours de développement :construction:


![Alt text](https://github.com/Rulio974/DMARC-serveur/blob/main/assets/ban_serveur.png)


## Introduction 👋
DMARC (Domain-based Message Authentication, Reporting and Conformance) est une norme de vérification d'email conçue pour lutter contre l'usurpation d'adresse email. Cette technologie permet aux propriétaires de domaine d'indiquer aux serveurs de messagerie comment gérer les emails non authentifiés provenant de leur domaine, contribuant ainsi à protéger les utilisateurs finaux contre l'hameçonnage et autres types d'attaques par usurpation.

La spécification DMARC s'appuie sur deux technologies existantes :

SPF (Sender Policy Framework) permet aux propriétaires de domaine de publier une liste de serveurs autorisés à envoyer des emails en leur nom.

DKIM (DomainKeys Identified Mail) ajoute une signature numérique à la tête de chaque email envoyé, qui peut être vérifiée par le serveur de messagerie du destinataire pour prouver que l'email est légitime et n'a pas été modifié pendant le transport.

Lorsqu'un serveur de messagerie reçoit un email, il peut vérifier les enregistrements DMARC du domaine de l'expéditeur pour voir comment traiter l'email.

## Fonctionnalités

DMARC serveur permet de parser, de stocker et d'exposer des rapports DMARC. Il est construit pour permettre aux utilisateurs d'interagir facilement avec ces derniers.
Il est basé sur le projet `https://github.com/userjack6880/Open-DMARC-Analyzer`.

## Installation Serveur 💻

### Intallez Open DMARC Analyzer

Clonez le dépôt ```git clone https://github.com/userjack6880/Open-Report-Parser``` et suivez les instructions.

### Installez DMARC-serveur

Clonez ce dépôt ```git clone https://github.com/Rulio974/DMARC-serveur```.

Copiez les fichiers ```cp -r DMARC-serveur/* {CHEMIN VERS Open-Report-Parser} && cd DMARC-serveur```.

Installez les modules ```npm install```.

Lancez le serveur ```node serveur.js -p 3000```.


## Installation client

Installez et suivez les instrcutions du dépôt client ```https://github.com/Rulio974/DMARC-Flutter-Viewer``` pour intéragir et visualiser les données.






