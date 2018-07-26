var elems = ["input[type!=password]", "textarea", "[contenteditable]"];

var storage = {
  settings: {},
  dictionary: {}
};

function init(result) {
  var defaultSettings = { prefix: "(", suffix: ")", contextMenu: true };

  storage.settings = Object.assign({}, defaultSettings, result.settings);
  storage.dictionary = Object.assign({}, result.dictionary);

  elems.forEach(function(elem) {
    $(document).on("input paste click", elem, function() {
      $(this).asciimoji(storage.settings, storage.dictionary);
    });
  });
}

var selectedElement = null;

document.addEventListener(
  "mousedown",
  function(event) {
    selectedElement = event.target;
  },
  true
);

chrome.extension.onMessage.addListener(function(ascii) {
  if (selectedElement) insertAtCursor(selectedElement, ascii);
});

function insertAtCursor(sField, sValue) {
  if (sField.selectionStart || sField.selectionStart > 0) {
    var nStart = sField.selectionStart;
    var nEnd = sField.selectionEnd;

    sField.value = replaceInString(sField.value, sValue, nStart, nEnd);
    sField.selectionStart = nStart + sValue.length;
    sField.selectionEnd = nStart + sValue.length;
  } else {
    switch (sField.tagName.toLowerCase()) {
      case "div":
        sField.innerHTML += sValue;
        break;

      default:
        sField.value += sValue;
        break;
    }
  }
}

function replaceInString(str, newStr, start, end) {
  return str.substring(0, start) + newStr + str.substring(end, str.length);
}

// load storage and initialize
chrome.storage.sync.get(init);
