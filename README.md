<!--
N.B.: This README was automatically generated by https://github.com/YunoHost/apps/tree/master/tools/README-generator
It shall NOT be edited by hand.
-->

# Converse for YunoHost

[![Integration level](https://dash.yunohost.org/integration/converse.svg)](https://dash.yunohost.org/appci/app/converse) ![Working status](https://ci-apps.yunohost.org/ci/badges/converse.status.svg) ![Maintenance status](https://ci-apps.yunohost.org/ci/badges/converse.maintain.svg)

[![Install Converse with YunoHost](https://install-app.yunohost.org/install-with-yunohost.svg)](https://install-app.yunohost.org/?app=converse)

*[Lire ce readme en français.](./README_fr.md)*

> *This package allows you to install Converse quickly and simply on a YunoHost server.
If you don't have YunoHost, please consult [the guide](https://yunohost.org/#/install) to learn how to install it.*

## Overview

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



**Shipped version:** 10.1.2~ynh2

**Demo:** https://inverse.chat/
## Documentation and resources

* Official app website: <http://conversejs.org>
* Official admin documentation: <https://conversejs.org/docs/html/index.html>
* Upstream app code repository: <https://github.com/conversejs/converse.js>
* YunoHost documentation for this app: <https://yunohost.org/app_converse>
* Report a bug: <https://github.com/YunoHost-Apps/converse_ynh/issues>

## Developer info

Please send your pull request to the [testing branch](https://github.com/YunoHost-Apps/converse_ynh/tree/testing).

To try the testing branch, please proceed like that.

``` bash
sudo yunohost app install https://github.com/YunoHost-Apps/converse_ynh/tree/testing --debug
or
sudo yunohost app upgrade converse -u https://github.com/YunoHost-Apps/converse_ynh/tree/testing --debug
```

**More info regarding app packaging:** <https://yunohost.org/packaging_apps>
