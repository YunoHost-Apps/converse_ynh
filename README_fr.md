<!--
Nota bene : ce README est automatiquement généré par <https://github.com/YunoHost/apps/tree/master/tools/readme_generator>
Il NE doit PAS être modifié à la main.
-->

# Converse pour YunoHost

[![Niveau d’intégration](https://dash.yunohost.org/integration/converse.svg)](https://dash.yunohost.org/appci/app/converse) ![Statut du fonctionnement](https://ci-apps.yunohost.org/ci/badges/converse.status.svg) ![Statut de maintenance](https://ci-apps.yunohost.org/ci/badges/converse.maintain.svg)

[![Installer Converse avec YunoHost](https://install-app.yunohost.org/install-with-yunohost.svg)](https://install-app.yunohost.org/?app=converse)

*[Lire le README dans d'autres langues.](./ALL_README.md)*

> *Ce package vous permet d’installer Converse rapidement et simplement sur un serveur YunoHost.*  
> *Si vous n’avez pas YunoHost, consultez [ce guide](https://yunohost.org/install) pour savoir comment l’installer et en profiter.*

## Vue d’ensemble

Converse is a free and open-source XMPP chat client written in JavaScript which can be tightly integrated into any website.
The benefit of using converse.js as opposed to relying on a SaaS (software-as-a-service) solution, is that your users can have a much more customized, streamlined and integrated webchat experience and that you have control over the data. The latter being a requirement for many sites dealing with sensitive information.

### Features

- File sharing (not working yet) 
- End to end message encryption (XEP-0384 OMEMO)
- Open chats via URL
- Notifications
- Multilingual Support
- Moderating chatrooms
- Passwordless login with client certificates


**Version incluse :** 10.1.7~ynh2

**Démo :** <https://inverse.chat/>
## Documentations et ressources

- Site officiel de l’app : <http://conversejs.org>
- Documentation officielle de l’admin : <https://conversejs.org/docs/html/index.html>
- Dépôt de code officiel de l’app : <https://github.com/conversejs/converse.js>
- YunoHost Store : <https://apps.yunohost.org/app/converse>
- Signaler un bug : <https://github.com/YunoHost-Apps/converse_ynh/issues>

## Informations pour les développeurs

Merci de faire vos pull request sur la [branche `testing`](https://github.com/YunoHost-Apps/converse_ynh/tree/testing).

Pour essayer la branche `testing`, procédez comme suit :

```bash
sudo yunohost app install https://github.com/YunoHost-Apps/converse_ynh/tree/testing --debug
ou
sudo yunohost app upgrade converse -u https://github.com/YunoHost-Apps/converse_ynh/tree/testing --debug
```

**Plus d’infos sur le packaging d’applications :** <https://yunohost.org/packaging_apps>
