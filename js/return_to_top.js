if ($('#back-to-top').length) {
    var scrollTrigger = 650, // px
        backToTop = function () {
			"use strict";
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
		"use strict";
        backToTop();
    });
    $('#back-to-top').on('click', function (e) {
		"use strict";
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 300 //距離頁首
        }, 700);
    });
}