<!--
NB: Deze README is automatisch gegenereerd door <https://github.com/YunoHost/apps/tree/master/tools/readme_generator>
Hij mag NIET handmatig aangepast worden.
-->

# Converse voor Yunohost

[![Integratieniveau](https://apps.yunohost.org/badge/integration/converse)](https://ci-apps.yunohost.org/ci/apps/converse/)
![Mate van functioneren](https://apps.yunohost.org/badge/state/converse)
![Onderhoudsstatus](https://apps.yunohost.org/badge/maintained/converse)

[![Converse met Yunohost installeren](https://install-app.yunohost.org/install-with-yunohost.svg)](https://install-app.yunohost.org/?app=converse)

*[Deze README in een andere taal lezen.](./ALL_README.md)*

> *Met dit pakket kun je Converse snel en eenvoudig op een YunoHost-server installeren.*  
> *Als je nog geen YunoHost hebt, lees dan [de installatiehandleiding](https://yunohost.org/install), om te zien hoe je 'm installeert.*

## Overzicht

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


**Geleverde versie:** 10.1.8~ynh1

**Demo:** <https://inverse.chat/>
## Documentatie en bronnen

- Officiele website van de app: <http://conversejs.org>
- Officiele beheerdersdocumentatie: <https://conversejs.org/docs/html/index.html>
- Upstream app codedepot: <https://github.com/conversejs/converse.js>
- YunoHost-store: <https://apps.yunohost.org/app/converse>
- Meld een bug: <https://github.com/YunoHost-Apps/converse_ynh/issues>

## Ontwikkelaarsinformatie

Stuur je pull request alsjeblieft naar de [`testing`-branch](https://github.com/YunoHost-Apps/converse_ynh/tree/testing).

Om de `testing`-branch uit te proberen, ga als volgt te werk:

```bash
sudo yunohost app install https://github.com/YunoHost-Apps/converse_ynh/tree/testing --debug
of
sudo yunohost app upgrade converse -u https://github.com/YunoHost-Apps/converse_ynh/tree/testing --debug
```

**Verdere informatie over app-packaging:** <https://yunohost.org/packaging_apps>
