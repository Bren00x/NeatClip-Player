/*
     * JS
     * @bren00x
     * NeatClip Player v1.0.6
     * Built on Plyr.io v2.0.7
     */
    var head = document.getElementsByTagName('head')[0];


    var plyr_style = document.createElement('link');
    plyr_style.rel = 'stylesheet';
    plyr_style.type = 'text/css';
    plyr_style.href = "https://cdn.plyr.io/2.0.7/plyr.css";
    head.appendChild(plyr_style);

    var custom_style = document.createElement('link');
    custom_style.rel = 'stylesheet';
    custom_style.type = 'text/css';
    custom_style.href = "https://cdn.jsdelivr.net/gh/bren00x/NeatClip-Player@1.0.4/nc-player.css";
    head.appendChild(custom_style);

    

    var plyr_script = document.createElement('script');
    plyr_script.setAttribute('src', "https://cdn.plyr.io/2.0.7/plyr.js");
    plyr_script.onload = start;
    head.appendChild(plyr_script);



    custom_style.onload = function() { /*start()*/ }


    var code, embed_link, clip_link, html = "";
    if (window.location.href.indexOf("/embed") > -1) {
        embed_link = self.location.href;
        code = embed_link.substring(embed_link.lastIndexOf('/') + 1);
        clip_link = "https://neatclip.com/clip/" + code;
        document.querySelector(".NCPlayer").className += " embed"
        html = `<a target='_blank' href='` + clip_link + `' style='color:#fff;text-decoration:none;border-bottom:0;'><span class='ncl'><img src='https://neatclip.com/img/logo_128x128.png' height='16px' style='height: 24px;position: relative;top: 2px;vertical-align: sub;'>NeatClip</span></a>`;
        console.log(code, embed_link, clip_link, html);
    }

    var controls = [
	"<div class='plyr__controls'>",
    "<button type='button' data-plyr='play'>",
        "<svg><use xlink:href='#plyr-play'></use></svg>",
        "<span class='plyr__sr-only'>Play</span>",
    "</button>",
    "<button type='button' data-plyr='pause'>",
        "<svg><use xlink:href='#plyr-pause'></use></svg>",
        "<span class='plyr__sr-only'>Pause</span>",
    "</button>",
    "<span class='plyr__time'>",
        "<span class='plyr__sr-only'>Current time</span>",
        "<span class='plyr__time--current'>00:00</span>",
    "</span>",
    "<span class='plyr__progress'>",
        "<label for='seek{id}' class='plyr__sr-only'>Seek</label>",
        "<input id='seek{id}' class='plyr__progress--seek' type='range' min='0' max='100' step='0.1' value='0' data-plyr='seek'>",
        "<progress class='plyr__progress--played' max='100' value='0' role='presentation'></progress>",
        "<progress class='plyr__progress--buffer' max='100' value='0'>",
            "<span>0</span>% buffered",
        "</progress>",
        "<span class='plyr__tooltip'>00:00</span>",
    "</span>",
    "<span class='plyr__time'>",
        "<span class='plyr__sr-only'>Duration</span>",
        "<span class='plyr__time--duration'>00:00</span>",
    "</span>",
     "<button class='volume' type='button' data-plyr='mute'>",
        "<svg class='icon--muted'><use xlink:href='#plyr-muted'></use></svg>",
        "<svg><use xlink:href='#plyr-volume'></use></svg>",
        "<span class='plyr__sr-only'>Toggle Mute</span>",
    "</button>",
    "<span class='plyr__volume'>",
        "<label for='volume{id}' class='plyr__sr-only'>Volume</label>",
        "<input id='volume{id}' class='plyr__volume--input' type='range' min='0' max='10' value='10' data-plyr='volume'>",
        "<progress class='plyr__volume--display' max='10' value='0' role='presentation'></progress>",
    "</span>",
    "<button type='button' data-plyr='fullscreen'>",
        "<svg class='icon--exit-fullscreen'><use xlink:href='#plyr-exit-fullscreen'></use></svg>",
        "<svg><use xlink:href='#plyr-enter-fullscreen'></use></svg>",
        "<span class='plyr__sr-only'>Toggle Fullscreen</span>",
    "</button>",
        html,
        "</div>"
    ].join("");

    function start() {
        (function() {
            var instances = plyr.setup({
                html: controls,
                autoplay: true,
                loop: {
                    active: true
                },
                keyboard: {
                    focused: true,
                    global: true
                }
            });
        })();

    }
