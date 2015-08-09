#ASCIImoji
ASCIImoji is a small JavaScript function enabling the easy usage of ASCII emoticons in text.
For example **(bear)** will be converted to **ʕ·͡ᴥ·ʔ﻿**.

The repository also contains a jQuery plugin for super easy usage.

**Features**

* support for currently 205 different built-in emoticons/symbols
* support for interactive emoticons with parameters
* support for additional self-defined emoticons
* delimiters of the emoticon keywords can be configured (*defaults to brackets ()*)
* jQuery plugin

Current version: 1.4.1

##Basic usage

Simple: Feed it some text and the processed string gets returned.

    var asciifiedText = asciimoji('Some plain text containing keywords, like (yay)!');

If you want to change the delimiters of the emoticon keywords, add an options object with your values to the call.

    var customAsciifiedText = asciimoji('Some text with custom delimiters. [dunno]', {
      prefix: '[',
      suffix: ']'
    });

##Using the jQuery plugin

Again, simple:

    $('input,textarea').asciimoji();

If you want custom delimiters, pass in the options object:

    $('input,textarea').asciimoji({
      prefix: '[',
      suffix: ']'
    });

You can also do live binding so that elements added to the DOM later will have ASCIImoji enabled:

    $(document).on('focus','textarea',function(){
      $(this).asciimoji();
    });

##Adding self-defined emoticons to the dictionary

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

    $(document).on('focus','textarea',function(){
      $(this).asciimoji(options, myEmoticons);
    });


To try it out yourself, download the repo and open index.html in your browser.

If you're using Google Chrome, you can also asciify your browsing experience by getting the extension from the [Chrome Web Store](https://chrome.google.com/webstore/detail/asciimoji/pglkjdoamcojlfjbdeenodmpkjkgplik)