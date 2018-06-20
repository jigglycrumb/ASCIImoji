var elems = ["input[type!=password]", "textarea", "[contenteditable]"];

var storage = {
  settings: {},
  dictionary: {}
};

function init(result) {
  storage.settings = result.settings || { prefix: "(", suffix: ")" };
  storage.dictionary = result.dictionary || {};

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

    sField.value =
      sField.value.substring(0, nStart) +
      sValue +
      sField.value.substring(nEnd, sField.value.length);
    sField.selectionStart = nStart + sValue.length;
    sField.selectionEnd = nStart + sValue.length;
  } else {
    sField.value += sValue;
  }
}

// load storage and initialize
chrome.storage.sync.get(init);
