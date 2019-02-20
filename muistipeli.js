"use strict";

$(document).ready(main);

var emoji = "🥦🥨🥩🥪🥣🥫🥟🥠🥡🥧🥤🥢🛸🛷🦓🦒🦔🦕🦗🦖🏰🗼🗿🍜🍔💍🎓🎩👑👻👽🤖💩⚽️🏀🏈⚾️🎾🎨🎬🎤🎧🎼🎹🥁🎷🎺🎸🎻🎲🎯🎳🎮🎰⌚️📱📲💻⌨️🖥🖨🖱🖲🕹🗜💽💾💿📀📼📷📸📹🎥📽🎞📞☎️📟📠📺📻🎙🎚🎛⏱⏲⏰🕰⌛️⏳📡🔋🔌💡🔦🕯🗑🛢💸💵💴💶💷💰💳💎⚖️🔧🔨⚒🛠⛏🔩⚙️⛓🔫💣🔪🗡⚔️🛡🚬⚰️⚱️🏺🔮📿💈⚗️🔭🔬🕳💊💉🌡🚽🚰🚿🛁🛀🛎🔑🗝🚪🛋🛏🛌🖼🛍🛒🎁🎈🎏🎀🎊🎉🎎🏮🎐🐶🐱🐭🐹🐰🦊🐻🐼🐨🐯🦁🐮🐷🐽🐸🐵🙊🙉🙊🐒🐔🐧🐦🐤🐣🐥🦆🦅🦉🦇🐺🐗🐴🦄🐝🐛🦋🐌🐚🐞🐜🕷🕸🐢🐍🦎🦂🦀🦑🐙🦐🐠🐟🐡🐬🦈🐳🐋🐊🐆🐅🐃🐂🐄🦌🐪🐫🐘🦏🦍🐎🐖🐐🐏🐑🐕🐩🐈🐓🦃🕊🐇🐁🐀🐿🐾🐉🐲🌵🎄🌲🌳🌴🌱🌿☘️🍀🎍🎋🍃🍂🍁🍄🌾💐🌷🌹🥀🌻🌼🌸🌺🌎🌍🌏🌕🌖🌗🌘🌑🌒🌓🌔🌚🌝🌞🌛🌜🌙💫⭐️🌟✨⚡️🔥💥☄️☀️🌤⛅️🌥🌦🌈☁️🌧⛈🌩🌨☃️⛄️❄️🌬💨🌫🌊💧💦☔";

