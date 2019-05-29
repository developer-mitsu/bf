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


    window.onload = function() {
        $('.animation-target').addClass('active');
        setTimeout(function(){
            $('.fadeIn-logo').fadeIn('slow');
        }, 3000)
    }

    setTimeout(function(){
        $('#logo').fadeOut('slow');
    }, 4000)

    AOS.init();
});

// window.onload = function() {
//     $('#logo').fadeOut('slow');
// }