$(function () {
    $('#js-open').on('click', function() {
        $('#sp-nav-new').addClass('open');
        setTimeout(function() {
            $('.bg-thin-grey').fadeIn('slow');
        }, 400);
    })

    $('#js-close').on('click', function() {
        $('#sp-nav-new').removeClass('open');
        setTimeout(function() {
            $('.bg-thin-grey').fadeOut('slow')
        }, 400);
    });

    // ページ内リンクのスムーススクロール
    $('.anav a').on('click', function(){
        // クリックされたid名を取得
        var getId = $(this).attr('href')
        var targetTop = $(getId).offset().top;
        $('html,body').animate({
            scrollTop: targetTop
        }, 500);
        return false;
    });


    // ページ最上部へ戻るボタン
    var pagetop = $('#page_top');    
    pagetop.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 150) {  
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });
    pagetop.on('click', function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500); 
        return false;
    });

    // callバック用の関数
    function addActiveTarget(callback) {
        $('.Animation__target').addClass('active');
        callback;
    }
    function addActiveLogo(callback) {
        setTimeout(function(){
            $('.Animation__logo').addClass('active');
        }, 3000);
        callback;
    }
    function fadeOutLogo() {
        setTimeout(function(){
            $('#logo').fadeOut(2000);
        }, 4);
    }
    window.onload = function() {
        // 次の処理を実行する時は確実に前の処理が終わったらにする=callback関数
        addActiveTarget(addActiveLogo(fadeOutLogo()));
    }

    AOS.init();
});