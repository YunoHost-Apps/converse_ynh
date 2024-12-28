<!--
Важно: этот README был автоматически сгенерирован <https://github.com/YunoHost/apps/tree/master/tools/readme_generator>
Он НЕ ДОЛЖЕН редактироваться вручную.
-->

# Converse для YunoHost

[![Уровень интеграции](https://apps.yunohost.org/badge/integration/converse)](https://ci-apps.yunohost.org/ci/apps/converse/)
![Состояние работы](https://apps.yunohost.org/badge/state/converse)
![Состояние сопровождения](https://apps.yunohost.org/badge/maintained/converse)

[![Установите Converse с YunoHost](https://install-app.yunohost.org/install-with-yunohost.svg)](https://install-app.yunohost.org/?app=converse)

*[Прочтите этот README на других языках.](./ALL_README.md)*

> *Этот пакет позволяет Вам установить Converse быстро и просто на YunoHost-сервер.*  
> *Если у Вас нет YunoHost, пожалуйста, посмотрите [инструкцию](https://yunohost.org/install), чтобы узнать, как установить его.*

## Обзор

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


**Поставляемая версия:** 10.1.8~ynh1

**Демо-версия:** <https://inverse.chat/>
## Документация и ресурсы

- Официальный веб-сайт приложения: <http://conversejs.org>
- Официальная документация администратора: <https://conversejs.org/docs/html/index.html>
- Репозиторий кода главной ветки приложения: <https://github.com/conversejs/converse.js>
- Магазин YunoHost: <https://apps.yunohost.org/app/converse>
- Сообщите об ошибке: <https://github.com/YunoHost-Apps/converse_ynh/issues>

## Информация для разработчиков

Пришлите Ваш запрос на слияние в [ветку `testing`](https://github.com/YunoHost-Apps/converse_ynh/tree/testing).

Чтобы попробовать ветку `testing`, пожалуйста, сделайте что-то вроде этого:

```bash
sudo yunohost app install https://github.com/YunoHost-Apps/converse_ynh/tree/testing --debug
или
sudo yunohost app upgrade converse -u https://github.com/YunoHost-Apps/converse_ynh/tree/testing --debug
```

**Больше информации о пакетировании приложений:** <https://yunohost.org/packaging_apps>
