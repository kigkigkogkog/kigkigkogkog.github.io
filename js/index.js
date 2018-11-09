window.onload = function () {
    var originTitle = document.title;
    var titleTime;
    var date = new Date();
    var second = date.getSeconds();
    document.addEventListener('visibilitychange', function () {
        if (document.hidden) {
            $('[rel="shortcut icon"]').attr('href', './static/gou.png');
            document.title = '(╯°□°)╯︵ ┻━┻,404 NOT FOUND';
            clearTimeout(titleTime);
        } else {
            $('[rel="shortcut icon"]').attr('href', './static/github.png');
            document.title = '( • ̀ω•́ )✧,又好了';
            titleTime = setTimeout(function () {
                document.title = originTitle;
            }, 2000);
        }
    })

    if(second>-1 && second<20){
        $("#photo").attr("src","./static/白2.jpg");
        $("#photo").css("border","1px solid black");
    }else if(second>19 && second<40){
        $("#photo").attr("src","./static/蓝2.jpg");
    }else{
        $("#photo").attr("src","./static/红2.jpg");
    }

    document.addEventListener("scroll",function(e) {
        if(e.srcElement.scrollingElement.scrollTop > 200 ){
            $('#back-to-top').css("display","block");
        }else{
            $('#back-to-top').css("display","none");
        }
    })

    $('#thanks').show().delay(2500).fadeOut();

    $('#back-to-top').click(function(){
        window.scrollTo(0,0);
    })

}
