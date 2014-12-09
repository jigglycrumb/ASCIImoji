var elems = [
  'input[type!=password]',
  'textarea',
  '[contenteditable]'
];

var storage = {
  settings: {},
  dictionary: {}
};

function init(result){
  storage.settings = result.settings || {prefix: '(', suffix: ')'};
  storage.dictionary = result.dictionary || {};
  elems.forEach(function(elem){
    $(document).on('input paste click', elem, function(){
      $(this).asciimoji(storage.settings, storage.dictionary);
    });
  });
}

// load storage and initialize
chrome.storage.sync.get(init);