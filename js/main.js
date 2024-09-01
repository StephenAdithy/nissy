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
                }
            });
    
            $('.prev').on('click', function() {
                if (images.length > 0) {
                    currentIndex = (currentIndex - 1 + images.length) % images.length;
                    updateLargeImage(currentIndex);
                }
            });
        }
    
        function setupMutationObserver() {
            var targetNode = document.querySelector('.product__details__pic__slider');
    
            if (targetNode) {
                var observer = new MutationObserver(function(mutations) {
                    mutations.forEach(function(mutation) {
                        if (mutation.addedNodes.length > 0) {
                            initializeImageSlider(); 
                        }
                    });
                });
    
                var config = { childList: true, subtree: true };
                observer.observe(targetNode, config);
            } else {
                console.error('Target node not found for MutationObserver.');
            }
        }
            initializeImageSlider();
        setupMutationObserver();
    });
    

    // $(document).ready(function() {
    //     function initializeImageSlider() {
    //         var images = $('.product__details__pic__slider img');
    //         var currentIndex = 0;
    //         if (images.length > 0) {
    //             var firstImgUrl = images.eq(0).data('imgbigurl');
    //             if (firstImgUrl) {
    //                 $('.product__details__pic__item--large').attr('src', firstImgUrl);
    //             } else {
    //                 console.error("First image does not have data-imgbigurl attribute");
    //             }
    //         } else {
    //             return;
    //         }

    //         function updateLargeImage(index) {
    //             var imgurl = images.eq(index).data('imgbigurl');
    //             if (imgurl) {
    //                 $('.product__details__pic__item--large').attr('src', imgurl);
    //             } else {
    //                 console.error("Image URL not found for index:", index);
    //             }
    //         }

    //         images.on('click', function() {
    //             currentIndex = images.index($(this));
    //             updateLargeImage(currentIndex);
    //         });

    //         $('.next').on('click', function() {
    //             if (images.length > 0) {
    //                 currentIndex = (currentIndex + 1) % images.length;
    //                 updateLargeImage(currentIndex);
    //                 console.log("Next button clicked, currentIndex:", currentIndex);
    //             }
    //         });

    //         $('.prev').on('click', function() {
    //             if (images.length > 0) {
    //                 currentIndex = (currentIndex - 1 + images.length) % images.length;
    //                 updateLargeImage(currentIndex);
    //                 console.log("Previous button clicked, currentIndex:", currentIndex);
    //             }
    //         });
    //     }

    //     initializeImageSlider();

    //     var targetNode = document.querySelector('.product__details__pic__slider');
    //     var observer = new MutationObserver(function(mutations) {
    //         mutations.forEach(function(mutation) {
    //             if (mutation.addedNodes.length > 0) {
    //                 initializeImageSlider(); 
    //             }
    //         });
    //     });

    //     var config = { childList: true };
    //     observer.observe(targetNode, config);
    // });
    
    $('#exampleModalCenter').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget);
        var title = button.data('title');
        var content = button.data('content');

        content = content.replace("1. Shipping Locations", "<strong>1. Shipping Locations</strong>");
        content = content.replace("2. Delivery Timeframes", "<strong>2. Delivery Timeframes</strong>");
        content = content.replace("3. Shipping Costs", "<strong>3. Shipping Costs</strong>");
        content = content.replace("4. Order Tracking", "<strong>4. Order Tracking</strong>");
        content = content.replace("5. Delivery Instructions", "<strong>5. Delivery Instructions</strong>");
        content = content.replace("6. International Shipping", "<strong>6. International Shipping</strong>");
        content = content.replace("7. Failed Deliveries and Returns", "<strong>7. Failed Deliveries and Returns</strong>");
        content = content.replace("8. Damaged or Missing Items", "<strong>8. Damaged or Missing Items</strong>");
        content = content.replace("9. Contact Us", "<strong>9. Contact Us</strong>");
        content = content.replace("Email:", "<strong>Email:</strong>");
        content = content.replace("Phone:", "<strong>Phone:</strong>");
        content = content.replace("Address:", "<strong>Address:</strong>");
        content = content.replace("1. Acceptance of Terms", "<strong>1. Acceptance of Terms</strong>");
        content = content.replace("2. Use of the Site", "<strong>2. Use of the Site</strong>");
        content = content.replace("3. Product Information", "<strong>3. Product Information</strong>");
        content = content.replace("4. Orders and Payment", "<strong>4. Orders and Payment</strong>");
        content = content.replace("5. Shipping and Delivery", "<strong>5. Shipping and Delivery</strong>");
        content = content.replace("6. Returns and Refunds", "<strong>6. Returns and Refunds</strong>");
        content = content.replace("7. Intellectual Property", "<strong>7. Intellectual Property</strong>");
        content = content.replace("8. Limitation of Liability", "<strong>8. Limitation of Liability</strong>");
        content = content.replace("9. Indemnification", "<strong>9. Indemnification</strong>");
        content = content.replace("10. Changes to Terms", "<strong>10. Changes to Terms</strong>");
        content = content.replace("11. Governing Law", "<strong>11. Governing Law</strong>");
        content = content.replace("12. Contact Us", "<strong>12. Contact Us</strong>");
        content = content.replace("6. Your Rights", "<strong>6. Your Rights</strong>");
        content = content.replace("You have the right to:", "<strong>You have the right to:</strong>");
        content = content.replace("7. Cookies", "<strong>7. Cookies</strong>");
        content = content.replace("8. Changes to This Privacy Policy", "<strong>8. Changes to This Privacy Policy   </strong>");
        content = content.replace("4. Sharing Your Information", "<strong>4. Sharing Your Information</strong>");
        content = content.replace("5. Data Security", "<strong>5. Data Security</strong>");
        content = content.replace("3. How We Use Your Information", "<strong>3. How We Use Your Information</strong>");
        content = content.replace("1. Introduction", "<strong>1. Introduction</strong>");
        content = content.replace("2. Information We Collect", "<strong>2. Information We Collect</strong>");
        content = content.replace("Nissy Natural Food Manufacturing Company", "<strong>Nissy Natural Food Manufacturing Company</strong>");

        var modal = $(this);
        modal.find('.modal-title').text(title);
        modal.find('.modal-body').html(content.replace(/\n/g, '<br>'));
    });
    document.addEventListener('DOMContentLoaded', function () {
        const links = document.querySelectorAll('#footerdynamiclinks a[data-title]');

        links.forEach(link => {
            const title = link.getAttribute('data-title');
            let content = '';

            switch (title) {
                case 'Delivery Information':
                    content = 'Delivery Information At Nissy Natural Food Manufacturing Company, we are committed to ensuring that your orders reach you promptly and in perfect condition. Please review the following information regarding our delivery process.\n\n1. Shipping Locations\n\nWe currently offer delivery to the following locations:\n- [Tamilnadu and all states of India]\n\nIf your location is not listed, please contact us at [nissyhomemade@gmail.com] to inquire about potential delivery options.\n\n2. Delivery Timeframes\n\n- Processing Time: Orders are typically processed within [2 to 3] business days after payment confirmation.\n- Standard Shipping: Delivery times range from [2 to 3] business days, depending on your location.\n- Express Shipping: For faster delivery, we offer express shipping with delivery within [2] business days. Additional charges may apply.\n\nPlease note that delivery times may vary due to factors beyond our control, such as carrier delays, customs clearance, or public holidays.\n\n3. Shipping Costs\n\nShipping costs are calculated based on the weight of your order and the delivery location. You will be provided with the total shipping cost during the checkout process.\n\n- Standard Shipping: [Insert cost details]\n- Express Shipping: [Insert cost details]\n\n4. Order Tracking\n\nOnce your order has been shipped, you will receive a confirmation email with a tracking number. You can use this number to track the status of your delivery on the carrier’s website.\n\n5. Delivery Instructions\n\nIf you have specific delivery instructions, such as leaving the package with a neighbor or in a secure location, please include these details in the "Order Notes" section at checkout.\n\n6. International Shipping\n\nFor orders outside of [India], please be aware that international shipping times may be longer due to customs processing. Any customs duties, taxes, or fees incurred upon delivery are the responsibility of the customer.\n\n7. Failed Deliveries and Returns\n\nIf a delivery attempt is unsuccessful due to incorrect address information provided by the customer or if the package is not collected from a local pick-up point, the order may be returned to us. In such cases, additional shipping charges may apply for re-delivery.\n\n8. Damaged or Missing Items\n\nIn the unlikely event that your order arrives damaged or items are missing, please contact us immediately at [nissyhomemade@gmail.com] or [+91 8610846675]. We will work to resolve the issue as quickly as possible.\n\n9. Contact Us\n\nIf you have any questions or need further assistance with your delivery, please do not hesitate to contact us:\n\nNissy Natural Food Manufacturing Company\nEmail: nissyhomemade@gmail.com \nPhone: +91 8610846675 \nAddress: 155 ZYON COTTAGE, KOTTAKULAM - 627805, TENKASI DIST';
                    break;
                case 'Privacy Policy':
                    content = 'Effective Date: [Insert Date]\n\n1. Introduction\n\nWelcome to Nissy Natural Food Manufacturing Company. We value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, disclose, and protect your information when you visit our website [insert website URL].\n\n2. Information We Collect\n\nWe may collect the following types of information:\n- Personal Information: Name, email address, phone number, and other contact details you provide when you sign up for our services or make a purchase.\n- Usage Data: Information about how you interact with our website, including IP address, browser type, pages visited, and time spent on the site.\n- Cookies and Tracking Technologies: We use cookies to enhance your experience and track website usage.\n\n3. How We Use Your Information\n\nWe use the collected information to:\n- Process and fulfill your orders.\n- Communicate with you regarding your orders, inquiries, or promotional offers.\n- Improve our website and services.\n- Analyze website usage to enhance user experience.\n- Comply with legal obligations and enforce our terms and conditions.\n\n4. Sharing Your Information\n\nWe do not sell or rent your personal information to third parties. We may share your information with:\n- Service Providers: Third-party vendors who assist in processing payments, delivering orders, or providing customer support.\n- Legal Obligations: When required by law or to protect the rights, property, or safety of our company, customers, or others.\n\n5. Data Security\n\nWe implement appropriate technical and organizational measures to protect your information from unauthorized access, disclosure, or misuse. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.\n\n6. Your Rights\n\nYou have the right to:\n- Access and update your personal information.\n- Request deletion of your personal information.\n- Opt-out of marketing communications.\n- Object to the processing of your information in certain circumstances.\n\nTo exercise these rights, please contact us at [nissyhomemade@gmail.com].\n\n7. Cookies\n\nOur website uses cookies to improve user experience. You can manage your cookie preferences through your browser settings. Please note that disabling cookies may affect your ability to use certain features of our website.\n\n8. Changes to This Privacy Policy\n\nWe may update this Privacy Policy from time to time. Any changes will be posted on this page, and the "Effective Date" will be updated accordingly. We encourage you to review this Privacy Policy periodically.\n\n9. Contact Us\n\nIf you have any questions or concerns about this Privacy Policy, please contact us at:\n\nNissy Natural Food Manufacturing Company\nEmail: nissyhomemade@gmail.com\nPhone: +91 8610846675\nAddress: 155 ZYON COTTAGE, KOTTAKULAM - 627805, TENKASI DIST';
                    break;
                case 'Who We Are':
                    content = 'Welcome to Nissy Natural Food Manufacturing Company! We are dedicated to providing the highest quality natural food products.\n\n Our commitment to excellence is reflected in every product we offer, ensuring that our customers enjoy the best of nature\'s bounty. Our mission is to promote healthy living through nutritious, natural foods that are free from artificial additives and preservatives.\n\n We are proud to be a trusted name in the natural food industry, with a reputation built on quality, integrity, and customer satisfaction.\n\n Thank you for choosing Nissy Natural Food Manufacturing Company as your partner in healthy living.';
                    break;
                case 'Terms and Conditions':
                    content = 'Effective Date: [Insert Date]\n\n1. Introduction\n\nThese Terms and Conditions govern your use of our website and services. By accessing our website, you agree to comply with these terms.\n\n2. Use of Services\n\nYou agree to use our services only for lawful purposes and in a manner that does not infringe the rights of, or restrict the use of our services by, any third party.\n\n3. Product Information\n\nWe strive to provide accurate information about our products. However, we do not warrant that product descriptions or other content is accurate, complete, or error-free.\n\n4. Orders and Payment\n\nBy placing an order, you agree to purchase the selected products. All orders are subject to availability and acceptance. Payment must be made at the time of order.\n\n5. Limitation of Liability\n\nWe are not liable for any damages that may arise from your use of our website or services, except as required by law.\n\n6. Changes to Terms\n\nWe reserve the right to modify these Terms and Conditions at any time. Any changes will be posted on this page.\n\n7. Contact Us\n\nIf you have any questions about these Terms and Conditions, please contact us at nissyhomemade@gmail.com';
                    break;
                default:
                    content = '';
                    break;
            }

            link.setAttribute('data-content', content);
        });
    });


})(jQuery);



window.onscroll = function() {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");
    var whatsappGif = document.getElementById("whatsappGif");
    
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.classList.add('show');
        whatsappGif.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
        whatsappGif.classList.remove('show');
    }
};

document.getElementById("scrollToTopBtn").onclick = function() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
};


