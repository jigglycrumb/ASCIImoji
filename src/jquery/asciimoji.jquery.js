// asciimoji jQuery plugin
;(function ($, window, document, asciimoji, undefined) {
  var pluginName = "asciimoji",
      defaults = {
        prefix: '(',
        suffix: ')'
      };

  function Plugin( element, options, dictionary ) {
    this.element = element;
    this.options = $.extend( {}, defaults, options );
    this.dictionary = $.extend( {}, {}, dictionary );
    this._defaults = defaults;
    this._name = pluginName;
    this.helper = null;
    this.init();
  }

  Plugin.prototype = {
    getCaret: function(el) {
      var input = el.get(0);
      if(!input) return;
      if('selectionStart' in input) {
        return input.selectionStart;
      }
      else if(document.selection) { // IE
        input.focus();
        var sel = document.selection.createRange();
        var selLen = document.selection.createRange().text.length;
        sel.moveStart('character', -input.value.length);
        return sel.text.length - selLen;
      }
    },
    setCaret: function(el, position) {
      var input = el.get(0);
      if(input !== null) {
        if(input.createTextRange) {
          var range = input.createTextRange();
          range.move('character', position);
          range.select();
        }
        else {
          if(input.selectionStart) {
            input.focus();
            window.setTimeout(function() {  // timeout needed because of Chrome bug, see
                                            // https://code.google.com/p/chromium/issues/detail?id=32865
              input.setSelectionRange(position, position);
            },0);
          }
          else input.focus();
        }
      }
    },
    lastDiff: function(string1, string2) {
      var len = Math.min(string1.length, string2.length),
          lastDiff = len,
          char1,
          char2;
      for( var i = 1; i <= len; i++ ) {
        char1 = string1.charAt(string1.length-i);
        char2 = string2.charAt(string2.length-i);
        if(char1 != char2) {
          lastDiff = string2.length-i+1;
          break;
        }
      }
      if(string2[lastDiff] === ')') lastDiff++;
      return lastDiff;
    },
    walkTheDom: function walk(node, func) {
      func(node);
      node = node.firstChild;
      while (node) {
        walk(node, func);
        node = node.nextSibling;
      }
    },
    createHelper: function() {
      var dictionary = asciimoji();
      var symmetricalDictionary = {};

      for(var term in dictionary) {
        var words = dictionary[term].words,
            ascii = dictionary[term].ascii;
        for(var i = 0; i < words.length; ++i) symmetricalDictionary[words[i]] = ascii;
      }

      var list = '<ul>';

      for(term in symmetricalDictionary) {
        list+= '<li><strong>'+term+'</strong><label>'+symmetricalDictionary[term]+'</label></li>';
      }

      list += '</ul>';

      this.helper = $('<div id="asciimoji-helper"></div>');
      this.helper.css({
        background: 'aliceblue',
        border: '1px solid lightblue',
        height: '90px',
        overflowY: 'auto',
        padding: '5px',
        position: 'absolute',
        textAlign: 'left',
      });
      this.helper.html(list);

      $('body').append(this.helper);
    },
    showHelper: function() {
      if(this.helper === null) {
        this.createHelper();
      }

      var rect = this.element.getBoundingClientRect();

      // console.log(rect);

      this.helper.css({
        top: rect.left + 'px',
        left: rect.bottom + 'px',
        width: rect.width + 'px',
      }).show();
    },
    hideHelper: function() {
      $('#asciimoji-helper').hide();
    },
    toggleHelper: function(text) {
      var lastPrefix = text.lastIndexOf(this.options.prefix);
      var lastSuffix = text.lastIndexOf(this.options.suffix);

      if(lastPrefix > lastSuffix) {
        this.showHelper();
      }
      else if(lastSuffix > lastPrefix) {
        this.hideHelper();
      }
    },
    init: function() {
      var plugin = this,
          el = $(this.element),
          options = this.options,
          dictionary = this.dictionary,
          tagName = el.prop('tagName').toLowerCase(),
          oldValue,
          newValue,
          lastChar,
          caret,
          triggerEvents = 'input paste',
          hideEvents = 'blur';

      switch(tagName) {
        case 'input':
        case 'textarea':
          el.off(triggerEvents).on(triggerEvents, function(e) {

            oldValue = el.val();
            newValue = asciimoji(oldValue,options,dictionary);
            plugin.toggleHelper(oldValue);

            if(oldValue != newValue) {
              el.empty().val(newValue);
              caret = plugin.lastDiff(oldValue,newValue);

              // el.change();

              plugin.setCaret(el,caret);
            }
          });

          el.off(hideEvents).on(hideEvents, function() {
            plugin.hideHelper();
          });
          break;
        default:
          el.data({
            'watch_timer': setInterval(function() {
              var elDOM = el.get(0);
              plugin.walkTheDom(elDOM, function(node) {
                if(node.nodeType == 3 ) {

                  oldValue = node.nodeValue;
                  newValue = asciimoji(oldValue,options,dictionary);
                  plugin.toggleHelper(oldValue);

                  if(oldValue != newValue) {
                    node.nodeValue = newValue;
                    caret = plugin.lastDiff(oldValue,newValue);

                    // el.change();
                    // console.log('contenteditable, change');

                    if(typeof window.getSelection != "undefined" && typeof document.createRange != "undefined") {
                      var range = document.createRange();
                      range.setStart(node,caret);
                      range.setEnd(node,caret);
                      var sel = window.getSelection();
                      sel.removeAllRanges();
                      sel.addRange(range);
                    }
                    else if(typeof document.body.createTextRange != "undefined") {
                      var textRange = document.body.createTextRange();
                      textRange.moveToElementText(node);
                      textRange.moveStart('character', caret);
                      textRange.moveEnd('character', caret);
                      textRange.select();
                    }
                  }
                }
              });
            },100)
          });
          break;
      }
    }
  };

  $.fn[pluginName] = function(options, dictionary) {
    return this.each(function() {
      if(!$.data(this, "plugin_" + pluginName)) {
        $.data(this, "plugin_" + pluginName, new Plugin(this, options, dictionary));
      }
    });
  };
})(jQuery, window, document, asciimoji);
