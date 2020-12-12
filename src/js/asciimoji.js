
/*
  ASCIImoji JS
  Version: @@version

  By @@author
  http://asciimoji.com
*/

var asciimoji = function(text, options, userDictionary) {
  "use strict";

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  var o = options || {
    prefix: "(",
    suffix: ")"
  };

  function transpose(str, table, backwards) {
    var last,
      i,
      result = new Array(str.length);

    function getChar(i) {
      var o = str.charAt(i),
        n = table[o];
      return n !== undefined ? n : o;
    }

    if (backwards && backwards === true) {
      last = str.length - 1;
      for (i = last; i >= 0; --i) result[last - i] = getChar(i);
    } else {
      last = str.length;
      for (i = 0; i < last; i++) result[i] = getChar(i);
    }
    return result.join("");
  }

  // @@dictionary

  var symmetricalDictionary = {};

  for (var hash in userDictionary) dictionary[hash] = userDictionary[hash];

  for (var term in dictionary) {
    var words = dictionary[term].words,
      ascii = dictionary[term].ascii;
    for (var i = 0; i < words.length; ++i)
      symmetricalDictionary[words[i]] = ascii;
  }

  function replace(text) {
    text = text.replace(
      new RegExp(
        "[" + o.prefix + "]([^" + o.suffix + "]*)[" + o.suffix + "]",
        "gim"
      ),
      function(termWithDelimiters, term) {
        var params = null;

        if (term.indexOf(",") !== -1) {
          var temp = term.split(",");
          term = temp.shift();
          params = temp;
        }

        var dictItem = symmetricalDictionary[term.toLowerCase()];

        if (dictItem) {
          if (typeof dictItem == "function")
            return dictItem.apply(null, params);
          else return dictItem;
        } else return termWithDelimiters;
      }
    );
    return text;
  }

  if (text === undefined) return dictionary;
  else return replace(text);
};
