function updateSlides(indexClass, slideClass) {
    var indices = document.getElementsByClassName(indexClass)
    var slides = document.getElementsByClassName(slideClass)
    var windowHeight = jQuery( window ).height();
    var slideIndex = -1;
    for (i = 0; i < indices.length; i++) {
        // Check if photo is in view
        var thisPos = $(indices[i]).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (topOfWindow + windowHeight - 200 > thisPos ) {
           slideIndex = i;
        } else {
            break;
        }
    }
    // Fades out inactive images
    for (i = (slides.length - 1); i > slideIndex; i--) {
        slides[i].className = slides[i].className.replace(" fade-in-fast", " fade-out-fast");
    }
    if (slideIndex >= 0) {
        // Removes image fading out
        slides[slideIndex].className = slides[slideIndex].className.replace(" fade-out-fast", "");
        // Removes existing "fade-in-fast"
        slides[slideIndex].className = slides[slideIndex].className.replace(" fade-in-fast", "");
        slides[slideIndex].className += " fade-in-fast";
    }
}

// if the image in the window of browser when the page is loaded, update slides
$(document).ready(function(){
    updateSlides("display-image", "slide-image")
});

// if the image in the window of browser when scrolling the page, update slides
$(window).scroll(function() {
    updateSlides("display-image", "slide-image")
});