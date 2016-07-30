$(function(){
    $.getJSON("https://ob4kd8p3g.bkt.clouddn.com/url.json",function(data){
        var gettpl = $('#demo').html();
        laytpl(gettpl).render(data, function(html){
            $('#view').html(html);
        });
    }
);})