//Excluded: 栃奈阜
var kanjiLevels =
[
   ["一", "右", "雨", "円", "王", "音", "下", "火", "花", "貝", "学", "気", "九", "休", "玉", "金", "空", "月", "犬", "見", "五", "口", "校", "左", "三", "山", "子", "四", "糸", "字", "耳", "七", "車", "手", "十", "出", "女", "小", "上", "森", "人", "水", "正", "生", "青", "夕", "石", "赤", "千", "川", "先", "早", "草", "足", "村", "大", "男", "竹", "中", "虫", "町", "天", "田", "土", "二", "日", "入", "年", "白", "八", "百", "文", "木", "本", "名", "目", "立", "力", "林", "六"],
   ["引", "羽", "雲", "園", "遠", "何", "科", "夏", "家", "歌", "画", "回", "会", "海", "絵", "外", "角", "楽", "活", "間", "丸", "岩", "顔", "汽", "記", "帰", "弓", "牛", "魚", "京", "強", "教", "近", "兄", "形", "計", "元", "言", "原", "戸", "古", "午", "後", "語", "工", "公", "広", "交", "光", "考", "行", "高", "黄", "合", "谷", "国", "黒", "今", "才", "細", "作", "算", "止", "市", "矢", "姉", "思", "紙", "寺", "自", "時", "室", "社", "弱", "首", "秋", "週", "春", "書", "少", "場", "色", "食", "心", "新", "親", "図", "数", "西", "声", "星", "晴", "切", "雪", "船", "線", "前", "組", "走", "多", "太", "体", "台", "地", "池", "知", "茶", "昼", "長", "鳥", "朝", "直", "通", "弟", "店", "点", "電", "刀", "冬", "当", "東", "答", "頭", "同", "道", "読", "内", "南", "肉", "馬", "売", "買", "麦", "半", "番", "父", "風", "分", "聞", "米", "歩", "母", "方", "北", "毎", "妹", "万", "明", "鳴", "毛", "門", "夜", "野", "友", "用", "曜", "来", "里", "理", "話"],
   ["悪", "安", "暗", "医", "委", "意", "育", "員", "院", "飲", "運", "泳", "駅", "央", "横", "屋", "温", "化", "荷", "界", "開", "階", "寒", "感", "漢", "館", "岸", "起", "期", "客", "究", "急", "級", "宮", "球", "去", "橋", "業", "曲", "局", "銀", "区", "苦", "具", "君", "係", "軽", "血", "決", "研", "県", "庫", "湖", "向", "幸", "港", "号", "根", "祭", "皿", "仕", "死", "使", "始", "指", "歯", "詩", "次", "事", "持", "式", "実", "写", "者", "主", "守", "取", "酒", "受", "州", "拾", "終", "習", "集", "住", "重", "宿", "所", "暑", "助", "昭", "消", "商", "章", "勝", "乗", "植", "申", "身", "神", "真", "深", "進", "世", "整", "昔", "全", "相", "送", "想", "息", "速", "族", "他", "打", "対", "待", "代", "第", "題", "炭", "短", "談", "着", "注", "柱", "丁", "帳", "調", "追", "定", "庭", "笛", "鉄", "転", "都", "度", "投", "豆", "島", "湯", "登", "等", "動", "童", "農", "波", "配", "倍", "箱", "畑", "発", "反", "坂", "板", "皮", "悲", "美", "鼻", "筆", "氷", "表", "秒", "病", "品", "負", "部", "服", "福", "物", "平", "返", "勉", "放", "味", "命", "面", "問", "役", "薬", "由", "油", "有", "遊", "予", "羊", "洋", "葉", "陽", "様", "落", "流", "旅", "両", "緑", "礼", "列", "練", "路", "和"],
   ["愛", "案", "以", "衣", "位", "茨", "印", "英", "栄", "媛", "塩", "岡", "億", "加", "果", "貨", "課", "芽", "賀", "改", "械", "害", "街", "各", "覚", "潟", "完", "官", "管", "関", "観", "願", "岐", "希", "季", "旗", "器", "機", "議", "求", "泣", "給", "挙", "漁", "共", "協", "鏡", "競", "極", "熊", "訓", "軍", "郡", "群", "径", "景", "芸", "欠", "結", "建", "健", "験", "固", "功", "好", "香", "候", "康", "佐", "差", "菜", "最", "埼", "材", "崎", "昨", "札", "刷", "察", "参", "産", "散", "残", "氏", "司", "試", "児", "治", "滋", "辞", "鹿", "失", "借", "種", "周", "祝", "順", "初", "松", "笑", "唱", "焼", "照", "城", "縄", "臣", "信", "井", "成", "省", "清", "静", "席", "積", "折", "節", "説", "浅", "戦", "選", "然", "争", "倉", "巣", "束", "側", "続", "卒", "孫", "帯", "隊", "達", "単", "置", "仲", "沖", "兆", "低", "底", "的", "典", "伝", "徒", "努", "灯", "働", "特", "徳", "梨", "熱", "念", "敗", "梅", "博", "阪", "飯", "飛", "必", "票", "標", "不", "夫", "付", "府", "富", "副", "兵", "別", "辺", "変", "便", "包", "法", "望", "牧", "末", "満", "未", "民", "無", "約", "勇", "要", "養", "浴", "利", "陸", "良", "料", "量", "輪", "類", "令", "冷", "例", "連", "老", "労", "録"], // "奈", "阜", "栃"
   ["圧", "囲", "移", "因", "永", "営", "衛", "易", "益", "液", "演", "応", "往", "桜", "可", "仮", "価", "河", "過", "快", "解", "格", "確", "額", "刊", "幹", "慣", "眼", "紀", "基", "寄", "規", "喜", "技", "義", "逆", "久", "旧", "救", "居", "許", "境", "均", "禁", "句", "型", "経", "潔", "件", "険", "検", "限", "現", "減", "故", "個", "護", "効", "厚", "耕", "航", "鉱", "構", "興", "講", "告", "混", "査", "再", "災", "妻", "採", "際", "在", "財", "罪", "殺", "雑", "酸", "賛", "士", "支", "史", "志", "枝", "師", "資", "飼", "示", "似", "識", "質", "舎", "謝", "授", "修", "述", "術", "準", "序", "招", "証", "象", "賞", "条", "状", "常", "情", "織", "職", "制", "性", "政", "勢", "精", "製", "税", "責", "績", "接", "設", "絶", "祖", "素", "総", "造", "像", "増", "則", "測", "属", "率", "損", "貸", "態", "団", "断", "築", "貯", "張", "停", "提", "程", "適", "統", "堂", "銅", "導", "得", "毒", "独", "任", "燃", "能", "破", "犯", "判", "版", "比", "肥", "非", "費", "備", "評", "貧", "布", "婦", "武", "復", "複", "仏", "粉", "編", "弁", "保", "墓", "報", "豊", "防", "貿", "暴", "脈", "務", "夢", "迷", "綿", "輸", "余", "容", "略", "留", "領", "歴"],
   ["胃", "異", "遺", "域", "宇", "映", "延", "沿", "恩", "我", "灰", "拡", "革", "閣", "割", "株", "干", "巻", "看", "簡", "危", "机", "揮", "貴", "疑", "吸", "供", "胸", "郷", "勤", "筋", "系", "敬", "警", "劇", "激", "穴", "券", "絹", "権", "憲", "源", "厳", "己", "呼", "誤", "后", "孝", "皇", "紅", "降", "鋼", "刻", "穀", "骨", "困", "砂", "座", "済", "裁", "策", "冊", "蚕", "至", "私", "姿", "視", "詞", "誌", "磁", "射", "捨", "尺", "若", "樹", "収", "宗", "就", "衆", "従", "縦", "縮", "熟", "純", "処", "署", "諸", "除", "承", "将", "傷", "障", "蒸", "針", "仁", "垂", "推", "寸", "盛", "聖", "誠", "舌", "宣", "専", "泉", "洗", "染", "銭", "善", "奏", "窓", "創", "装", "層", "操", "蔵", "臓", "存", "尊", "退", "宅", "担", "探", "誕", "段", "暖", "値", "宙", "忠", "著", "庁", "頂", "腸", "潮", "賃", "痛", "敵", "展", "討", "党", "糖", "届", "難", "乳", "認", "納", "脳", "派", "拝", "背", "肺", "俳", "班", "晩", "否", "批", "秘", "俵", "腹", "奮", "並", "陛", "閉", "片", "補", "暮", "宝", "訪", "亡", "忘", "棒", "枚", "幕", "密", "盟", "模", "訳", "郵", "優", "預", "幼", "欲", "翌", "乱", "卵", "覧", "裏", "律", "臨", "朗", "論"]
];

