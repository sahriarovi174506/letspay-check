(function ($) {
    "use strict";

    // ------- Prealoder ------
    $(window).on('load', function () {
        $("#preloader").delay(300).fadeOut("slow");
    });


    $(document).ready(function () {

        // ats_sldier
        $('.header_slider').owlCarousel({
            loop: false,
            items: 3,
            nav: false,
            dots: true,
            autoWidth: false,
            smartSpeed: 500,
            responsive: {
                0: {
                    items: 2,
                    margin: 20,
                },
                766: {
                    items: 2,
                },
                992: {
                    items: 3,
                }
            }
        });


    });

})(jQuery);