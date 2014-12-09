$(function() {

  var storage = {
    settings: {},
    dictionary: {}
  };

  // from: https://developer.mozilla.org/en-US/docs/Web/API/window.btoa
  function utf8_to_b64( str ) {
      return window.btoa(unescape(encodeURIComponent( str )));
  }

  function b64_to_utf8( str ) {
      return decodeURIComponent(escape(window.atob( str )));
  }

  function addRow( settings, table, hash, words, ascii, deleteButton ) {
    var wordsHTML = [],
        deleteButtonHTML = '';

    deleteButton = typeof deleteButton !== 'undefined' ? deleteButton : false;

    words.forEach(function(w){
      if( deleteButton === true ) {
        deleteButtonHTML = '<button type="button" class="pure-button pure-button-error pure-button-xsmall fr delete-button" title="delete">✖</button>';
      }
      wordsHTML.push('<span class="prefix">'+settings.prefix+'</span>'+w+'<span class="suffix">'+settings.suffix+'</span>');
    });

    table.find('tbody').append('<tr data-hash="'+hash+'"><td>'+wordsHTML.join('<br>')+'</td><td><span class="ascii fl">'+ascii+'</span>'+deleteButtonHTML+'</td></tr>');
  }

  // load storage
  function loadStorage(result) {
    storage.settings = result.settings || {
      prefix: '(',
      suffix: ')',
      submission_enabled: false
    };

    storage.dictionary = result.dictionary || {};

    $('#prefix').val(storage.settings.prefix);
    $('#suffix').val(storage.settings.suffix);
    $('#enable-submission').prop('checked',storage.settings.submission_enabled);

    displayEmoticons( $('#user-list'), storage.dictionary, true );
    displayEmoticons( $('#default-list'), asciimoji() );
  }

  chrome.storage.sync.get(loadStorage);

  function displayEmoticons( table, dictionary, allowDelete ) {
    for( var hash in dictionary ) {
      var item = dictionary[hash];
      addRow(storage.settings, table, hash, item.words, item.ascii, allowDelete );
    }
  }


  // instantly update emoticon lists when prefix/suffix changes
  $('#prefix').on('input paste', function() {
    $('.prefix').html($(this).val());
    saveDelimiters();
  });

  $('#suffix').on('input paste', function() {
    $('.suffix').html($(this).val());
    saveDelimiters();
  });

  function saveDelimiters(){
    storage.settings.prefix = $('#prefix').val();
    storage.settings.suffix = $('#suffix').val();
    chrome.storage.sync.set(storage, function() {
      $('#message').append('<span id="message_content">Settings saved.</span>');
      $('#message_content').fadeIn('slow');
      setTimeout(function(){
        $('#message_content').fadeOut('slow');
      }, 5000);
    });
  }

  // make add emoticon button work
  $('#add-emoticon').click(function(){
    var words = $('#add-text').val().split(','),
        ascii = $('#add-ascii').val();

    if(words.length > 0 && ascii.length > 0) {
      words.forEach(function(word){
        word = word.trim();
      });

      var hash = utf8_to_b64(words[0]);
      storage.dictionary[hash] = {
        words: words,
        ascii: ascii
      };

      chrome.storage.sync.set(storage, function() {
        $('#add-text').val('');
        $('#add-ascii').val('');
        addRow(storage.settings, $('#user-list'), hash, words, ascii, true );

        // handle submission
        if(storage.settings.submission_enabled) {
          var url = 'http://asciimoji.com/submit.php',
              data = {
                words: words.join(', '),
                ascii: ascii
              };
          $.post(url, data);
        }
      });
    }
  });

  // make delete emoticon buttons work
  $(document).on('click', '.delete-button', function(){
    var row = $(this).parents('tr'),
        hash = row.data('hash');
    if( confirm('Do you really want to delete this emoticon?')) {
      row.remove();
      delete storage.dictionary[hash];
      chrome.storage.sync.set(storage);
    }
  });

  // make submission toggle auto-save its value
  $('#enable-submission').on('change', function() {
    storage.settings.submission_enabled = $(this).prop('checked');
    chrome.storage.sync.set(storage);
  });
});