var kanjiAll, emojiArray;
var selectedIconArray;
var kanjiDefinitions;

var iconList = [];

// Game variables
var firstClicked = null;
var secondClicked = null;
var gameTime = 0;
var pairsFound = 0;

var difficulties = ["easy", "normal", "hard", "hardest"];
var selectedDifficulty = difficulties[1];
var cardsForDifficulty = {"easy":12, "normal":20, "hard":30, "hardest":42 };
var cardsPerRowForDifficulty = {"easy":3, "normal":5, "hard":6, "hardest":7 };
var cardsTotal = cardsForDifficulty[selectedDifficulty];
var cardsPerRow = cardsPerRowForDifficulty[selectedDifficulty];

var selectedSymbols = "kanji-lvl1";
var selectedReveal = "meaning";

// Timers
var hideCardsTimer = null;
var hideSettingsTimer = null;
var createCardTimer = null;
var gameTimer = null; 

var menuIDs = [/*"#gamerecords",*/"#gamesettings"];
var gameBoard = $("#gameboard");

var backFaceIcons1 = ["🔵", "🔷", "🔴", "💙", "🔺", "🔻"];
var backFaceIcons2 = ["🔶", "⬜️", "⬛️", "💚", "💜", "🖤"];
var backIcon1 = "🔵";
var backIcon2 = "⬜️";
var backFaceColors = 
[
    "cadetblue",
    "darkcyan",
    "darkorange",
    "dimgray",
    "firebrick",
    "lightblue",
    "lightslategray",
    "maroon",
    "mediumseagreen",
    "midnightblue",
    "rebeccapurple",
    "silver",
    "steelblue",
    "teal"
];
var backFaceColor = "teal";

