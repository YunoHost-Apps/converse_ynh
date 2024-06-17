<!--
NOTA: Este README foi creado automáticamente por <https://github.com/YunoHost/apps/tree/master/tools/readme_generator>
NON debe editarse manualmente.
-->

# Converse para YunoHost

[![Nivel de integración](https://dash.yunohost.org/integration/converse.svg)](https://dash.yunohost.org/appci/app/converse) ![Estado de funcionamento](https://ci-apps.yunohost.org/ci/badges/converse.status.svg) ![Estado de mantemento](https://ci-apps.yunohost.org/ci/badges/converse.maintain.svg)

[![Instalar Converse con YunoHost](https://install-app.yunohost.org/install-with-yunohost.svg)](https://install-app.yunohost.org/?app=converse)

*[Le este README en outros idiomas.](./ALL_README.md)*

> *Este paquete permíteche instalar Converse de xeito rápido e doado nun servidor YunoHost.*  
> *Se non usas YunoHost, le a [documentación](https://yunohost.org/install) para saber como instalalo.*

## Vista xeral

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


**Versión proporcionada:** 10.1.7~ynh2

**Demo:** <https://inverse.chat/>
## Documentación e recursos

- Web oficial da app: <http://conversejs.org>
- Documentación oficial para admin: <https://conversejs.org/docs/html/index.html>
- Repositorio de orixe do código: <https://github.com/conversejs/converse.js>
- Tenda YunoHost: <https://apps.yunohost.org/app/converse>
- Informar dun problema: <https://github.com/YunoHost-Apps/converse_ynh/issues>

## Info de desenvolvemento

Envía a túa colaboración á [rama `testing`](https://github.com/YunoHost-Apps/converse_ynh/tree/testing).

Para probar a rama `testing`, procede deste xeito:

```bash
sudo yunohost app install https://github.com/YunoHost-Apps/converse_ynh/tree/testing --debug
ou
sudo yunohost app upgrade converse -u https://github.com/YunoHost-Apps/converse_ynh/tree/testing --debug
```

**Máis info sobre o empaquetado da app:** <https://yunohost.org/packaging_apps>
