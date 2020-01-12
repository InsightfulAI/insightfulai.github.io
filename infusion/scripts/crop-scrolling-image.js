function lerp(v0, v1, t) {
    return v0*(1-t)+v1*t
}

function centerBackground(imageClass) {
    var ratio = 1080/1620;
    var windowHeight = $( window ).height();
    var iamgeWidth = windowHeight * ratio;
    $(imageClass).each(function(){
        var thisWidth = $(this).width();
        if (thisWidth < iamgeWidth) {
            var widthDiff = iamgeWidth - thisWidth;
            this.style.backgroundPosition = -(widthDiff/2) + "px";
        }
    })
}


// if the image in the window of browser when the page is loaded, update images
$(document).ready(function(){
    centerBackground(".parallax")
});

$(window).resize(function(){
    centerBackground(".parallax")
});