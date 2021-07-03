# Converse pour YunoHost

[![Niveau d'intégration](https://dash.yunohost.org/integration/converse.svg)](https://dash.yunohost.org/appci/app/converse) ![](https://ci-apps.yunohost.org/ci/badges/converse.status.svg) ![](https://ci-apps.yunohost.org/ci/badges/converse.maintain.svg)  
[![Installer Converse avec YunoHost](https://install-app.yunohost.org/install-with-yunohost.svg)](https://install-app.yunohost.org/?app=converse)

*[Read this readme in english.](./README.md)*
*[Lire ce readme en français.](./README_fr.md)*

> *Ce package vous permet d'installer Converse rapidement et simplement sur un serveur YunoHost.
Si vous n'avez pas YunoHost, regardez [ici](https://yunohost.org/#/install) pour savoir comment l'installer et en profiter.*

## Vue d'ensemble

Client de chat XMPP/Jabber basé sur le Web

**Version incluse :** 7.0.5~ynh1

**Démo :** https://inverse.chat/

## Documentations et ressources

* Site officiel de l'app : http://conversejs.org
* Documentation officielle de l'admin : https://conversejs.org/docs/html/index.html
* Dépôt de code officiel de l'app : https://github.com/conversejs/converse.js
* Documentation YunoHost pour cette app : https://yunohost.org/app_converse
* Signaler un bug : https://github.com/YunoHost-Apps/converse_ynh/issues

## Informations pour les développeurs

Merci de faire vos pull request sur la [branche testing](https://github.com/YunoHost-Apps/converse_ynh/tree/testing).

Pour essayer la branche testing, procédez comme suit.
```
sudo yunohost app install https://github.com/YunoHost-Apps/converse_ynh/tree/testing --debug
ou
sudo yunohost app upgrade converse -u https://github.com/YunoHost-Apps/converse_ynh/tree/testing --debug
```

**Plus d'infos sur le packaging d'applications :** https://yunohost.org/packaging_apps