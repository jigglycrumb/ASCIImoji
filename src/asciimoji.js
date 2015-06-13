var asciimoji = function(text, options, userDictionary) {

  "use strict";

  var o = options || {
    prefix: '(',
    suffix: ')'
  };

  var dictionary = {
    acid: {
      words: ['acid'],
      ascii: '⊂(◉‿◉)つ'
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
    because: {
      words: ['because', 'since'],
      ascii: '∵'
    },
    blubby: {
      words: ['blubby'],
      ascii: '(      0    _   0    )'
    },
    bond: {
      words: ['bond', '007'],
      ascii: '┌( ͝° ͜ʖ͡°)=ε/̵͇̿̿/’̿’̿ ̿'
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
    lennywizard: {
      words: ['lennywizard'],
      ascii: '╰( ͡° ͜ʖ ͡° )つ──☆*:・ﾟ'
    },
    loading: {
      words: ['loading'],
      ascii: '███▒▒▒▒▒▒▒'
    },
    love: {
      words: ['love'],
      ascii: '♥‿♥'
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
    meep: {
      words: ['meep'],
      ascii: '\\°^°/'
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
    sadlenny: {
      words: ['sadlenny'],
      ascii: '( ͡° ʖ̯ ͡°)'
    },
    shrug: {
      words: ['shrug'],
      ascii: '¯\\_(ツ)_/¯'
    },
    smile: {
      words: ['smile'],
      ascii: 'ツ'
    },
    smiley: {
      words: ['smiley'],
      ascii: '☺︎',
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
    stalker: {
      words: ['stalker'],
      ascii: '┬┴┬┴┤(･_├┬┴┬┴'
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
    yay: {
      words: ['yay'],
      ascii: '\\( ﾟヮﾟ)/'
    },
    yen: {
      words: ['yen'],
      ascii: '¥'
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
    }
  },
  symmetricalDictionary = {};

  for(var hash in userDictionary) dictionary[hash] = userDictionary[hash];

  for(var term in dictionary) {
    for(var i = 0; i < dictionary[term].words.length; ++i) symmetricalDictionary[dictionary[term].words[i]] = dictionary[term].ascii;
  }

  function replace( text ) {
    text = text.replace(new RegExp("[\\"+o.prefix+"]([a-z0-9-<> ]*)[\\"+o.suffix+"]", "gim"), function(a, b) {
      return symmetricalDictionary[b.toLowerCase()] || a;
    });
    return text;
  }

  if( text === undefined ) return dictionary;
  else return replace(text);
};