/*

Collaborators: Emmanuel Martinez
Version 1.0.0
Updated on: 01-19-16

---------------------------
Table Of Contents
---------------------------

NAV SWIPE JS COMPONENT
*/

/* ********** BEGIN NAV/SWIPE JS COMPONENT ********** */

$().ready(function () {


    "use strict";
    $(".dropdown1 ul, .dropdown2 ul, .dropdown3 ul, .dropdown4 ul, .dropdown5 ul, .dropdown6 ul, .dropdown7 ul, .dropdown7 ul, .dropdown8 ul, .dropdown9 ul, .dropdown10 ul").addClass("idk"); /*adds css to dropdown ul inorder to style and so on*/

    $(".swipe-nav").before("<i class='swipe-icon'></i>"); /*adds icon*/
    var navWidth = $(".swipe-nav").width();
    $(".swipe-icon").addClass("fa fa-bars fa-2x"); /*adds hambergure icon to icon*/

    if ($(".swipe-nav").hasClass("nav-left")) {
        $(".swipe-nav").css("left", "-100%");
        $(".swipe-icon").css("left", 0);

        $("html").on("swiperight", function () {
            $(".swipe-nav").animate({
                left: "0%"
            });

            $(".swipe-icon").delay(100).removeClass("fa fa-bars fa-2x");
            $(".swipe-icon").addClass("fa fa-arrow-left fa-2x");

            $("body").css("overflow", "hidden");
            $(".swipe-nav").css("overflow", "auto");
            $(".content-overlay").css("overflow", "hidden");
        });

        $("body").on("swipeleft", function () {
            $(".swipe-nav").animate({

                left: "-100%"
            });

            $(".swipe-icon").delay(100).removeClass("fa-arrow-left");
            $(".swipe-icon").addClass("fa-bars");

            $(".swipe-nav").css("overflow", "hidden");
            $("body").css("overflow", "auto");
            $(".content-overlay").css("overflow", "auto");

        });

        $(document).on("click", ".fa-bars", function () {

            $(".swipe-icon").delay(100).removeClass("fa fa-bars fa-2x");
            $(".swipe-icon").addClass("fa fa-arrow-left fa-2x");


            $(".swipe-nav").animate({

                left: "0%"
            });
            $(".swipe-nav").css("overflow", "auto");
            $("body").css("overflow", "hidden");
            $(".content-overlay").css("overflow", "hidden");

        });

        $(document).on("click", ".fa-arrow-left", function () {
            $(".swipe-icon").delay(100).removeClass("fa fa-arrow-left fa-2x");
            $(".swipe-icon").addClass("fa fa-bars fa-2x");


            $(".swipe-nav").animate({

                left: "-100%"
            });
            $(".swipe-nav").css("overflow", "hidden");
            $("body").css("overflow", "auto");
            $(".content-overlay").css("overflow", "auto");

        });
    }

    if ($(".swipe-nav").hasClass("nav-right")) {
        $(".swipe-nav").css("left", "100%");
        $(".swipe-icon").css("right", 0);


        $("html").on("swiperight", function () {
            $(".swipe-nav").animate({
                left: "100%"
            });

            $(".swipe-icon").delay(100).removeClass("fa fa-bars fa-2x");
            $(".swipe-icon").addClass("fa fa-arrow-left fa-2x");

            $("body").css("overflow", "hidden");
            $(".swipe-nav").css("overflow", "auto");
            $(".content-overlay").css("overflow", "hidden");
        });

        $("body").on("swipeleft", function () {
            $(".swipe-nav").animate({

                left: "0%"
            });

            $(".swipe-icon").delay(100).removeClass("fa-arrow-left");
            $(".swipe-icon").addClass("fa-bars");

            $(".swipe-nav").css("overflow", "hidden");
            $("body").css("overflow", "auto");
            $(".content-overlay").css("overflow", "auto");

        });

        $(document).on("click", ".fa-bars", function () {

            $(".swipe-icon").delay(100).removeClass("fa fa-bars fa-2x");
            $(".swipe-icon").addClass("fa fa-arrow-left fa-2x");


            $(".swipe-nav").animate({

                left: "0%"
            });
            $(".swipe-nav").css("overflow", "auto");
            $("body").css("overflow", "hidden");
            $(".content-overlay").css("overflow", "hidden");

        });

        $(document).on("click", ".fa-arrow-left", function () {
            $(".swipe-icon").delay(100).removeClass("fa fa-arrow-left fa-2x");
            $(".swipe-icon").addClass("fa fa-bars fa-2x");


            $(".swipe-nav").animate({

                left: "100%"
            });
            $(".swipe-nav").css("overflow", "hidden");
            $("body").css("overflow", "auto");
            $(".content-overlay").css("overflow", "auto");

        });

    }

    /* This is to display nested list on mouse in or mouse our or click or un click */

    $(".dropdown1 ul, .dropdown2 ul, .dropdown3 ul, .dropdown4 ul, .dropdown5 ul, .dropdown6 ul, .dropdown7 ul, .dropdown7 ul, .dropdown8 ul, .dropdown9 ul, .dropdown10 ul").hide(); /*this is used to hide nested list items */
    $(".dropdown2 ul").hide(); /*this is used to hide nested list items */

    /* Mouseenter and mouseleave are proving problimatic thus far so they are not currently being used */

    $(document).on("click", ".dropdown1>a", function () {
        $(".dropdown1 ul").slideDown();
        $(".dropdown1").addClass("newdrop1");
        $(".dropdown1").removeClass("dropdown1");

    });

    $(document).on("click", ".newdrop1>a", function () {
        $(".newdrop1 ul").slideUp();
        $(".newdrop1").addClass("dropdown1");
        $(".newdrop1").removeClass("newdrop1");
    });

    $(document).on("click", ".dropdown2 >a", function () {
        $(".dropdown2 ul").slideDown();
        $(".dropdown2").addClass("newdrop2");
        $(".dropdown2").removeClass("dropdown2");

    });

    $(document).on("click", ".newdrop2 >a", function () {
        $(".newdrop2 ul").slideUp();
        $(".newdrop2").addClass("dropdown2");
        $(".newdrop2").removeClass("newdrop2");
    });

    $(document).on("click", ".dropdown3 >a", function () {
        $(".dropdown3 ul").slideDown();
        $(".dropdown3").addClass("newdrop3");
        $(".dropdown3").removeClass("dropdown3");

    });

    $(document).on("click", ".newdrop3 >a", function () {
        $(".newdrop3 ul").slideUp();
        $(".newdrop3").addClass("dropdown3");
        $(".newdrop3").removeClass("newdrop3");
    });

    $(document).on("click", ".dropdown4 >a", function () {
        $(".dropdown4 ul").slideDown();
        $(".dropdown4").addClass("newdrop4");
        $(".dropdown4").removeClass("dropdown4");

    });

    $(document).on("click", ".newdrop4 >a", function () {
        $(".newdrop4 ul").slideUp();
        $(".newdrop4").addClass("dropdown4");
        $(".newdrop4").removeClass("newdrop4");
    });

    $(document).on("click", ".dropdown5 >a", function () {
        $(".dropdown5 ul").slideDown();
        $(".dropdown5").addClass("newdrop5");
        $(".dropdown5").removeClass("dropdown5");

    });

    $(document).on("click", ".newdrop5 >a", function () {
        $(".newdrop5 ul").slideUp();
        $(".newdrop5").addClass("dropdown5");
        $(".newdrop5").removeClass("newdrop5");
    });

    $(document).on("click", ".dropdown6 >a", function () {
        $(".dropdown6 ul").slideDown();
        $(".dropdown6").addClass("newdrop6");
        $(".dropdown6").removeClass("dropdown6");

    });

    $(document).on("click", ".newdrop6 >a", function () {
        $(".newdrop6 ul").slideUp();
        $(".newdrop6").addClass("dropdown6");
        $(".newdrop6").removeClass("newdrop6");
    });

    $(document).on("click", ".dropdown7 >a", function () {
        $(".dropdown7 ul").slideDown();
        $(".dropdown7").addClass("newdrop7");
        $(".dropdown7").removeClass("dropdown7");

    });

    $(document).on("click", ".newdrop7 >a", function () {
        $(".newdrop7 ul").slideUp();
        $(".newdrop7").addClass("dropdown7");
        $(".newdrop7").removeClass("newdrop7");
    });

    $(document).on("click", ".dropdown8 >a", function () {
        $(".dropdown8 ul").slideDown();
        $(".dropdown8").addClass("newdrop8");
        $(".dropdown8").removeClass("dropdown8");

    });

    $(document).on("click", ".newdrop8 >a", function () {
        $(".newdrop8 ul").slideUp();
        $(".newdrop8").addClass("dropdown8");
        $(".newdrop8").removeClass("newdrop8");
    });

    $(document).on("click", ".dropdown9 >a", function () {
        $(".dropdown9 ul").slideDown();
        $(".dropdown9").addClass("newdrop9");
        $(".dropdown9").removeClass("dropdown9");

    });

    $(document).on("click", ".newdrop9 >a", function () {
        $(".newdrop9 ul").slideUp();
        $(".newdrop9").addClass("dropdown9");
        $(".newdrop9").removeClass("newdrop9");
    });

    $(document).on("click", ".dropdown10 >a", function () {
        $(".dropdown10 ul").slideDown();
        $(".dropdown10").addClass("newdrop10");
        $(".dropdown10").removeClass("dropdown10");

    });

    $(document).on("click", ".newdrop10 >a", function () {
        $(".newdrop10 ul").slideUp();
        $(".newdrop10").addClass("dropdown10");
        $(".newdrop10").removeClass("newdrop10");
    });

});

/* ********** END NAV/SWIPE JS COMPONENT ********** */