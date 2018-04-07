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
        for(var j in urls[i].list){
            var li = document.createElement("li");
            var a = document.createElement("a");
            a.innerHTML=urls[i].list[j].name;
            a.href=urls[i].list[j].url;
            li.appendChild(a);
            ul.appendChild(li);
        }
    }
}