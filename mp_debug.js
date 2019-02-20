function add_debug()
{
    $("#hardestButton").after("<div id=\"debug\"></div>");

    $("body").keydown(function(event) {
        switch(event.key)
        {
            case "d":
                if($("#debug").is(":visible"))
                    $("#debug").fadeOut();
                else
                    $("#debug").fadeIn();
            break;
            case "r":
                showAllRuby();
            break;
            case "f":
                $(".mp-card").toggleClass("flipped");
            break;
            case "a":
                findAll();
            break;
        }
    });

    $("#debug").append("<button id='dbFlip'>Flip All</button>");
    $("#dbFlip").click(function() { $(".mp-card").toggleClass("flipped");});

    $("#debug").append("<button id='dbFind'>Find All</button>");
    $("#dbFind").click(findAll);

    $("#debug").append("<button id='dbRuby'>Reveal Rubies</button>");
    $("#dbRuby").click(showAllRuby);

    $("#debug").append("<button id='dbStop'>Stop Timer</button>");
    $("#dbStop").click(function() { 
        clearInterval(gameTimer);
        gameTimer = null;
    });
}

function findAll()
{
    $(".mp-card").addClass("flipped"); 
    pairsFound = cardsTotal/2;
    allPairsFound();
}

function showAllRuby()
{
    if(selectedSymbols.includes("kanji"))
    {
        for(let i = 0; i < cardsTotal; i++)
        {
            let card = $("#c" + i);
            let kanji = card.find(".mp-front-symbol").text();
            let rubyElem = card.find(".mp-ruby");
            let rubyText = getRubyText(selectedReveal, kanji);
            if(rubyText === undefined)
                rubyText = "UNDEFINED";

            revealRubyText(rubyElem, rubyText);

            card.find(".mp-front-symbol").css({color: "gray"});
        }
    }
}