$(function(){

  // display emoticon list
  var dictionary = asciimoji(),
      totalCount = 0;

  function addWord(word){
    words.push('('+word+')');
  }

  for( var keyword in dictionary ) {

    totalCount++;

    var tr = $('<tr>'),
        td_dictionary = $('<td>'),
        td_ascii = $('<td>'),
        words = [];

    dictionary[keyword].words.forEach(addWord);

    td_dictionary.html(words.join('<br>'));
    td_ascii.html(dictionary[keyword].ascii);
    tr.append(td_dictionary);
    tr.append(td_ascii);
    $('#emoticon-list').append(tr);
  }

  $('#total-count').html(totalCount);

  // setup demo section
  $('#demo-input').on('input paste', function(){
    var text = $(this).val().split('\n').join('<br>');
    $('#demo-output').html( asciimoji(text) );
  });

  // setup submission form
  $('#submission-enter').click(function() {
    var data = {
      words: $('#submission-words').val(),
      ascii: $('#submission-ascii').val()
    };

    $('.form-group').removeClass('has-error');

    if(data.words === '') {
      $('#submission-words').parents('.form-group').addClass('has-error');
      return;
    }

    if(data.ascii === '') {
      $('#submission-ascii').parents('.form-group').addClass('has-error');
      return;
    }

    $.post('submit.php',data,function(response){
      var message = 'Submission of the emoticon failed. This happened most likely because someone else already submitted the same emoticon before. ¯\\_(ツ)_/¯',
        messageClass = 'danger';

      if(response.success === true) {
        $('#submission-words,#submission-ascii').val('');
        message = 'Emoticon successfully submitted. Thank you for supporting ASCIImoji! \\( ﾟヮﾟ)/';
        messageClass = 'success';
      }

      var html = '<div class="alert alert-'+messageClass+'">'+message+'</div>';

      $('#form-message')
        .stop(true,true)
        .html(html)
        .show()
        .delay(10000)
        .fadeOut('slow');

    },'json');
  });
});
