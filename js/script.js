$(function() {
  $("#js-open").on("click", function() {
    $("#sp-nav-new").addClass("open");
    setTimeout(function() {
      $(".bg-thin-grey").fadeIn("slow");
    }, 400);
  });

  $("#js-close").on("click", function() {
    $("#sp-nav-new").removeClass("open");
    setTimeout(function() {
      $(".bg-thin-grey").fadeOut("slow");
    }, 400);
  });

  // ページ内リンクのスムーススクロール
  $(".anav a").on("click", function() {
    // クリックされたid名を取得
    var getId = $(this).attr("href");
    var targetTop = $(getId).offset().top;
    $("html,body").animate(
      {
        scrollTop: targetTop
      },
      500
    );
    return false;
  });

  // ページ最上部へ戻るボタン
  var pagetop = $("#page_top");
  pagetop.hide();
  $(window).scroll(function() {
    if ($(this).scrollTop() > 150) {
      pagetop.fadeIn();
    } else {
      pagetop.fadeOut();
    }
  });
  pagetop.on("click", function() {
    $("body,html").animate(
      {
        scrollTop: 0
      },
      500
    );
    return false;
  });

  window.onload = function() {
    $(".Animation__target").addClass("active");
    setTimeout(function() {
      $(".Animation__logo").addClass("active");
    }, 3000);
    setTimeout(function() {
      $("#logo").fadeOut(2000);
    }, 0);
  };

  /* スライドショー */
  $slideTime = 8000;
  $nowImage = 0;
  $nextImage = 1;
  setInterval(function(){
    $numImage = $('.default').length;
    $('.default').eq($nowImage).removeClass("appear");
    $('.default').eq($nextImage).addClass("appear");
    $nowImage = $nowImage != $numImage - 1 ? $nowImage + 1 : 0;
    $nextImage = $nowImage + 1 == $numImage ? 0 : $nowImage + 1;

    console.log('次はindex' + $nowImage + 'のimage画像です')
  },$slideTime)

  AOS.init();
});

// window.onload = function() {
//     setTimeout(function(){
//         $('#logo').fadeOut(2000);
//     }, 4000)
//     // $('#logo').fadeOut('slow');
// }
