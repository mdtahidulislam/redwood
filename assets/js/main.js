(function ($) {
	"use strict";
    /*================================
        mobile menu
    =================================*/
    $('.toggle-menu').click(function(){
        if ($('.menu-close').hasClass('d-none')) {
            $('.menu-close').removeClass('d-none').addClass('d-block');  
            $('.menu-open').addClass('d-none');  
        } else {
            $('.menu-open').removeClass('d-none').addClass('d-block');  
            $('.menu-close').addClass('d-none');  
        }
        $('.mobile-menu').slideToggle('linear');
    })
    
})(jQuery);