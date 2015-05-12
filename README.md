AngularUITranslation
====================

Provides Symfony 2 translations into your AngularJS application.

Installation
------------

```
$ composer require "innova/angular-ui-translation-bundle" "~5.0"
```

Requirements
------------

* [Symfony 2](https://github.com/symfony/symfony)
* [Angular JS](https://github.com/angular/angular)
* [BazingaJsTranslationBundle](https://github.com/willdurand/BazingaJsTranslationBundle)

How To Use ?
------------

As BazingaExposeTranslation, the `filter` implements the Symfony2
[`TranslatorInterface`](https://github.com/symfony/symfony/blob/master/src/Symfony/Component/Translation/TranslatorInterface.php)
and provides the same `trans()` and `transChoice()` methods:

```
{{ 'translation_id' | trans:{}:'DOMAIN_NAME' }}
// the translated message or the translation id

{{ 'translation_id' | transChoice:1:{}:'DOMAIN_NAME' }}
// the translated message or the translation id
```

If you want to access translations for a specific domain, don't forget to include translation JS file.

Example using `assetic` :

```
{% javascripts 'js/translations/DOMAIN_NAME/*.js' %}
    <script src="{{ asset_url }}"></script>
{% endjavascripts %}
