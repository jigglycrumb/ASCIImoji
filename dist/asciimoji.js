var asciimoji = function(text, options, userDictionary) {

  "use strict";

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  var o = options || {
    prefix: '(',
    suffix: ')'
  };

  var dictionary = {
    acid: {
      words: ['acid'],
      ascii: '⊂(◉‿◉)つ'
    },
    afraid: {
      words: ['afraid'],
      ascii: '(ㆆ _ ㆆ)'
    },
    angel: {
      words: ['angel'],
      ascii: '☜(⌒▽⌒)☞'
    },
    apple: {
      words: ['apple'],
      ascii: ''
    },
    awkward: {
      words: ['awkward'],
      ascii: '•͡˘㇁•͡˘'
    },
    barcode: {
      words: ['barcode'],
      ascii: '█║▌│ █│║▌ ║││█║▌ │║║█║ │║║█║'
    },
    bat: {
      words: ['bat'],
      ascii: '/|\\( ;,;)/|\\'
    },
    bear: {
      words: ['bear', 'koala'],
      ascii: 'ʕ·͡ᴥ·ʔ﻿'
    },
    bearflip: {
      words: ['bearflip'],
      ascii: 'ʕノ•ᴥ•ʔノ ︵ ┻━┻'
    },
    because: {
      words: ['because', 'since'],
      ascii: '∵'
    },
    bigheart: {
      words: ['bigheart'],
      ascii: '❤',
    },
    blubby: {
      words: ['blubby'],
      ascii: '(      0    _   0    )'
    },
    bond: {
      words: ['bond', '007'],
      ascii: '┌( ͝° ͜ʖ͡°)=ε/̵͇̿̿/’̿’̿ ̿'
    },
    bribe: {
      words: ['bribe'],
      ascii: '( •͡˘ _•͡˘)ノð'
    },
    bubbles: {
      words: ['bubbles'],
      ascii: '( ˘ ³˘)ノ°ﾟº❍｡'
    },
    butterfly: {
      words: ['butterfly'],
      ascii: 'ƸӜƷ'
    },
    cat: {
      words: ['cat'],
      ascii: '(= ФェФ=)'
    },
    catlenny: {
      words: ['catlenny'],
      ascii: '( ͡° ᴥ ͡°)﻿'
    },
    chubby: {
      words: ['chubby'],
      ascii: '╭(ʘ̆~◞౪◟~ʘ̆)╮'
    },
    claro: {
      words: ['claro'],
      ascii: '(͡ ° ͜ʖ ͡ °)'
    },
    clique: {
      words: ['clique'],
      ascii: 'ヽ༼ ຈل͜ຈ༼ ▀̿̿Ĺ̯̿̿▀̿ ̿༽Ɵ͆ل͜Ɵ͆ ༽ﾉ'
    },
    cloud: {
      words: ['cloud'],
      ascii: '☁'
    },
    club: {
      words: ['club'],
      ascii: '♣'
    },
    command: {
      words: ['cmd', 'command'],
      ascii: '⌘'
    },
    copyright: {
      words: ['copy','c'],
      ascii: '©'
    },
    couplekiss: {
      words: ['couplekiss'],
      ascii: '( c//”-}{-*||x)'
    },
    creep: {
      words: ['creep'],
      ascii: 'ԅ(≖‿≖ԅ)'
    },
    cross: {
      words: ['cross'],
      ascii: '†'
    },
    cry: {
      words: ['cry'],
      ascii: '(╥﹏╥)'
    },
    cute: {
      words: ['cute'],
      ascii: '｡◕ ‿ ◕｡'
    },
    d1: {
      words: ['d1'],
      ascii: '⚀'
    },
    d2: {
      words: ['d2'],
      ascii: '⚁'
    },
    d3: {
      words: ['d3'],
      ascii: '⚂'
    },
    d4: {
      words: ['d4'],
      ascii: '⚃'
    },
    d5: {
      words: ['d5'],
      ascii: '⚄'
    },
    d6: {
      words: ['d6'],
      ascii: '⚅'
    },
    dance: {
      words: ['dance'],
      ascii: 'ᕕ(⌐■_■)ᕗ ♪♬'
    },
    dead: {
      words: ['dead'],
      ascii: 'x⸑x'
    },
    dealwithit: {
      words: ['dealwithit', 'dwi'],
      ascii: '(⌐■_■)'
    },
    delta: {
      words: ['delta'],
      ascii: 'Δ'
    },
    depressed: {
      words: ['depressed'],
      ascii: '(︶︹︶)'
    },
    derp: {
      words: ['derp'],
      ascii: '☉⏝⚆'
    },
    diamond: {
      words: ['diamond'],
      ascii: '♦'
    },
    dog: {
      words: ['dog'],
      ascii: '(◕ᴥ◕ʋ)'
    },
    dollar: {
      words: ['dollar'],
      ascii: '$'
    },
    dollar100: {
      words: ['dollar100'],
      ascii: '[̲̅$̲̅(̲̅ιοο̲̅)̲̅$̲̅]'
    },
    dong: {
      words: ['dong'],
      ascii: '(̿▀̿ ̿Ĺ̯̿̿▀̿ ̿)̄',
    },
    donger: {
      words: ['donger'],
      ascii: 'ヽ༼ຈل͜ຈ༽ﾉ',
    },
    dontcare: {
      words: ['dontcare'],
      ascii: '╭∩╮（︶︿︶）╭∩╮'
    },
    donotwant: {
      words: ['do not want', 'dontwant'],
      ascii: 'ヽ(｀Д´)ﾉ'
    },
    doubletableflip: {
      words: ['doubletableflip'],
      ascii: '┻━┻ ︵ヽ(`Д´)ﾉ︵ ┻━┻'
    },
    down: {
      words: ['down'],
      ascii: '↓'
    },
    duckface: {
      words: ['duckface'],
      ascii: '(・3・)'
    },
    duh: {
      words: ['duh'],
      ascii: '(≧︿≦)'
    },
    dunnolol: {
      words: ['dunno'],
      ascii: '¯\\(°_o)/¯'
    },
    ebola: {
      words: ['ebola'],
      ascii: 'ᴇʙᴏʟᴀ'
    },
    ellipsis: {
      words: ['ellipsis', '...'],
      ascii: '…'
    },
    emdash: {
      words: ['emdash', '--'],
      ascii: '–'
    },
    endure: {
      words: ['endure'],
      ascii: '(҂◡_◡) ᕤ'
    },
    envelope: {
      words: ['envelope', 'letter'],
      ascii: '✉︎'
    },
    euro: {
      words: ['euro'],
      ascii: '€'
    },
    evil: {
      words: ['evil'],
      ascii: 'ψ(｀∇´)ψ'
    },
    evillenny: {
      words: ['evillenny'],
      ascii: '(͠≖ ͜ʖ͠≖)'
    },
    facebook: {
      words: ['facebook'],
      ascii: '(╯°□°)╯︵ ʞooqǝɔɐɟ'
    },
    facepalm: {
      words: ['facepalm'],
      ascii: '(>ლ)'
    },
    fancylove: {
      words: ['fancylove'],
      ascii: 'ℒℴνℯ'
    },
    fart: {
      words: ['fart'],
      ascii: '(ˆ⺫ˆ๑)<3'
    },
    fight: {
      words: ['fight'],
      ascii: '(ง •̀_•́)ง'
    },
    finn: {
      words: ['finn'],
      ascii: '| (• ◡•)|'
    },
    fish: {
      words: ['fish'],
      ascii: '<"(((<3'
    },
    flipped: {
      words: ['flipped', 'heavytable'],
      ascii: '┬─┬﻿ ︵ /(.□. \\）'
    },
    flower: {
      words: ['flower', 'flor'],
      ascii: '(✿◠‿◠)'
    },
    flower2: {
      words: ['f'],
      ascii: '✿'
    },
    friendflip: {
      words: ['friendflip'],
      ascii: '(╯°□°)╯︵ ┻━┻ ︵ ╯(°□° ╯)'
    },
    frown: {
      words: ['frown'],
      ascii: '(ღ˘⌣˘ღ)'
    },
    fuckyou: {
      words: ['fuckyou', 'fu'],
      ascii: '┌П┐(ಠ_ಠ)'
    },
    gentleman: {
      words: ['gentleman', 'sir', 'monocle'],
      ascii: 'ಠ_ರೃ'
    },
    ghast: {
      words: ['ghast'],
      ascii: '= _ ='
    },
    ghost: {
      words: ['ghost'],
      ascii: '༼ つ ❍_❍ ༽つ'
    },
    gift: {
      words: ['gift', 'present'],
      ascii: '(´・ω・)っ由',
    },
    gimme: {
      words: ['gimme'],
      ascii: '༼ つ ◕_◕ ༽つ'
    },
    glitterbomb: {
      words: ['glitter'],
      ascii: '(*・_・)ノ⌒*`*`*'
    },
    gloomy: {
      words: ['gloomy'],
      ascii: '(_゜_゜_)'
    },
    goatse: {
      words: ['goatse'],
      ascii: '(з๏ε)'
    },
    gotit: {
      words: ['gotit'],
      ascii: '(☞ﾟ∀ﾟ)☞'
    },
    greet: {
      words: ['greet', 'greetings'],
      ascii: '( ´◔ ω◔`) ノシ'
    },
    gun: {
      words: ['gun', 'mg'],
      ascii: '︻╦╤─'
    },
    hammerandsickle: {
      words: ['hammerandsickle', 'hs'],
      ascii: '☭'
    },
    handleft: {
      words: ['handleft', 'hl'],
      ascii: '☜'
    },
    handright: {
      words: ['handright', 'hr'],
      ascii: '☞'
    },
    haha: {
      words: ['haha'],
      ascii: '٩(^‿^)۶'
    },
    happy: {
      words: ['happy'],
      ascii: 'ʘ‿ʘ'
    },
    happygarry: {
      words: ['happygarry'],
      ascii: 'ᕕ( ᐛ )ᕗ'
    },
    heart: {
      words: ['h', 'heart'],
      ascii: '♥'
    },
    hello: {
      words: ['hello', 'ohai', 'wave', 'bye'],
      ascii: '|ʘ‿ʘ)╯'
    },
    hitting: {
      words: ['hitting'],
      ascii: '( ｀皿´)｡ﾐ/'
    },
    hugs: {
      words: ['hug', 'hugs'],
      ascii: '(づ｡◕‿‿◕｡)づ'
    },
    iknowright: {
      words: ['iknowright', 'ikr'],
      ascii: '┐｜･ิω･ิ#｜┌'
    },
    illuminati: {
      words: ['illuminati'],
      ascii: '୧(▲ᴗ▲)ノ'
    },
    infinity: {
      words: ['infinity', 'inf'],
      ascii: '∞'
    },
    inlove: {
      words: ['inlove'],
      ascii: '(っ´ω`c)♡'
    },
    internet: {
      words: ['internet'],
      ascii: 'ଘ(੭*ˊᵕˋ)੭* ̀ˋ ɪɴᴛᴇʀɴᴇᴛ'
    },
    interrobang: {
      words: ['interrobang'],
      ascii: '‽'
    },
    jake: {
      words: ['jake'],
      ascii: '(❍ᴥ❍ʋ)'
    },
    kiahh: {
      words: ['kiahh'],
      ascii: '~\\(≧▽≦)/~'
    },
    kiss: {
      words: ['kiss'],
      ascii: '(づ ￣ ³￣)づ'
    },
    left: {
      words: ['left', '<-'],
      ascii: '←'
    },
    lenny: {
      words: ['lenny'],
      ascii: '( ͡° ͜ʖ ͡°)'
    },
    lennyfight: {
      words: ['lennyfight'],
      ascii: '(ง ͠° ͟ʖ ͡°)ง'
    },
    lennyshrug: {
      words: ['lennyshrug'],
      ascii: '¯\\_( ͡° ͜ʖ ͡°)_/¯'
    },
    lennywizard: {
      words: ['lennywizard'],
      ascii: '╰( ͡° ͜ʖ ͡° )つ──☆*:・ﾟ'
    },
    loading: {
      words: ['loading'],
      ascii: function(percent) {
        percent = percent || 30;
        var filledBlocks = Math.round(percent/10) <= 10 ? Math.round(percent/10) : 10,
            emptyBlocks = 10 - filledBlocks,
            str = '';
        for(var i = 0; i < filledBlocks; i++) str += '█';
        for(var i = 0; i < emptyBlocks; i++) str += '▒';
        return str;
      }
    },
    love: {
      words: ['love'],
      ascii: '♥‿♥'
    },
    lovebear: {
      words: ['lovebear'],
      ascii: 'ʕ♥ᴥ♥ʔ'
    },
    lumpy: {
      words: ['lumpy'],
      ascii: '꒰ ꒡⌓꒡꒱'
    },
    luv: {
      words: ['luv'],
      ascii: '-`ღ´-'
    },
    magic: {
      words: ['magic'],
      ascii: 'ᕙ(░ಥ╭͜ʖ╮ಥ░)━☆ﾟ.*･｡ﾟ'
    },
    magicflip: {
      words: ['magicflip'],
      ascii: '(/¯◡ ‿ ◡)/¯ ~ ┻━┻'
    },
    meep: {
      words: ['meep'],
      ascii: '\\(°^°)/'
    },
    meh: {
      words: ['meh'],
      ascii: 'ಠ_ಠ'
    },
    mistyeyes: {
      words: ['mistyeyes'],
      ascii: 'ಡ_ಡ'
    },
    monster: {
      words: ['monster'],
      ascii: '༼ ༎ຶ ෴ ༎ຶ༽'
    },
    needle: {
      words: ['needle', 'inject'],
      ascii: '┌(◉ ͜ʖ◉)つ┣▇▇▇═──'
    },
    nervous: {
      words: ['nervous'],
      ascii: '(｡❛□❛)'
    },
    nice: {
      words: ['nice'],
      ascii: '( ͡° ͜ °)'
    },
    no: {
      words: ['no'],
      ascii: '→_←'
    },
    noclue: {
      words: ['noclue'],
      ascii: '／人◕ __ ◕人＼'
    },
    nom: {
      words: ['nom', 'yummy', 'delicious'],
      ascii: '(っˆڡˆς)'
    },
    note: {
      words: ['note', 'sing'],
      ascii: '♫'
    },
    nuclear: {
      words: ['nuclear', 'radioactive', 'nukular'],
      ascii: '☢'
    },
    nyan: {
      words: ['nyan'],
      ascii: '~=[,,_,,]:3'
    },
    nyeh: {
      words: ['nyeh'],
      ascii: '@^@'
    },
    omg: {
      words: ['omg'],
      ascii: '◕_◕'
    },
    option: {
      words: ['opt', 'option'],
      ascii: '⌥'
    },
    ohreally: {
      words: ['orly'],
      ascii: '(눈_눈)'
    },
    ohyou: {
      words: ['ohyou', 'ou'],
      ascii: '(◞థ౪థ)ᴖ'
    },
    peace: {
      words: ['peace', 'victory'],
      ascii: '✌(-‿-)✌'
    },
    pear: {
      words: ['pear'],
      ascii: '(__>-'
    },
    pi: {
      words: ['pi'],
      ascii: 'π'
    },
    point: {
      words: ['point'],
      ascii: '(☞ﾟヮﾟ)☞'
    },
    pooh: {
      words: ['pooh'],
      ascii: 'ʕ •́؈•̀)'
    },
    porcupine: {
      words: ['porcupine'],
      ascii: '(•ᴥ• )́`́\'́`́\'́⻍'
    },
    pound: {
      words: ['pound'],
      ascii: '£'
    },
    praise: {
      words: ['praise'],
      ascii: '(☝ ՞ਊ ՞)☝'
    },
    punch: {
      words: ['punch'],
      ascii: 'O=(\'-\'Q)'
    },
    rage: {
      words: ['rage', 'mad', 'angry'],
      ascii: 't(ಠ益ಠt)'
    },
    really: {
      words: ['really'],
      ascii: 'ò_ô'
    },
    right: {
      words: ['right', '->'],
      ascii: '→'
    },
    riot: {
      words: ['riot'],
      ascii: '୧༼ಠ益ಠ༽୨'
    },
    rolldice: {
      words: ['rolldice'],
      ascii: function(amount) {
        amount = amount || 1;
        var dice = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'],
            str  = '';
        for(var i=0; i<amount; i++) str += dice[getRandomInt(0,5)];
        return str;
      }
    },
    rolleyes: {
      words: ['rolleyes'],
      ascii: '(◔_◔)'
    },
    rose : {
      words: ['rose'],
      ascii: '--------{---(@'
    },
    run: {
      words: ['run'],
      ascii: '(╯°□°)╯'
    },
    sad: {
      words: ['sad'],
      ascii: 'ε(´סּ︵סּ`)з'
    },
    saddonger: {
      words: ['saddonger'],
      ascii: 'ヽ༼ຈʖ̯ຈ༽ﾉ'
    },
    sadlenny: {
      words: ['sadlenny'],
      ascii: '( ͡° ʖ̯ ͡°)'
    },
    shout: {
      words: ['shout'],
      ascii: '╚(•⌂•)╝'
    },
    shrug: {
      words: ['shrug'],
      ascii: '¯\\_(ツ)_/¯'
    },
    skull: {
      words: ['skull'],
      ascii: '☠'
    },
    smile: {
      words: ['smile'],
      ascii: 'ツ'
    },
    smiley: {
      words: ['smiley'],
      ascii: '☺︎'
    },
    smirk: {
      words: ['smirk'],
      ascii: '¬‿¬'
    },
    sniper: {
      words: ['sniper'],
      ascii: '▄︻̷̿┻̿═━一'
    },
    snowman: {
      words: ['snowman'],
      ascii: '☃'
    },
    sob: {
      words: ['sob'],
      ascii: '(;´༎ຶД༎ຶ`)'
    },
    spade: {
      words: ['spade'],
      ascii: '♠'
    },
    squareroot: {
      words: ['sqrt'],
      ascii: '√'
    },
    squid: {
      words: ['squid'],
      ascii: '<コ:彡'
    },
    star: {
      words: ['star'],
      ascii: '★'
    },
    stoned: {
      words: ['stoned'],
      ascii: '(◞ิᴗ◟ิ*)'
    },
    strong: {
      words: ['strong'],
      ascii: 'ᕙ(⇀‸↼‶)ᕗ'
    },
    sum: {
      words: ['sum'],
      ascii: '∑'
    },
    sun: {
      words: ['sun'],
      ascii: '☀'
    },
    surrender: {
      words: ['surrender'],
      ascii: '\\_(-_-)_/',
    },
    stalker: {
      words: ['stalker'],
      ascii: '┬┴┬┴┤(･_├┬┴┬┴'
    },
    swag: {
      words: ['swag'],
      ascii: '(̿▀̿‿ ̿▀̿ ̿)'
    },
    tabledown: {
      words: ['tabledown'],
      ascii: '┬─┬﻿ ノ( ゜-゜ノ)'
    },
    tableflip: {
      words: ['tableflip'],
      ascii: '(ノ ゜Д゜)ノ ︵ ┻━┻'
    },
    thanks: {
      words: ['thanks', 'thankyou', 'ty'],
      ascii: '\\(^-^)/'
    },
    therefore: {
      words: ['therefore', 'so'],
      ascii: '⸫'
    },
    toldyouso: {
      words: ['toldyouso', 'toldyou'],
      ascii: '☜(꒡⌓꒡)'
    },
    trademark: {
      words: ['tm'],
      ascii: '™'
    },
    triangle: {
      words: ['triangle', 't'],
      ascii: '▲',
    },
    up: {
      words: ['up'],
      ascii: '↑'
    },
    wat: {
      words: ['wat'],
      ascii: '(ÒДÓױ)'
    },
    whaa: {
      words: ['whaa'],
      ascii: 'Ö'
    },
    what: {
      words: ['what'],
      ascii: '(•̪●)'
    },
    whoa: {
      words: ['whoa'],
      ascii: '(°o•)'
    },
    why: {
      words: ['why'],
      ascii: 'ლ(`◉◞౪◟◉‵ლ)'
    },
    wink: {
      words: ['wink'],
      ascii: '( •ॢ◡-ॢ)-*'
    },
    wooh: {
      words: ['wooh'],
      ascii: '(‘{}’)'
    },
    wtf: {
      words: ['wtf'],
      ascii: '(⊙＿⊙\')'
    },
    wut: {
      words: ['wut'],
      ascii: '⊙ω⊙'
    },
    yay: {
      words: ['yay'],
      ascii: '\\( ﾟヮﾟ)/'
    },
    yen: {
      words: ['yen'],
      ascii: '¥'
    },
    yinyang: {
      words: ['yinyang', 'yy'],
      ascii: '☯'
    },
    yolo: {
      words: ['yolo'],
      ascii: 'Yᵒᵘ Oᶰˡʸ Lᶤᵛᵉ Oᶰᶜᵉ'
    },
    youkids: {
      words: ['youkids', 'ukids'],
      ascii: 'ლ༼>╭ ͟ʖ╮<༽ლ'
    },
    yuno: {
      words: ['y u no', 'yuno'],
      ascii: '(屮ﾟДﾟ)屮 Y U NO'
    },
    zen: {
      words: ['zen', 'meditation', 'omm'],
      ascii: '⊹╰(⌣͜ʟ⌣)╯⊹'
    },
    zoidberg: {
      words: ['zoidberg'],
      ascii: '(V) (°,,,,°) (V)'
    },
    zombie: {
      words: ['zombie'],
      ascii: '[¬º-°]¬'
    },
  },
  symmetricalDictionary = {};

  for(var hash in userDictionary) dictionary[hash] = userDictionary[hash];

  for(var term in dictionary) {
    var words = dictionary[term].words,
        ascii = dictionary[term].ascii;
    for(var i = 0; i < words.length; ++i) symmetricalDictionary[words[i]] = ascii;
  }

  function replace( text ) {
    text = text.replace(new RegExp("[\\"+o.prefix+"]([a-z0-9-<>, ]*)[\\"+o.suffix+"]", "gim"), function(termWithDelimiters, term) {

      var params = null;

      if(term.indexOf(',') !== -1) {
        var temp  = term.split(',');
        term      = temp.shift();
        params    = temp;
      }

      var dictItem = symmetricalDictionary[term.toLowerCase()];

      if(dictItem) {
        if(typeof dictItem == 'function') return dictItem.apply(null, params);
        else return dictItem;
      }
      else return termWithDelimiters;
    });
    return text;
  }

  if( text === undefined ) return dictionary;
  else return replace(text);
};