"use strict";
//Wrapping all JavaScript code into a IIFE function for prevent global variables creation
(function ($) {

    var $body = $('body');
    var $window = $(window);







    //function that initiating template plugins on window.load event
    function windowLoadInit() {
        if ($().flexslider) {
            var $introSlider = $(".page_slider .flexslider");
            $introSlider.each(function (index) {
                var $currentSlider = $(this);
                var data = $currentSlider.data();
                var nav = (data.nav !== 'undefined') ? data.nav : true;
                var dots = (data.dots !== 'undefined') ? data.dots : true;
                var speed = (data.speed !== 'undefined') ? data.speed : 7000;

                $currentSlider.flexslider({
                    video: true,
                    auto: true,
                    autoPlay: true,
                    animation: "fade",
                    pauseOnHover: true,
                    useCSS: true,
                    controlNav: dots,
                    directionNav: nav,
                    prevText: "",
                    nextText: "",
                    smoothHeight: false,
                    slideshowSpeed: speed,
                    animationSpeed: 600,
                    start: function (slider) {
                        slider.find('.intro_layers').children().css({ 'visibility': 'hidden' });
                        slider.find('.flex-active-slide .intro_layers').children().each(function (index) {
                            var self = $(this);
                            var animationClass = !self.data('animation') ? 'fadeInRight' : self.data('animation');
                            setTimeout(function () {
                                self.addClass("animated " + animationClass);
                            }, index * 250);
                        });
                    },
                    after: function (slider) {
                        slider.find('.flex-active-slide .intro_layers').children().each(function (index) {
                            var self = $(this);
                            var animationClass = !self.data('animation') ? 'fadeInRight' : self.data('animation');
                            setTimeout(function () {
                                self.addClass("animated " + animationClass);
                            }, index * 250);
                        });
                    },
                    end: function (slider) {
                        slider.find('.intro_layers').children().each(function () {
                            var self = $(this);
                            var animationClass = !self.data('animation') ? 'fadeInRight' : self.data('animation');
                            self.removeClass('animated ' + animationClass).css({ 'visibility': 'hidden' });
                            // $(this).attr('class', '');
                        });
                    },

                })
                //wrapping nav with container - uncomment if need
                // .find('.flex-control-nav')
                // .wrap('<div class="container nav-container"/>')
            }); //.page_slider flex slider

            $(".flexslider").each(function (index) {
                var $currentSlider = $(this);
                //exit if intro slider already activated 
                if ($currentSlider.find('.flex-active-slide').length) {
                    return;
                }
                $currentSlider.flexslider({
                    animation: "fade",
                    useCSS: true,
                    controlNav: true,
                    directionNav: false,
                    prevText: "",
                    nextText: "",
                    autoplay: true,
                    loop: true,
                    smoothHeight: false,
                    slideshowSpeed: 500000,
                    animationSpeed: 800,
                })
            });
        }
    }
    $window.on('load', function () {
        windowLoadInit();
    })
})(jQuery);

