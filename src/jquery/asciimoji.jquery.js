// asciimoji jQuery plugin
;(function ($, window, document, asciimoji, undefined) {

  var pluginName = "asciimoji",
      defaults = {
        prefix: '(',
        suffix: ')'
      },

      HELPER_STYLE = {
        'background': 'white',
        'border': '1px solid lightgray',
        'box-shadow': '0 1px 2px 0px rgba(0,0,0,.25)',
        'box-sizing': 'border-box',
        'font': '1em "Helvetica Neue", Arial',
        'max-height': '200px',
        'overflow-y': 'auto',
        'padding': '5px',
        'position': 'absolute',
        'text-align': 'left',
        'z-index': '100000',
      },

      ACTIVE_CLASS = 'active',
      ACTIVE_STYLE = {
        "background": "#eeeeee"
      },
      INACTIVE_STYLE = {
        "background": "transparent"
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

      console.log('createHelper');

      this.destroyHelper();

      var plugin = this;
      var dictionary = asciimoji();
      var symmetricalDictionary = {};

      for(var term in dictionary) {
        var words = dictionary[term].words,
            ascii = dictionary[term].ascii;
        for(var i = 0; i < words.length; ++i) symmetricalDictionary[words[i]] = ascii;
      }

      var table = '<table>';

      for(term in symmetricalDictionary) {
        var value = symmetricalDictionary[term];
        if(typeof symmetricalDictionary[term] == 'function') {
          value = symmetricalDictionary[term]();
        }
        table+= '<tr data-word="'+term+'" style="height:40px"><td style="padding:5px 10px;border-radius:5px 0 0 5px">'+term+'</td><td style="padding:5px 10px;border-radius:0 5px 5px 0">'+value+'</td></tr>';
      }

      table += '</table>';

      table = $(table).css({
        'border': 'none',
        'padding': 0,
        'border-collapse': 'collapse',
        'width': '100%',
      });

      this.helper = $('<div id="asciimoji-helper"></div>');
      this.helper.css(HELPER_STYLE);
      this.helper.html(table);

      $('body').append(this.helper);

      this.helper.on('click', 'tr', function(e) {
        var tr = e.target;
        console.log(tr);

        var word = $(tr).data('word');
        console.log(word);
      });

      $(this.element).on('keydown', function(e) {

        var tag = this.tagName.toLowerCase();
        if(tag == 'textarea') {
          var caret = Measurement.caretPos(this);
          plugin.helper.css({
            "top": caret.top + 50 + 'px',
          });
        }

        switch(e.keyCode) {
          case 40:  // Arrow down
                    e.preventDefault();
                    plugin.helperArrowDown();
                    break;

          case 38:  // Arrow up
                    e.preventDefault();
                    plugin.helperArrowUp();
                    break;

          case 27:  // Escape
                    plugin.hideHelper();
                    break;

          case  9:  // Tab
          case 13:  // Return
                    if($('#asciimoji-helper').is(':visible')) {
                      e.preventDefault();
                      plugin.insertWord();
                    }
                    break;
        }
      });
    },
    showHelper: function(str) {

      console.log('showHelper, '+str);

      if(this.helper === null) {
        this.createHelper();
      }

      if(str.length < 1) {
        this.hideHelper();
        return;
      }

      var tag = this.element.tagName.toLowerCase(),
          rect = this.element.getBoundingClientRect();

      if(tag == 'input') {
        this.helper.css({
          "top": rect.bottom + 'px',
          "left": rect.left + 'px',
          "min-width": rect.width + 'px',
        });
      }
      else if(tag == 'textarea') {
        var caret = Measurement.caretPos(this.element);
        this.helper.css({
          "top": caret.top + 50 + 'px',
          "left": rect.left + 'px',
          "min-width": rect.width + 'px',
        });
      }

      // reset filtering, hide all rows
      this.helper
        .find('tr')
        .removeClass('visible')
        .removeClass(ACTIVE_CLASS)
        .css(INACTIVE_STYLE)
        .css('display', 'none');

      // get matching rows
      var visibleRows = this.helper.find('td:contains('+str.toLowerCase()+')').parents('tr');

      // no matches, hide helper
      if(visibleRows.length === 0) {
        this.hideHelper();
      }
      // show matching rows
      else {
        visibleRows.addClass('visible').css('display', 'table-row');
        visibleRows.last().addClass(ACTIVE_CLASS).css(ACTIVE_STYLE);
        this.helper.show();
      }
    },
    hideHelper: function() {

      console.log('hideHelper');

      $('#asciimoji-helper').hide();
    },
    destroyHelper: function() {

      console.log('destroyHelper');

      $('#asciimoji-helper').remove();
      this.helper = null;

      $('#_dummy').remove();
    },
    toggleHelper: function(text) {

      console.log('toggleHelper, '+text);

      var lastPrefix = text.lastIndexOf(this.options.prefix),
          lastSuffix = text.lastIndexOf(this.options.suffix);

      if(lastPrefix > lastSuffix) {
        var len = text.length - lastPrefix,
            str = text.substr(lastPrefix + 1, len);
        this.showHelper(str);
      }
      else if(lastSuffix > lastPrefix) {
        this.hideHelper();
      }
    },
    helperArrowUp: function() {

      console.log('helperArrowUp');

      var visibleRows = this.helper.find('tr.visible');

      var previous = false;
      visibleRows.each(function(index, row) {
        if(previous === false) {
          if($(row).hasClass(ACTIVE_CLASS)) {
            $(row).removeClass(ACTIVE_CLASS).css(INACTIVE_STYLE);
            previous = index - 1;
            if(index > 0) {
              visibleRows.eq(previous).addClass(ACTIVE_CLASS).css(ACTIVE_STYLE);
            }
          }
        }
      });

      activeRows = this.helper.find('tr.' + ACTIVE_CLASS);
      if(activeRows.length === 0) {
        visibleRows.last().addClass(ACTIVE_CLASS).css(ACTIVE_STYLE);
      }

      this.helperShowActiveTerm();
    },
    helperArrowDown: function() {

      console.log('helperArrowDown');

      var visibleRows = this.helper.find('tr.visible');

      var next = false;
      visibleRows.each(function(index, row) {

        if(next === false) {
          if($(row).hasClass(ACTIVE_CLASS)) {
            $(row).removeClass(ACTIVE_CLASS).css(INACTIVE_STYLE);
            next = index + 1;
          }
        }
        else {
          if(index === next) {
            $(row).addClass(ACTIVE_CLASS).css(ACTIVE_STYLE);
          }
        }
      });

      activeRows = this.helper.find('tr.' + ACTIVE_CLASS);
      if(activeRows.length === 0) {
        visibleRows.first().addClass(ACTIVE_CLASS).css(ACTIVE_STYLE);
      }

      this.helperShowActiveTerm();
    },
    helperShowActiveTerm: function() {

      console.log('helperShowActiveTerm');

      $('tr.' + ACTIVE_CLASS)[0].scrollIntoView();
      var top = this.helper.scrollTop() - 7;
      this.helper.scrollTop(top);
    },
    insertWord: function() {

      console.log('insertWord');

      var word = this.helper.find('tr.' + ACTIVE_CLASS).first().attr('data-word'),
          el = $(this.element),
          oldValue = el.val(),
          lastPrefix = oldValue.lastIndexOf(this.options.prefix),
          newValue = oldValue.substr(0, lastPrefix+1) + word + this.options.suffix;

      el.val(newValue).trigger('input');
      this.hideHelper();
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
          destroyEvents = 'blur';

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

              plugin.setCaret(el,caret);
            }
          });

          el.off(destroyEvents).on(destroyEvents, function() {
            plugin.destroyHelper();
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
