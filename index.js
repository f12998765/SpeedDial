$(function(){

     var isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i) ? true : false;
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i) ? true : false;
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true : false;
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i) ? true : false;
        },
        any: function () {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Windows());
        }
    };

    $.getJSON("https://ob4kd8p3g.bkt.clouddn.com/url.json",function(data){
        var gettpl = $("#demo").html();
        laytpl(gettpl).render(data, function(html){$('#view').html(html);})
    })
    .fail(function(){
            $.getJSON("/url.json",function(data){
                var gettpl = $('#demo').html();
                laytpl(gettpl).render(data, function(html){ $('#view').html(html);})
            })
            .fail(function(){
                alert("加载失败!")
            });
        })
    .always(function(){ 
        $(".block").addClass('color');
        if (isMobile.any()) { 
            $(".hh").css('width','100%');
            $(".hi").removeClass('tit');
            $(".block").removeClass('color');
            $(".hh").addClass('color');
        } 
    });

    });
