$(function(){

    $.getJSON("/url.json",function(data){
        var gettpl = $("#demo").html();
        laytpl(gettpl).render(data, function(html){$('#view').html(html);})
    })
    .fail(function(){
            $.getJSON("http://ob4kd8p3g.bkt.clouddn.com/url.json",function(data){
                var gettpl = $('#demo').html();
                laytpl(gettpl).render(data, function(html){ $('#view').html(html);})
            })
            .fail(function(){
                alert("加载失败!")
            });
        })

    });
