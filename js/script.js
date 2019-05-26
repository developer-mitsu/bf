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
    })
});