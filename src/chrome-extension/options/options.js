$(function() {
  // document.ready

  var storage = {
    settings: {},
    dictionary: {},
    disabledPages: {}
  };

  // from: https://developer.mozilla.org/en-US/docs/Web/API/window.btoa
  function utf8_to_b64(str) {
    return window.btoa(unescape(encodeURIComponent(str)));
  }

  function b64_to_utf8(str) {
    return decodeURIComponent(escape(window.atob(str)));
  }

  function customCount() {
    var count = Object.getOwnPropertyNames(storage.dictionary).length;
    $("#custom-count").text("(" + count + ")");
    return count;
  }

  function addDisabledPage(domain) {
    var table = $("#disabled-pages-list");

    var html =
      '<tr data-domain="' +
      domain +
      '"><span class="ascii fl">' +
      domain +
      "</span>" +
      '<button type="button" class="pure-button pure-button-error pure-button-xsmall fr disabled-page-delete" title="delete">✖</button>' +
      "</td></tr>";

    console.log(html);

    table.find("tbody").append(html);
  }

  function addRow(settings, table, hash, words, ascii, deleteButton) {
    var wordsHTML = [],
      deleteButton = deleteButton || false,
      deleteButtonHTML = "",
      interactive =
        typeof ascii == "function"
          ? '<sup><a href="#interactive">★</a></sup>'
          : "";
    asciiStr = typeof ascii == "function" ? ascii() : ascii;

    words.forEach(function(w) {
      if (deleteButton === true) {
        deleteButtonHTML =
          '<button type="button" class="pure-button pure-button-error pure-button-xsmall fr delete-button" title="delete">✖</button>';
      }
      wordsHTML.push(
        '<span class="prefix">' +
          settings.prefix +
          "</span>" +
          w +
          '<span class="suffix">' +
          settings.suffix +
          "</span>"
      );
    });

    table
      .find("tbody")
      .append(
        '<tr data-hash="' +
          hash +
          '"><td>' +
          wordsHTML.join("<br>") +
          interactive +
          '</td><td><span class="ascii fl">' +
          asciiStr +
          "</span>" +
          deleteButtonHTML +
          "</td></tr>"
      );

    customCount();
  }

  // load storage
  function loadStorage(result) {
    storage.settings = result.settings || {
      prefix: "(",
      suffix: ")"
    };

    storage.dictionary = result.dictionary || {};
    storage.disabledPages = result.disabledPages || {};

    $("#prefix").val(storage.settings.prefix);
    $("#suffix").val(storage.settings.suffix);

    if (customCount() > 0) {
      $("#no-custom-emoticons").remove();
      displayEmoticons($("#user-list"), storage.dictionary, true);
    }

    var builtinDict = asciimoji();

    displayEmoticons($("#default-list"), builtinDict);

    var builtinCount = Object.getOwnPropertyNames(builtinDict).length;

    $("#builtin-count").text("(" + builtinCount + ")");
  }

  chrome.storage.sync.get(loadStorage);

  function displayEmoticons(table, dictionary, allowDelete) {
    for (var hash in dictionary) {
      var item = dictionary[hash];
      addRow(
        storage.settings,
        table,
        hash,
        item.words,
        item.ascii,
        allowDelete
      );
    }
  }

  // instantly update emoticon lists when prefix/suffix changes
  $("#prefix").on("input paste", function() {
    $(".prefix").html($(this).val());
    saveDelimiters();
  });

  $("#suffix").on("input paste", function() {
    $(".suffix").html($(this).val());
    saveDelimiters();
  });

  function saveDelimiters() {
    storage.settings.prefix = $("#prefix").val();
    storage.settings.suffix = $("#suffix").val();
    chrome.storage.sync.set(storage, function() {
      $("#message").html('<span id="message_content">Settings saved.</span>');
      $("#message_content").fadeIn("slow");
      setTimeout(function() {
        $("#message_content").fadeOut("slow");
      }, 5000);
    });
  }

  // make add disabled page button work
  $("#disabled-pages-add").click(function() {
    var domain = $("#disabled-pages-input").val();

    storage.disabledPages[domain] = true;

    chrome.storage.sync.set(storage, function() {
      $("#disabled-pages-input").val("");
      $("#no-disabled-pages").remove();
      addDisabledPage(domain);
    });
  });

  // make add emoticon button work
  $("#add-emoticon").click(function() {
    var words = $("#add-text")
        .val()
        .split(","),
      ascii = $("#add-ascii").val();

    if (words.length > 0 && ascii.length > 0) {
      words.map(function(word) {
        word = word.trim();
      });

      var hash = utf8_to_b64(words[0]);
      storage.dictionary[hash] = {
        words: words,
        ascii: ascii
      };

      chrome.storage.sync.set(storage, function() {
        $("#add-text").val("");
        $("#add-ascii").val("");
        $("#no-custom-emoticons").remove();

        addRow(storage.settings, $("#user-list"), hash, words, ascii, true);
      });
    }
  });

  // make delete emoticon buttons work
  $(document).on("click", ".delete-button", function() {
    var row = $(this).parents("tr"),
      hash = row.data("hash");
    if (confirm("Do you really want to delete this emoticon?")) {
      row.remove();
      delete storage.dictionary[hash];
      chrome.storage.sync.set(storage);
      customCount();
    }
  });

  // write the current year to the footer copyright message
  $("#current-year").text(new Date().getFullYear());
});
