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