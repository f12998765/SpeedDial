onload = function init() {
  if (IsPC()) {
    if (navigator.serviceWorker != null) {
      navigator.serviceWorker.register('sw.js')
        .then(function (registration) {
          console.log('Registered events at scope: ', registration.scope);
        }).catch(err => {
          console.log("SW registration failed: ", err);
        })
    }
    var theme = localStorage.getItem("theme");
    if (theme == "" || theme == undefined)
      localStorage.setItem("theme", 1);
    change_theme(false,false);
    document.getElementById("sub").onclick = run;
    document.getElementById("text").onkeypress = function (e) {
      if (e.which == 13) run();
    }
    var ul = document.getElementById("ul");
    for (var i in urls) {
      var li = document.createElement("li");
      var a = document.createElement("a");
      a.innerHTML = urls[i].name;
      a.href = urls[i].url;
      li.appendChild(a);
      ul.appendChild(li);
    }
  } else {
    var ul = document.getElementById("ul");
    ul.innerHTML = "";
    for (var i in urls_m) {
      var a = document.createElement("a");
      var li = document.createElement("li");
      li.style.background = "url(" + urls_m[i].src + ") no-repeat center center";
      li.style["background-size"] = "100% 100%";
      a.href = urls_m[i].url;
      a.appendChild(li);
      ul.appendChild(a);
    }
    change_theme(false);
  }
}

var IsPC = function () {
  var ua = navigator.userAgent;
  var isWindowsPhone = /(?:Windows Phone)/.test(ua);
  var isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone;
  var isAndroid = /(?:Android)/.test(ua);
  var isFireFox = /(?:Firefox)/.test(ua);
  var isChrome = /(?:Chrome|CriOS)/.test(ua);
  var isTablet = /(?:iPad|PlayBook)/.test(ua) || (isAndroid && !/(?:Mobile)/.test(ua)) || (isFireFox && /(?:Tablet)/.test(ua));
  var isPhone = /(?:iPhone)/.test(ua) && !isTablet;
  var isPc = !isPhone && !isAndroid && !isSymbian;
  return isPc;
}
function run() {
  var text = document.getElementById("text").value;
  var so = "https://www.google.com.hk/search?q=";
  if (text != "") {
    if (text.startsWith("b:")) {
      text = text.substring(2);
      so = "https://www.baidu.com/s?wd="
    }
    window.location.href = so + text;
  }
}

var themes = ["light", "night", "nyan","mobile"];
var colors = ['#FFFFFF', '#000000', '#194894','#FFFFFF'];
function change_theme(flag) {
  if(IsPC()){
    var n = localStorage.getItem("theme");
    if (flag) {
      n++; n %= themes.length-1;
      localStorage.setItem("theme", n);
    }
  }else{
    n=themes.length-1;
  }
  var css = document.getElementById("css");
  css.href = "theme/" + themes[n] + "/css/style.css";
  var color = document.getElementById("color");
  color.content = colors[n];
}
