$(function()
{
    'use strict';
    var allheigt = $(window).height();
    var upperH = $('.upper-bar').innerHeight();
    var navbarH = $('.navbar').innerHeight();
    $('.slider,.carousel-item').height(allheigt - (upperH + navbarH));
});
