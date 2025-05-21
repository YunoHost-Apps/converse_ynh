<!--
Este archivo README esta generado automaticamente<https://github.com/YunoHost/apps/tree/master/tools/readme_generator>
No se debe editar a mano.
-->

# Converse para Yunohost

[![Nivel de integración](https://apps.yunohost.org/badge/integration/converse)](https://ci-apps.yunohost.org/ci/apps/converse/)
![Estado funcional](https://apps.yunohost.org/badge/state/converse)
![Estado En Mantención](https://apps.yunohost.org/badge/maintained/converse)

[![Instalar Converse con Yunhost](https://install-app.yunohost.org/install-with-yunohost.svg)](https://install-app.yunohost.org/?app=converse)

*[Leer este README en otros idiomas.](./ALL_README.md)*

> *Este paquete le permite instalarConverse rapidamente y simplement en un servidor YunoHost.*  
> *Si no tiene YunoHost, visita [the guide](https://yunohost.org/install) para aprender como instalarla.*

## Descripción general

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


**Versión actual:** 10.1.8~ynh1

**Demo:** <https://inverse.chat/>
## Documentaciones y recursos

- Sitio web oficial: <http://conversejs.org>
- Documentación administrador oficial: <https://conversejs.org/docs/html/index.html>
- Repositorio del código fuente oficial de la aplicación : <https://github.com/conversejs/converse.js>
- Catálogo YunoHost: <https://apps.yunohost.org/app/converse>
- Reportar un error: <https://github.com/YunoHost-Apps/converse_ynh/issues>

## Información para desarrolladores

Por favor enviar sus correcciones a la [rama `testing`](https://github.com/YunoHost-Apps/converse_ynh/tree/testing).

Para probar la rama `testing`, sigue asÍ:

```bash
sudo yunohost app install https://github.com/YunoHost-Apps/converse_ynh/tree/testing --debug
o
sudo yunohost app upgrade converse -u https://github.com/YunoHost-Apps/converse_ynh/tree/testing --debug
```

**Mas informaciones sobre el empaquetado de aplicaciones:** <https://yunohost.org/packaging_apps>
