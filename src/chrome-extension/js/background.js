var contexts = ["editable"];
var dict = {};
var settings = {};
var letters = "#abcdefghijklmnopqrstuvwxyz".split("");
var dictByLetter = {};
var longestLength = 0;

function createWordMenuTitle(word, ascii) {
  var space = "\u00A0";
  var fillers = longestLength - word.length + 20;
  return word.padEnd(fillers, space) + ascii;
}

function setupContextMenus() {
  // chrome.runtime.onInstalled.addListener(function() {
  Object.values(dict).map(function(entry) {
    var word = entry.words[0];
    var startingLetter = word[0];

    if (!dictByLetter[startingLetter]) dictByLetter[startingLetter] = [];
    if (typeof entry.ascii !== "function") {
      dictByLetter[startingLetter].push([entry.words[0], entry.ascii]);
      var l = entry.words[0].length;
      if (l > longestLength) longestLength = l;
    }
  });

  // create the top parent context menu
  chrome.contextMenus.create({
    title: "ASCIImoji",
    contexts: contexts,
    id: "parent"
  });

  letters.map(function(letter) {
    var letterDict = dictByLetter[letter];
    if (letterDict) {
      chrome.contextMenus.create(
        {
          title: letter.toUpperCase(),
          contexts: contexts,
          parentId: "parent",
          id: "letter_" + letter
        },
        function() {
          letterDict.map(function(entry) {
            chrome.contextMenus.create({
              title: createWordMenuTitle(entry[0], entry[1]),
              contexts: contexts,
              onclick: function(info, tab) {
                chrome.tabs.sendMessage(tab.id, entry[1]);
              },
              parentId: "letter_" + letter,
              id: "word_" + entry[0]
            });
          });
        }
      );
    }
  });
  // });
}

function init(result) {
  var defaultSettings = { prefix: "(", suffix: ")", contextMenu: true };
  settings = Object.assign({}, defaultSettings, result.settings);

  if (settings.contextMenu) {
    dict = Object.assign({}, result.dictionary, asciimoji());
    setupContextMenus();
  }
}

// load storage and initialize
chrome.storage.sync.get(init);
