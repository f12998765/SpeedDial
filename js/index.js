$(function(){

    $.getJSON("json/url.json",function(data){
        var gettpl = $("#demo").html();
        laytpl(gettpl).render(data, function(html){$('#view').html(html);})
    })
    .fail(function(){
            $.getJSON("http://ob4kd8p3g.bkt.clouddn.com/url.json",function(data){
                var gettpl = $('#demo').html();
                laytpl(gettpl).render(data, function(html){ $('#view').html(html);})
            })
            .done(function(){
              alert("数据源 : 七牛");
            })
            .fail(function(){
                alert("加载失败!")
            });
        })
    });
