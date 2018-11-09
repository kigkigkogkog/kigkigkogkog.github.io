$(function () {
    $('#thanks').show().delay(2500).fadeOut();
});

window.onload = function () {
    var originTitle = document.title;
    var titleTime;
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
}