# ASCIImoji

ASCIImoji is a small library which replaces certain keywords in texts with ASCII emoticons.

**Features**

- currently **296** different built-in emoticons/symbols
- interactive emoticons / generators
- configurable keyword prefix and suffix (_defaults to parentheses ( )_)
- support for custom emoticons

Current version: **1.6.0**

**Release types**

- [vanilla JS function](https://github.com/hpcodecraft/ASCIImoji/releases/download/1.6.0/asciimoji.js) | [minified](https://github.com/hpcodecraft/ASCIImoji/releases/download/1.6.0/asciimoji.min.js)
- [jQuery plugin](https://github.com/hpcodecraft/ASCIImoji/releases/download/1.6.0/asciimoji.jquery.js) | [minified](https://github.com/hpcodecraft/ASCIImoji/releases/download/1.6.0/asciimoji.jquery.min.js) - for text fields in your projects
- [Chrome Extension](https://chrome.google.com/webstore/detail/asciimoji/pglkjdoamcojlfjbdeenodmpkjkgplik) - asciify your browsing experience
- [Mac OS text shortcut dictionary](https://github.com/hpcodecraft/ASCIImoji/releases/download/1.6.0/asciimoji.plist) - system-wide support on Macs and iOS

  (generators are not supported though)

## Using the JS function

Just feed it some text and the processed string gets returned:

    var asciifiedText = asciimoji('Hello, this is (bear)');
    // Hello, this is ʕ·͡ᴥ·ʔ

If you want to change the delimiters of the emoticon keywords, add an options object with your values to the call.

    var customAsciifiedText = asciimoji('Adventure time with [finn] and [jake]', {
      prefix: '[',
      suffix: ']'
    });
    // Adventure time with | (• ◡•)| and (❍ᴥ❍ʋ)

## Using the jQuery plugin

Call the plugin on your selector:

    $('input,textarea').asciimoji();

If you want custom delimiters, pass in the options object:

    $('input,textarea').asciimoji({
      prefix: '[',
      suffix: ']'
    });

You can also do live binding so that elements added to the DOM later will have ASCIImoji enabled:

    $(document).on('focus', 'textarea', function() {
      $(this).asciimoji();
    });

## Adding custom emoticons to the dictionary

Define your dictionary like this:

    var myEmoticons = {
      emoticon1: {
        words: ['word1', 'word2'],
        ascii: '<insert ASCII emoticon here>'
      },
      ...
    };

Add your dictionary as additional parameter to the call:

    var textWihCustomEmoticons = asciimoji('Look ma, more emoticons! (word1)', options, myEmoticons);

or with the jQuery plugin:

    $(document).on('focus', 'textarea', function() {
      $(this).asciimoji(options, myEmoticons);
    });

## Development

Packages are managed with NPM.

Build is done using Grunt.  
To build, run: `./scripts/build.sh`
