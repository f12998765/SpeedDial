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
}