function main()
{
    kanjiDefinitions = JSON.parse(kanjiDefsJSON);

    // Set default buttons as selected
    selectButton(selectedDifficulty);
    selectButton(selectedSymbols);
    selectButton(selectedReveal);

    makeIconArrays();
    setSelectedIconArray();
    resetGame();
    createCards(true);
    setupEventHandlers();
    if(add_debug !== undefined)
        add_debug();
}

function selectButton(buttonName)
{
    $("#" + buttonName + "Button").addClass("mp-selected");
}

function deselectButton(buttonName)
{
    $("#" + buttonName + "Button").removeClass("mp-selected");
}

function setupEventHandlers()
{
    $("#gameClearOKButton").click(gameClearOKClick);
    $("#newGameButton").click(newGameClick);
    $("#settingsButton").click(dropDownButtonClick);
    $("#settingsButton").mouseleave(function(){ hideSettingsTimer = setTimeout(hideMenu, 450, "#gamesettings"); });
    $("#settingsButton").mouseenter(function(){ clearTimeout(hideSettingsTimer); });

    $("#gamesettings").mouseleave(function(){ hideSettingsTimer = setTimeout(hideMenu, 450, "#gamesettings"); });
    $("#gamesettings").mouseenter(function(){ clearTimeout(hideSettingsTimer); });

    $("#emojiButton").click(symbolsButtonClick);
    $("#kanjiAllButton").click(symbolsButtonClick);
    for (let i = 1; i <= kanjiLevels.length; i++)
    {
        $("#kanji-lvl" + i + "Button").click(symbolsButtonClick);
    }

    for (const difficulty of difficulties)
    {
        $("#" + difficulty + "Button").click(difficultyButtonClick);
    }

    $("#meaningButton").click(revealButtonClick);
    $("#kunButton").click(revealButtonClick);
    $("#onButton").click(revealButtonClick);
    $("#randomButton").click(revealButtonClick);
}

function makeIconArrays()
{
    kanjiAll = [];

    for (const level of kanjiLevels)
    {
        for (const kanji of level)
        {
            kanjiAll.push(kanji);
        }
    }

    // Cannot use string indexing because of unicode
    emojiArray = [];

    for (const symbol of emoji)
    {
        // U+FE0F Variant Selector - Display preceding character as colorful image
        if(symbol != "\uFE0F")
            emojiArray.push(symbol);
    }
}

function selectBackFaceIcons()
{
    backIcon1 = backFaceIcons1[Math.floor(Math.random() * backFaceIcons1.length)];
    backIcon2 = backFaceIcons2[Math.floor(Math.random() * backFaceIcons2.length)];
}

function selectBackFaceColor()
{
    backFaceColor = backFaceColors[Math.floor(Math.random() * backFaceColors.length)];
}

function getBackSymbol(i)
{
    return (i%2 === 0 ? backIcon1 : backIcon2);
}

function generateIcons()
{
    // Clear the icon list
    iconList.splice(0, iconList.length);

    for (let i = 0; i < cardsTotal/2; i++)
    {
        let randIndex;
        let iconToAdd;

        do
        {
            randIndex = Math.floor(Math.random() * selectedIconArray.length);
            iconToAdd = selectedIconArray[randIndex];
        }
        while(iconList.includes(iconToAdd));

        // Add the pair
        iconList.push(iconToAdd, iconToAdd);
    }
}

function getRandomIconFromList()
{
    let randIndex = Math.floor(Math.random() * iconList.length);
    let selected = iconList[randIndex];

    // Remove icon from the array
    iconList.splice(randIndex, 1);

    return selected;
}

