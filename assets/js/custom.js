// ----------------------on windows scroll changes---------------------------------------
//-- ------Steaky menu--------- -->
window.onscroll = function() {
    myFunction()
};

function myFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        $("header").addClass('fixed-head');
        $(".header_logo img").attr("src", "assets/image/black_header-logo.png ");
        $("header .header_nav ul li a, .headersearch-btn .fas").css("color", "#0B4460");
        //$(".parallax-window").css("margin-top", "130px");
        $(".index-content").css("margin-top", "0px");
        $(".burger-nav").css("color", "#0B4460");
        $("header").css("padding", "15px 0");
        $(".index-content").prev().css("background", "#fff");
        $(".index-content").prev().find(".header_logo img").attr("src", "assets/image/black_header-logo.png ");
    } else {
        $("header").removeClass('fixed-head');
        $(".header_logo img").attr("src", "assets/image/header-logo.png");
        $("header .header_nav ul li a, .headersearch-btn .fas").css("color", "#fff");
        $(".burger-nav").css("color", "#fff");
        $("header").css("padding", "40px 0");
        //$(".parallax-window").css("margin-top", "unset");
        $(".index-content").css("margin-top", "unset");
        $(".index-content").prev().css("background", "transparent");
        $(".index-content").prev().find(".header_logo img").attr("src", "assets/image/header-logo.png ");
    };

    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        $("header .header_nav nav").removeClass("active_header_menu");
    }
}
// ----------------------search active--------------------------------------
$(".headersearch-btn").click(function() {
    $(".header-search-form").toggleClass("activesearch");
});
// ----------gallery images-------------------------

$(".sing__images img").addClass("gallery-img");
var imgs = document.getElementsByClassName("gallery-img");
var imglen = imgs.length;
var i;
//alert(imglen);

$(".gallery-exit").click(function() {
    $(".single-gallery").removeClass("active_gallery");
});

$(".sing__images img").click(function() {
    $(".single-gallery").toggleClass("active_gallery");
    $(".single-gallery").addClass();
    $(".single-gallery img").attr("src", $(this).attr("src"));
    for (var j = 0; j <= imglen; j++) {
        if ($(this).attr("src") == imgs[j].getAttribute("src")) {
            i = j;
        }
    }
});

$(".single-gallery .next").click(function() {
    ++i;

    if (i == imglen) {
        i = 0;
    }
    $(".single-gallery img").attr("src", imgs[i].getAttribute("src"));
});
$(".single-gallery .prev").click(function() {
    --i;
    if (i == -1) {
        i = imglen - 1;
    }
    $(".single-gallery img").attr("src", imgs[i].getAttribute("src"));
});

$(".burger-nav").click(function() {
    $("header .header_nav nav").toggleClass("active_header_menu");
    $(this).toggleClass("active_burger");
});
// --------------Project tab click----------------------
$(".prod-nav li a").click(function() {
    $(this).parent().siblings().children().removeClass("active_prod_cat");
    $(this).addClass("active_prod_cat");
});

$(window).resize(function() {
    if ($(window).outerWidth() >= 1200) {
        $("header .header_nav nav").removeClass("active_header_menu");
    }
});
//   ----------------Language bar activation-----------------------

$(".lang_bar").children().on("click", function() {

    $(this).siblings().removeClass("deactive_lang");
    $(this).siblings().addClass("active_lang");
    $(this).removeClass("active_lang");
    $(this).addClass("deactive_lang");


});

$(".lang_bar").on("mousemove", function() {
    $(".active_lang").css("transform", "rotate(180deg)")
});
$(".lang_bar").on("mouseout", function() {
    $(".active_lang").css("transform", "rotate(0deg)")
});
//   ---------------------------------------------

$(".index-content").prev().css("background", "transparent");
$(".index-content").prev().css("position", "fixed");
$(".index-content").prev().css("z-index", "999");