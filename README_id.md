<!--
N.B.: README ini dibuat secara otomatis oleh <https://github.com/YunoHost/apps/tree/master/tools/readme_generator>
Ini TIDAK boleh diedit dengan tangan.
-->

# Converse untuk YunoHost

[![Tingkat integrasi](https://apps.yunohost.org/badge/integration/converse)](https://ci-apps.yunohost.org/ci/apps/converse/)
![Status kerja](https://apps.yunohost.org/badge/state/converse)
![Status pemeliharaan](https://apps.yunohost.org/badge/maintained/converse)

[![Pasang Converse dengan YunoHost](https://install-app.yunohost.org/install-with-yunohost.svg)](https://install-app.yunohost.org/?app=converse)

*[Baca README ini dengan bahasa yang lain.](./ALL_README.md)*

> *Paket ini memperbolehkan Anda untuk memasang Converse secara cepat dan mudah pada server YunoHost.*  
> *Bila Anda tidak mempunyai YunoHost, silakan berkonsultasi dengan [panduan](https://yunohost.org/install) untuk mempelajari bagaimana untuk memasangnya.*

## Ringkasan

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


**Versi terkirim:** 10.1.8~ynh1

**Demo:** <https://inverse.chat/>
## Dokumentasi dan sumber daya

- Website aplikasi resmi: <http://conversejs.org>
- Dokumentasi admin resmi: <https://conversejs.org/docs/html/index.html>
- Depot kode aplikasi hulu: <https://github.com/conversejs/converse.js>
- Gudang YunoHost: <https://apps.yunohost.org/app/converse>
- Laporkan bug: <https://github.com/YunoHost-Apps/converse_ynh/issues>

## Info developer

Silakan kirim pull request ke [`testing` branch](https://github.com/YunoHost-Apps/converse_ynh/tree/testing).

Untuk mencoba branch `testing`, silakan dilanjutkan seperti:

```bash
sudo yunohost app install https://github.com/YunoHost-Apps/converse_ynh/tree/testing --debug
atau
sudo yunohost app upgrade converse -u https://github.com/YunoHost-Apps/converse_ynh/tree/testing --debug
```

**Info lebih lanjut mengenai pemaketan aplikasi:** <https://yunohost.org/packaging_apps>
