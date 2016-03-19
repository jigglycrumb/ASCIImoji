var asciimoji = function(text, options, userDictionary) {

  "use strict";

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  var o = options || {
    prefix: '(',
    suffix: ')'
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

    if(backwards && backwards === true) {
      last = str.length - 1;
      for(i = last; i >= 0; --i) result[last - i] = getChar(i);
    }
    else {
      last = str.length;
      for(i = 0; i < last; i++) result[i] = getChar(i);
    }
    return result.join('');
  }

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
    ass: {
      words: ['ass'],
      ascii: '(‿|‿)'
    },
    awkward: {
      words: ['awkward'],
      ascii: '•͡˘㇁•͡˘'
    },
    bandaid: {
      words: ['bandaid'],
      ascii: '( ̲̅:̲̅:̲̅:̲̅[̲̅ ̲̅]̲̅:̲̅:̲̅:̲̅)'
    },
    bat: {
      words: ['bat'],
      ascii: '/|\\ ^._.^ /|\\'
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
      ascii: '❤'
    },
    blackeye: {
      words: ['blackeye'],
      ascii: '0__#'
    },
    blubby: {
      words: ['blubby'],
      ascii: '(      0    _   0    )'
    },
    bond: {
      words: ['bond', '007'],
      ascii: '┌( ͝° ͜ʖ͡°)=ε/̵͇̿̿/’̿’̿ ̿'
    },
    bored: {
      words: ['bored'],
      ascii: '(-_-)'
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
    checkmark: {
      words: ['check'],
      ascii: '✓'
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
    coffee: {
      words: ['coffee', 'cuppa'],
      ascii: 'c[_]'
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
    crim3s: {
      words: ['crim3s'],
      ascii: '( ✜︵✜ )'
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
    damnyou: {
      words: ['damnyou'],
      ascii: '(ᕗ ͠° ਊ ͠° )ᕗ'
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
    dope: {
      words: ['dope'],
      ascii: '<(^_^)>'
    },
    doublequotesleft: {
      words: ['<<'],
      ascii: '«'
    },
    doublequotesright: {
      words: ['>>'],
      ascii: '»'
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
    emptystar: {
      words: ['emptystar'],
      ascii: '☆'
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
    execution: {
      words: ['execution'],
      ascii: '(⌐■_■)︻╦╤─   (╥﹏╥)'
    },
    facebook: {
      words: ['facebook'],
      ascii: '(╯°□°)╯︵ ʞooqǝɔɐɟ'
    },
    facepalm: {
      words: ['facepalm'],
      ascii: '(>ლ)'
    },
    fancytext: {
      words: ['fancytext'],
      ascii: function(text) {

        text = text || 'beware, i am fancy!';

        var table = {
          a : 'α',
          b : 'в',
          c : '¢',
          d : '∂',
          e : 'є',
          f : 'ƒ',
          g : 'g',
          h : 'н',
          i : 'ι',
          j : 'נ',
          k : 'к',
          l : 'ℓ',
          m : 'м',
          n : 'η',
          o:  'σ',
          p : 'ρ',
          q : 'q',
          r : 'я',
          s : 'ѕ',
          t : 'т',
          u : 'υ',
          v : 'ν',
          w : 'ω',
          x : 'χ',
          y : 'у',
          z : 'z',
        };

        return transpose(text.toLowerCase(), table);
      }
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
    fliptext: {
      words: ['fliptext'],
      ascii: function(text) {

        text = text || 'flip me like a table';

        var table = {
          a : '\u0250',
          b : 'q',
          c : '\u0254',
          d : 'p',
          e : '\u01DD',
          f : '\u025F',
          g : '\u0183',
          h : '\u0265',
          i : '\u0131',
          j : '\u027E',
          k : '\u029E',
          l : '\u05DF',
          m : '\u026F',
          n : 'u',
          p :  'd',
          q :  'b',
          r : '\u0279',
          t : '\u0287',
          v : '\u028C',
          w : '\u028D',
          y : '\u028E',
          '.' : '\u02D9',
          '[' : ']',
          '(' : ')',
          '{' : '}',
          '?' : '\u00BF',
          '!' : '\u00A1',
          "\'" : ',',
          '<' : '>',
          '_' : '\u203E',
          '"' : '\u201E',
          '\\' : '\\',
          ';' : '\u061B',
          '\u203F' : '\u2040',
          '\u2045' : '\u2046',
          '\u2234' : '\u2235'
        };

        return transpose(text.toLowerCase(), table, true);
      }
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
    hadouken: {
      words: ['hadouken'],
      ascii: '༼つಠ益ಠ༽つ ─=≡ΣO))'
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
      words: ['hello', 'ohai', 'bye'],
      ascii: '(ʘ‿ʘ)╯'
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
    integral: {
      words: ['int'],
      ascii: '∫'
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
    lazy: {
      words: ['lazy'],
      ascii: '_(:3」∠)_'
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
    lennygang: {
      words: ['lennygang'],
      ascii: '( ͡°( ͡° ͜ʖ( ͡° ͜ʖ ͡°)ʖ ͡°) ͡°)'
    },
    lennyshrug: {
      words: ['lennyshrug'],
      ascii: '¯\\_( ͡° ͜ʖ ͡°)_/¯'
    },
    lennystalker: {
      words: ['lennystalker'],
      ascii: '┬┴┬┴┤( ͡° ͜ʖ├┬┴┬┴'
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
            str = '',
            i;
        for(i = 0; i < filledBlocks; i++) str += '█';
        for(i = 0; i < emptyBlocks; i++) str += '▒';
        return str;
      }
    },
    lol: {
      words: ['lol'],
      ascii: 'L(° O °L)'
    },
    look: {
      words: ['look'],
      ascii: '(ಡ_ಡ)☞'
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
    ohshit: {
      words: ['ohshit'],
      ascii: '( º﹃º )'
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
    plain: {
      words: ['plain'],
      ascii: '._.'
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
    registered: {
      words: ['r'],
      ascii: '®'
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
            rolls  = [];
        for(var i=0; i<amount; i++) rolls.push(dice[getRandomInt(0,5)]);
        return rolls.join(' ');
      }
    },
    rolleyes: {
      words: ['rolleyes'],
      ascii: '(◔_◔)'
    },
    rose : {
      words: ['rose'],
      ascii: '✿ڿڰۣ—'
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
    sigma: {
      words: ['sigma', 'sum'],
      ascii: 'Σ'
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
    sword: {
      words: ['sword'],
      ascii: 'o()xxxx[{::::::::::::::::::>'
    },
    tabledown: {
      words: ['tabledown'],
      ascii: '┬─┬﻿ ノ( ゜-゜ノ)'
    },
    tableflip: {
      words: ['tableflip'],
      ascii: '(ノ ゜Д゜)ノ ︵ ┻━┻'
    },
    tear: {
      words: ['tear'],
      ascii: 'ب_ب'
    },
    thanks: {
      words: ['thanks', 'thankyou', 'ty'],
      ascii: '\\(^-^)/'
    },
    therefore: {
      words: ['therefore', 'so'],
      ascii: '⸫'
    },
    tired: {
      words: ['tired'],
      ascii: '(=____=)'
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
    trustlenny: {
      words: ['trustlenny'],
      ascii: '( ͡~ ͜ʖ ͡°)',
    },
    up: {
      words: ['up'],
      ascii: '↑'
    },
    wat: {
      words: ['wat'],
      ascii: '(ÒДÓױ)'
    },
    wave: {
      words: ['wave'],
      ascii: '( * ^ *) ノシ'
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
    witchtext: {
      words: ['witchtext'],
      ascii: function(text) {

        text = text || 'when shall we three meet again?';

        var table = {
          a : 'Λ',
          b : 'ß',
          c : '¢',
          d : 'Ð',
          e : 'Σ',
          f : 'Ŧ',
          g : 'G',
          h : 'H',
          i : '|',
          j : '⅃',
          k : 'Ҡ',
          l : 'L',
          m : 'M',
          n : 'И',
          o:  'Ө',
          p : 'þ',
          q : 'Q',
          r : 'Я',
          s : '$',
          t : '†',
          u : 'V',
          v : 'V',
          w : 'W',
          x : 'X',
          y : 'Ұ',
          z : 'Z',
        };

        return transpose(text.toLowerCase(), table);
      }
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
      ascii: '⊹╰(⌣ʟ⌣)╯⊹'
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
    text = text.replace(new RegExp("["+o.prefix+"]([^"+o.suffix+"]*)["+o.suffix+"]", "gim"), function(termWithDelimiters, term) {

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
