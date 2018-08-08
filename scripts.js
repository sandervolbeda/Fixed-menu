$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 0  ) { //The height from which the class 'fixed' should be added
        $('.container').addClass('fixed'); // Add class 'fixed'
    } else {
        $('.container').removeClass('fixed'); // Remove class 'fixed'
    }
});