// ==UserScript==
// @name         FBOT (LegendMod Version)
// @namespace    Legend Express Agario Mod
// @version      1.7
// @description  Agario Mod - Legend,Ogario,Kitty,Old Skins,Animated Skins,Language Packs,Manual User Scripts,Chat,60++ Macros/Hotkeys(Tricksplit,Doublesplit,Quick Feeding,Popsplit,Auto Coins,Freeze Cell Macro,Auto respawn)
// @homepage     https://www.legendmod.ml
// @author       Jimboy3100
// @license      MIT
// @icon         https://legendmod.ml/banners/CropedImage128.gif
// @match        https://agar.io/*
// @match        https://play.google.com/*
// @downloadURL  https://legendmod.ml/LMexpress/LMexpress.user.js
// @updateURL    https://legendmod.ml/LMexpress/LMexpress.user.js
// @run-at       document-start
// @grant        GM_xmlhttpRequest
// @connect      legendmod.ml
// ==/UserScript==

// Legend Mod by Jimboy3100
/*MIT License*/

// Check location
if (location.host === "agar.io" && location.pathname === "/") {
var url = window.location.href;
localStorage.setItem("url", url);
    location.href = "https://agar.io/legendmod" + location.hash;
    return;
}
var modVersion = GM_info.script.version;
// Inject Legend
function inject(page) {
    var page = page.replace("</body>", "<script>init('" + modVersion + "');</script>" + "</body>");
    return page;
}
document.documentElement.innerHTML = "";

var LMdetails = GM_xmlhttpRequest({
    method: "GET",
    url: "https://legendmod.ml/LMexpress/LMexpress.html",
	synchronous: false,
    onload: function(legend) {
        var doc = inject(legend.responseText);
        document.open();
       document.write(doc);
        setTimeout(function() {
            window.history.pushState(null, null, "/");
        }, 2000);
        document.close();
    }
});

if (location.host == "play.google.com") {
    window.close();
}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}