function cardClicked()
{
    if($(this).hasClass("flipped"))
        return;

    // Hide both displayed cards right away
    if(hideCardsTimer !== null)
    {
        clearTimeout(hideCardsTimer);
        hideBothCards();
    }

    // Start the game timer if this is the very first card clicked
    if(gameTimer === null)
    {
        gameTimer = setInterval(gameTimerTick, 100);
    }

    $(this).addClass("flipped");

    if(firstClicked === null)
    {
        firstClicked = $("#" + $(this).attr('id'));
    }
    else if (secondClicked === null)
    {
        secondClicked = $("#" + $(this).attr('id'));

        if(isMatch())
        {
            matchFound();
        } else
        {
            hideCardsTimer = setTimeout(hideBothCards, 750);
        }
    } 
}

function isMatch()
{
    return firstClicked.find(".mp-front-symbol").text() == secondClicked.find(".mp-front-symbol").text();
}

function getRubyText(reveal, kanji)
{
    const kunReading = kanjiDefinitions[kanji].kun;
    const onReading = kanjiDefinitions[kanji].on;

    switch(reveal)
    {
        case "meaning":
            return kanjiDefinitions[kanji].meaning;

        case "kun":
            return kunReading != "" ? kunReading : onReading;

        case "on":
            return onReading != "" ? onReading : kunReading;

        case "random":
            let rand = Math.floor(Math.random() * 3);
            if(rand == 0)
                return getRubyText("meaning", kanji);
            else if(rand == 1)
                return getRubyText("kun", kanji);
            else
                return getRubyText("on", kanji);
    }
}

function revealRubies()
{
    let kanji = firstClicked.find(".mp-front-symbol").text();
    let firstRuby = firstClicked.find(".mp-ruby");
    let secondRuby = secondClicked.find(".mp-ruby");
    let rubyText = getRubyText(selectedReveal, kanji);

    if(rubyText === undefined)
        rubyText = "DANGER!!!TERROR!HORROR!";

    revealRubyText(firstRuby, rubyText);
    revealRubyText(secondRuby, rubyText);

    const style = { color: "gray" };

    firstClicked.find(".mp-front-symbol").css(style);
    secondClicked.find(".mp-front-symbol").css(style);
}

function revealRubyText(element, rubyText)
{
    element.text(rubyText);

    const style = { display: "flex" };
    element.css(style);
    element.addClass("mp-ruby-fadein");
}

function matchFound()
{
    if(selectedSymbols.includes("kanji"))
    {
        revealRubies();
    }

    firstClicked = secondClicked = null;

    if(++pairsFound == cardsTotal/2)
        allPairsFound();
}

function hideBothCards()
{
    firstClicked.removeClass("flipped");
    secondClicked.removeClass("flipped");

    firstClicked = secondClicked = hideCardsTimer = null;
}

function resetGame(resetTimer = true)
{
    firstClicked = secondClicked = null;
    if(hideCardsTimer !== null)
    {
        clearTimeout(hideCardsTimer);
        hideCardsTimer = null;
    }
    if(gameTimer !== null)
    {
        clearInterval(gameTimer);
        gameTimer = null;
    }

    if(resetTimer)
    {
        $("#gameTimer").text(formatTime(0));
    }

    pairsFound = 0;
    gameTime = 0;

    gameBoard.css("grid-template-columns", "repeat(" + cardsPerRow + ", auto)");
    gameBoard.css("grid-template-rows", "repeat(" + Math.ceil(cardsTotal / cardsPerRow) + ", auto)");

    createCards(true);
}

function gameClearOKClick()
{
    $(".mp-gameclear-cont").fadeOut(500);

    gameBoard.css({filter: "none"});
    $("#gamecontrols").css({filter: "none"});

    //resetGame();
}

function allPairsFound()
{
    clearInterval(gameTimer);
    gameTimer = null;

    $("#gameClearOKButton").text("OK");
    $("#gameClearOKButton").css({float: "none"});

    let blur = { filter: "blur(1px)" };

    gameBoard.css(blur);
    $("#gamecontrols").css(blur);

    $(".mp-gameclear-cont").fadeIn(500);
}

function newGameClick()
{
    hideAllMenus();
    resetGame();
}

