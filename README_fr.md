# Converse pour YunoHost

[![Integration level](https://dash.yunohost.org/integration/converse.svg)](https://dash.yunohost.org/appci/app/converse) ![](https://ci-apps.yunohost.org/ci/badges/converse.status.svg) ![](https://ci-apps.yunohost.org/ci/badges/converse.maintain.svg)  
[![Installer Converse avec YunoHost](https://install-app.yunohost.org/install-with-yunohost.svg)](https://install-app.yunohost.org/?app=converse)

*[Read this readme in english.](./README.md)* 

> *This package allow you to install Converse quickly and simply on a YunoHost server.
If you don’t have YunoHost, please see [here](https://yunohost.org/#/install) to know how to install and enjoy it.*

## Vue d’ensemble
Converse est un client de chat XMPP open-source écrit en JavaScript qui peut être étroitement intégré à n'importe quel site Web.
L'avantage d'utiliser converse.js par rapport à une solution SaaS (software-as-a-service), est que vos utilisateurs peuvent avoir une expérience de chat beaucoup plus personnalisée, rationalisée et intégrée et que vous avez le contrôle sur les données.

**Version incluse :** 7.0.5

## Captures d’écran

![](Screenshot.png)

## Démo

* [Démo officielle](https://inverse.chat/)

## Documentation

 * Documentation officielle : https://conversejs.org/docs/html/index.html
 * Documentation YunoHost : Si une documentation spécifique est nécessaire, n'hésitez pas à contribuer.

#### Architectures supportées

* x86-64 - [![Build Status](https://ci-apps.yunohost.org/ci/logs/converse%20%28Apps%29.svg)](https://ci-apps.yunohost.org/ci/apps/converse/)
* ARMv8-A - [![Build Status](https://ci-apps-arm.yunohost.org/ci/logs/converse%20%28Apps%29.svg)](https://ci-apps-arm.yunohost.org/ci/apps/converse/)

## Liens

 * Signaler un bug : https://github.com/YunoHost-Apps/converse_ynh/issues
 * Site de l'application : http://conversejs.org/
 * Dépôt de l’application principale : https://github.com/conversejs/converse.js
 * Site web YunoHost : https://yunohost.org/

---

## Informations pour les développeurs

Merci de faire vos pull request sur la [branche testing](https://github.com/YunoHost-Apps/converse_ynh/tree/testing).

Pour essayer la branche testing, procédez comme suit.
```
sudo yunohost app install https://github.com/YunoHost-Apps/converse_ynh/tree/testing --debug
ou
sudo yunohost app upgrade converse -u https://github.com/YunoHost-Apps/converse_ynh/tree/testing --debug
```
