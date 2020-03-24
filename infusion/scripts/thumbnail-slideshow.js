var imageDir = "assets/images/imageset3/output/"

var index = 0;
var imageArray = new Array();
imageArray[index++] = imageDir + "sunglasses2.jpg";
imageArray[index++] = imageDir + "sunglasses2_abstractpainting.jpg";
imageArray[index++] = imageDir + "sunglasses2_caoutchouc.jpg";
imageArray[index++] = imageDir + "sunglasses2_edwardlaw.jpg";
imageArray[index++] = imageDir + "sunglasses2_goldensummereaglemont.jpg";
imageArray[index++] = imageDir + "sunglasses2_leafalbumpainting.jpg";
imageArray[index++] = imageDir + "sunglasses2_rooftopsandtree.jpg";
imageArray[index++] = imageDir + "sunglasses2_seatednude.jpg";
imageArray[index++] = imageDir + "sunglasses2_simultaneouswindowsonthecity.jpg";
imageArray[index++] = imageDir + "sunglasses2_thescream.jpg";
imageArray[index++] = imageDir + "sunglasses2_thespring.jpg";
imageArray[index++] = imageDir + "sunglasses2_tile.jpg";
imageArray[index++] = imageDir + "sunglasses2_viewfromthedunes.jpg";

var index = 0;
var idleTime = 1000;
var timeToIdle = 3000;
var topSlide = document.getElementById("topSlide");
var bottomSlide = document.getElementById("bottomSlide");
var thumbnails = document.getElementsByClassName("thumbnail-image");

var idleTimer;
var toIdleTimer;

function setupSlides() {
    for (var i = 0; i < thumbnails.length; i++) {
        var func = function(i){ return function(){
            clearTimeout(toIdleTimer); 
            clearTimeout(idleTimer); 
            toIdleTimer = setTimeout(startIdle, timeToIdle); 
            updateIndex(i);
        }; };
        thumbnails[i].onclick = func(i+1);
    }
    startIdle();
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function startIdle() {
    idleTimer = setInterval(idleSwitch, idleTime);
}

function idleSwitch() {
    if (index === 0) {
        updateIndex(getRandomInt(imageArray.length - 1) + 1);
    } else {
        updateIndex(0);
    }
}

function updateIndex(indexNumber) {
    index = indexNumber;
    updateSlides();
}

function updateSlides() {
    var topSlide = document.getElementById("topSlide");
    var bottomSlide = document.getElementById("bottomSlide");
    bottomSlide.src = topSlide.src;
    topSlide.src = imageArray[index];
    var newTopSlide = topSlide.cloneNode(true);
    topSlide.parentNode.replaceChild(newTopSlide, topSlide);
}

// if the image in the window of browser when the page is loaded, update slides
$(document).ready(function(){
    setupSlides();
});