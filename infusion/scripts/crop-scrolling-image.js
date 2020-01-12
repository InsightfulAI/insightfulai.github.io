function lerp(v0, v1, t) {
    return v0*(1-t)+v1*t
}

function cropImage(imageClass) {
    var windowHeight = jQuery( window ).height();

    $(imageClass).each(function(){
        var thisPos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (topOfWindow + windowHeight > thisPos ) {
            distance = Math.min(topOfWindow-thisPos, 0)
            this.setAttribute("style", "object-position: 50% "+ distance + "px;");
        }
    })
}

// if the image in the window of browser when the page is loaded, update images
$(document).ready(function(){
    cropImage(".scrolling-target")
});

// if the image in the window of browser when scrolling the page, update images
$(window).scroll(function() {
    cropImage(".scrolling-target")
});