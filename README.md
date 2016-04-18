# yii2-page-visibility

JS plugin that enables reacting to changes in the visibility state of a webpage.

This simple plugin wraps the [Page Visibility functionality](https://www.w3.org/TR/page-visibility/) for a Yii2 application.

## Installation

The preferred way to install this extension is through [composer](http://getcomposer.org/download/).

Either run

```
$ php composer.phar require peterfriz/yii2-page-visibility "dev-master"
```

or add

```
"peterfriz/yii2-page-visibility": "dev-master"
```

to the ```require``` section of your `composer.json` file.

## Usage

Enable the plugin in a view file:
```
use peterfriz\pagevisibility\PageVisibilityAsset;
PageVisibilityAsset::register($this);
```

React on visibilty changes in js:
```
pageVisibility.init(
    function() {
        console.log('visible');
    },
    function() {
        console.log('hidden');
    }
);
```

## License

**yii2-page-visibility** is released under the BSD 3-Clause License. See the bundled `LICENSE.md` for details.