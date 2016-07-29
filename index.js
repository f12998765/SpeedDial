$(function(){
    $.getJSON("SpeedDial/url.json",function(data){
        var gettpl = $('#demo').html();
laytpl(gettpl).render(data, function(html){
    $('#view').html(html);
});
    }
        );})