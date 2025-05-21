<!--
To README zostało automatycznie wygenerowane przez <https://github.com/YunoHost/apps/tree/master/tools/readme_generator>
Nie powinno być ono edytowane ręcznie.
-->

# Converse dla YunoHost

[![Poziom integracji](https://apps.yunohost.org/badge/integration/converse)](https://ci-apps.yunohost.org/ci/apps/converse/)
![Status działania](https://apps.yunohost.org/badge/state/converse)
![Status utrzymania](https://apps.yunohost.org/badge/maintained/converse)

[![Zainstaluj Converse z YunoHost](https://install-app.yunohost.org/install-with-yunohost.svg)](https://install-app.yunohost.org/?app=converse)

*[Przeczytaj plik README w innym języku.](./ALL_README.md)*

> *Ta aplikacja pozwala na szybką i prostą instalację Converse na serwerze YunoHost.*  
> *Jeżeli nie masz YunoHost zapoznaj się z [poradnikiem](https://yunohost.org/install) instalacji.*

## Przegląd

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


**Dostarczona wersja:** 10.1.8~ynh1

**Demo:** <https://inverse.chat/>
## Dokumentacja i zasoby

- Oficjalna strona aplikacji: <http://conversejs.org>
- Oficjalna dokumentacja dla administratora: <https://conversejs.org/docs/html/index.html>
- Repozytorium z kodem źródłowym: <https://github.com/conversejs/converse.js>
- Sklep YunoHost: <https://apps.yunohost.org/app/converse>
- Zgłaszanie błędów: <https://github.com/YunoHost-Apps/converse_ynh/issues>

## Informacje od twórców

Wyślij swój pull request do [gałęzi `testing`](https://github.com/YunoHost-Apps/converse_ynh/tree/testing).

Aby wypróbować gałąź `testing` postępuj zgodnie z instrukcjami:

```bash
sudo yunohost app install https://github.com/YunoHost-Apps/converse_ynh/tree/testing --debug
lub
sudo yunohost app upgrade converse -u https://github.com/YunoHost-Apps/converse_ynh/tree/testing --debug
```

**Więcej informacji o tworzeniu paczek aplikacji:** <https://yunohost.org/packaging_apps>
