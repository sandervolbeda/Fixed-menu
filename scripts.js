$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 36) {
        $('.menu-container').addClass('fixed');
    } else {
        $('.menu-container').removeClass('fixed');
    }
});