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


onload = function () {
    document.getElementById("sub").onclick = run;
    document.getElementById("text").onkeypress = function (e) {
        if(e.which==13) run();
    }
    var ul = document.getElementById("ul");
    for(var i in urls){
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.innerHTML=urls[i].name;
        a.href=urls[i].url;
        li.appendChild(a);
        ul.appendChild(li);
    }
    var theme = localStorage.getItem("theme");
    if(theme==""||theme==undefined)
        localStorage.setItem("theme",1);
    change_theme(false);
}

var classList = ["b","w"];

function change_theme(flag){
    var n = localStorage.getItem("theme");
    if(flag){
        n++;n%=2;
        localStorage.setItem("theme",n);
    }
    var con  = document.getElementById("con");
    con.className="con_"+classList[n];
    var icon = document.getElementById("icon");
    icon.className="icon_"+classList[n];
    var theme = document.getElementById("theme");
    theme.className="theme_"+classList[n];
}