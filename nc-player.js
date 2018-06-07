/*
* JS
* @bren00x
* NeatClip Player v1.0.0
* Built on Plyr.io v2.0.7
*/
var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = "https://cdn.jsdelivr.net/gh/bren00x/NeatClip-Player@1.0.0/nc-player.css";
    head.appendChild(link);
    link.onload = function() { start() } }
    

var code,embed_link,clip_link,html="";
if (/embed/.test(self.location.href)){
    embed_link = self.location.href;
	code = embed_link.substring(embed_link.lastIndexOf('/') + 1);
	clip_link = "https://neatclip.com/clip/"+code;
	
	html = `<a target='_blank' href='`+clip_link+`' style='color:#fff;text-decoration:none;border-bottom:0;'><span class='ncl'><img src='https://neatclip.com/img/logo_128x128.png' height='16px' style='height: 24px;position: relative;top: 2px;vertical-align: sub;'>NeatClip</span></a>`;
console.log(code,embed_link,clip_link,html);
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
   
    "<button type='button' data-plyr='fullscreen'>",
        "<svg class='icon--exit-fullscreen'><use xlink:href='#plyr-exit-fullscreen'></use></svg>",
        "<svg><use xlink:href='#plyr-enter-fullscreen'></use></svg>",
        "<span class='plyr__sr-only'>Toggle Fullscreen</span>",
    "</button>",
                html,
"</div>"].join("");

(function() { 
  var instances = plyr.setup({
      html: controls,
    autoplay:true,
    loop:{active:true},
    keyboard:{ focused: true, global: true }
  });
})();