function dropDownButtonClick()
{
    let clickedButton = $(this);
    let menuID = "#game" + clickedButton.attr("id").replace("Button", "");

    hideAllMenus(menuID);

    let menuToShow = $(menuID);

    let sbPos = clickedButton.offset();
    let leftOffset = (menuToShow.outerWidth() - clickedButton.outerWidth())/2;
    menuToShow.css({top: sbPos.top + clickedButton.outerHeight() + 3, 
                    left: Math.max(0, sbPos.left - leftOffset)});

    if (menuToShow.is(":hidden"))
    {
        menuToShow.slideDown(100);
    } else
    {
        menuToShow.slideUp(100);
    }
}

function hideAllMenus(excludeID="NA")
{
    for(const menuID of menuIDs)
    {
        if(menuID != excludeID)
        {
            hideMenu(menuID);
        }
    }
}

function hideMenu(id)
{
    if ($(id).is(":visible"))
    {
        $(id).slideUp(100);
    }
}

function symbolsButtonClick()
{
    if($(this).attr("id") == selectedSymbols + "Button")
        return;

    changeSelectedButton(this, selectedSymbols);
    selectedSymbols = $(this).attr("id").replace("Button", "");
    
    setSelectedIconArray();
    resetGame();
}

function changeSelectedButton(newSelectedElem, oldSelectedName)
{
    $(newSelectedElem).addClass("mp-selected");
    deselectButton(oldSelectedName);
}

function setSelectedIconArray()
{
    if(selectedSymbols.startsWith("kanji-lvl"))
    {
        let level = parseInt(selectedSymbols[selectedSymbols.length - 1]) - 1;
        selectedIconArray = kanjiLevels[level];
        return;
    }

    switch(selectedSymbols)
    {
        case "kanjiAll":
            selectedIconArray = kanjiAll;
        break;
        case "emoji":
            selectedIconArray = emojiArray
        break;
    }
}

function revealButtonClick()
{
    if($(this).attr("id") == selectedReveal + "Button")
        return;
    
    changeSelectedButton(this, selectedReveal);
    selectedReveal = $(this).attr("id").replace("Button", "");
}

function difficultyButtonClick()
{
    if($(this).attr("id") == selectedDifficulty + "Button")
        return;
    
    changeSelectedButton(this, selectedDifficulty);

    selectedDifficulty = $(this).attr("id").replace("Button", "");

    cardsTotal = cardsForDifficulty[selectedDifficulty];
    cardsPerRow = cardsPerRowForDifficulty[selectedDifficulty];

    resetGame();
}

function createCards(createOnebyOne = false)
{
    clearTimeout(createCardTimer);

    gameBoard.empty();

    selectBackFaceColor();
    selectBackFaceIcons();

    generateIcons();

    if(createOnebyOne)
    {
        createCard(0, true);
    } else
    {
        for(let i = 0; i < cardsTotal; i++)
        {
            createCard(i);
        }
    }   
}

function createCard(cardNumber, createNext = false)
{
    let cardId = "c" + cardNumber;
    gameBoard.append(
        `<div id='${cardId}' class='mp-card'>
            <div class='mp-side mp-card-front'>
                <div class='mp-front-symbol'>${getRandomIconFromList()}</div>
                <div class='mp-ruby mp-ruby-${selectedDifficulty}'></div>
            </div>
            <div class='mp-side mp-card-back' style='background-color:${backFaceColor}'>${getBackSymbol(cardNumber)}</div>
         </div>`
        );

    $("#" + cardId).click(cardClicked);
    
    if(createNext && ++cardNumber < cardsTotal)
        createCardTimer = setTimeout(createCard, 20, cardNumber, true);
}

function gameTimerTick()
{
    gameTime += 100;

    $("#gameTimer").text(formatTime(gameTime));
}

function formatTime(timeToFormat)
{
    let hundreths = (timeToFormat/100) % 10;
    let seconds = Math.floor(timeToFormat / 1000);
    let minutes = Math.floor(seconds / 60);
    seconds %= 60;

    if(minutes < 10)
    {
        minutes = "0" + minutes;
    }
  
    if(seconds < 10)
    {
        seconds = "0" + seconds;
    }

    return minutes + ":" + seconds + "." + hundreths;
}