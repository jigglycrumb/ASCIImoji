# ASCIImoji

ASCIImoji is a small JavaScript function enabling ASCII emoticons in text inputs.

**Features**

* support for currently 280 different built-in emoticons/symbols
* support for interactive emoticons with arguments
* support for additional custom emoticons
* configurable keyword delimiters (*defaults to parentheses ( )*)
* jQuery plugin

Current version: 1.4.3

## Basic usage

Feed it some text and the processed string gets returned.

    var asciifiedText = asciimoji('Hello, this is (bear)');
    // Hello, this is ʕ·͡ᴥ·ʔ﻿

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

If you're using Google Chrome, you can also asciify your browsing experience by getting the extension from the [Chrome Web Store](https://chrome.google.com/webstore/detail/asciimoji/pglkjdoamcojlfjbdeenodmpkjkgplik)
