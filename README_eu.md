<!--
Ohart ongi: README hau automatikoki sortu da <https://github.com/YunoHost/apps/tree/master/tools/readme_generator>ri esker
EZ editatu eskuz.
-->

# Converse YunoHost-erako

[![Integrazio maila](https://dash.yunohost.org/integration/converse.svg)](https://dash.yunohost.org/appci/app/converse) ![Funtzionamendu egoera](https://ci-apps.yunohost.org/ci/badges/converse.status.svg) ![Mantentze egoera](https://ci-apps.yunohost.org/ci/badges/converse.maintain.svg)

[![Instalatu Converse YunoHost-ekin](https://install-app.yunohost.org/install-with-yunohost.svg)](https://install-app.yunohost.org/?app=converse)

*[Irakurri README hau beste hizkuntzatan.](./ALL_README.md)*

> *Pakete honek Converse YunoHost zerbitzari batean azkar eta zailtasunik gabe instalatzea ahalbidetzen dizu.*  
> *YunoHost ez baduzu, kontsultatu [gida](https://yunohost.org/install) nola instalatu ikasteko.*

## Aurreikuspena

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


**Paketatutako bertsioa:** 10.1.6~ynh1

**Demoa:** <https://inverse.chat/>
## Dokumentazioa eta baliabideak

- Aplikazioaren webgune ofiziala: <http://conversejs.org>
- Administratzaileen dokumentazio ofiziala: <https://conversejs.org/docs/html/index.html>
- Jatorrizko aplikazioaren kode-gordailua: <https://github.com/conversejs/converse.js>
- YunoHost Denda: <https://apps.yunohost.org/app/converse>
- Eman errore baten berri: <https://github.com/YunoHost-Apps/converse_ynh/issues>

## Garatzaileentzako informazioa

Bidali `pull request`a [`testing` abarrera](https://github.com/YunoHost-Apps/converse_ynh/tree/testing).

`testing` abarra probatzeko, ondorengoa egin:

```bash
sudo yunohost app install https://github.com/YunoHost-Apps/converse_ynh/tree/testing --debug
edo
sudo yunohost app upgrade converse -u https://github.com/YunoHost-Apps/converse_ynh/tree/testing --debug
```

**Informazio gehiago aplikazioaren paketatzeari buruz:** <https://yunohost.org/packaging_apps>
