$(function() {
    $('a.navbar-brand, .navbar li a').click(function() {
        $('html, body').animate({
            scrollTop: $($(this).attr("href")).offset().top
        });
    });
});