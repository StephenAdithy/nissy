/*  ---------------------------------------------------
    Template Name: Ogani
    Description:  Ogani eCommerce  HTML Template
    Author: Colorlib
    Author URI: https://colorlib.com
    Version: 1.0
    Created: Colorlib
---------------------------------------------------------  */

'use strict';

(function ($) {

    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");

        /*------------------
            Gallery filter
        --------------------*/
        // $('.featured__controls li').on('click', function () {
        //     $('.featured__controls li').removeClass('active');
        //     $(this).addClass('active');
        // });
        // if ($('.featured__filter').length > 0) {
        //     var containerEl = document.querySelector('.featured__filter');
        //     var mixer = mixitup(containerEl);
        //     mixer.filter('.naturalprotienpowder');
        // }
    });

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    //Humberger Menu
    $(".humberger__open").on('click', function () {
        $(".humberger__menu__wrapper").addClass("show__humberger__menu__wrapper");
        $(".humberger__menu__overlay").addClass("active");
        $("body").addClass("over_hid");
    });

    $(".humberger__menu__overlay").on('click', function () {
        $(".humberger__menu__wrapper").removeClass("show__humberger__menu__wrapper");
        $(".humberger__menu__overlay").removeClass("active");
        $("body").removeClass("over_hid");
    });

    /*------------------
		Navigation
	--------------------*/
    $(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });


    $('.hero__categories__all').on('click', function(){
        $('.hero__categories ul').slideToggle(400);
    });

   
    /*-----------------------
		Price Range Slider
	------------------------ */
    var rangeSlider = $(".price-range"),
        minamount = $("#minamount"),
        maxamount = $("#maxamount"),
        minPrice = rangeSlider.data('min'),
        maxPrice = rangeSlider.data('max');
    rangeSlider.slider({
        range: true,
        min: minPrice,
        max: maxPrice,
        values: [minPrice, maxPrice],
        slide: function (event, ui) {
            minamount.val('$' + ui.values[0]);
            maxamount.val('$' + ui.values[1]);
        }
    });
    minamount.val('$' + rangeSlider.slider("values", 0));
    maxamount.val('$' + rangeSlider.slider("values", 1));

    /*--------------------------
        Select
    ----------------------------*/
    $("select").niceSelect();

    /*------------------
		Single Product
	--------------------*/


    $(document).ready(function() {
        function initializeImageSlider() {
            var images = $('.product__details__pic__slider img');
            var currentIndex = 0;
            if (images.length > 0) {
                var firstImgUrl = images.eq(0).data('imgbigurl');
                if (firstImgUrl) {
                    $('.product__details__pic__item--large').attr('src', firstImgUrl);
                } else {
                    console.error("First image does not have data-imgbigurl attribute");
                }
            } else {
                return;
            }

            function updateLargeImage(index) {
                var imgurl = images.eq(index).data('imgbigurl');
                if (imgurl) {
                    $('.product__details__pic__item--large').attr('src', imgurl);
                } else {
                    console.error("Image URL not found for index:", index);
                }
            }

            images.on('click', function() {
                currentIndex = images.index($(this));
                updateLargeImage(currentIndex);
            });

            $('.next').on('click', function() {
                if (images.length > 0) {
                    currentIndex = (currentIndex + 1) % images.length;
                    updateLargeImage(currentIndex);
                    console.log("Next button clicked, currentIndex:", currentIndex);
                }
            });

            $('.prev').on('click', function() {
                if (images.length > 0) {
                    currentIndex = (currentIndex - 1 + images.length) % images.length;
                    updateLargeImage(currentIndex);
                    console.log("Previous button clicked, currentIndex:", currentIndex);
                }
            });
        }

        initializeImageSlider();

        var targetNode = document.querySelector('.product__details__pic__slider');
        var observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.addedNodes.length > 0) {
                    initializeImageSlider(); 
                }
            });
        });

        var config = { childList: true };
        observer.observe(targetNode, config);
    });
    
    
    
    // $('.product__details__pic__slider img').on('click', function () {

    //     var imgurl = $(this).data('imgbigurl');
    //     var bigImg = $('.product__details__pic__item--large').attr('src');
    //     if (imgurl != bigImg) {
    //         $('.product__details__pic__item--large').attr({
    //             src: imgurl
    //         });
    //     }
    // });

    /*-------------------
		Quantity change
	--------------------- */
    // var proQty = $('.pro-qty');
    // proQty.prepend('<span class="dec qtybtn">-</span>');
    // proQty.append('<span class="inc qtybtn">+</span>');
    // proQty.on('click', '.qtybtn', function () {
    //     var $button = $(this);
    //     var oldValue = $button.parent().find('input').val();
    //     if ($button.hasClass('inc')) {
    //         var newVal = parseFloat(oldValue) + 1;
    //     } else {
    //         // Don't allow decrementing below zero
    //         if (oldValue > 0) {
    //             var newVal = parseFloat(oldValue) - 1;
    //         } else {
    //             newVal = 0;
    //         }
    //     }
    //     $button.parent().find('input').val(newVal);
    // });

})(jQuery);