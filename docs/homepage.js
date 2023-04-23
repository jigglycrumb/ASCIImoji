$(function () {
  // display emoticon list
  var dictionary = asciimoji(),
    totalCount = 0;

  function addWord(word) {
    words.push("(" + word + ")");
  }

  for (var keyword in dictionary) {
    totalCount++;

    var tr = $("<tr>"),
      td_dictionary = $("<td>"),
      td_ascii = $("<td>"),
      words = [];

    dictionary[keyword].words.forEach(addWord);

    td_dictionary.html(words.join("<br>"));
    td_ascii.html(dictionary[keyword].ascii);
    tr.append(td_dictionary);
    tr.append(td_ascii);
    $("#emoticon-list").append(tr);
  }

  $("#total-count").html(totalCount);

  // setup demo section
  $("#demo-input").on("input paste", function () {
    var text = $(this).val().split("\n").join("<br>");
    $("#demo-output").html(asciimoji(text));
  });
});
