let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

// for fading out the prev and next btns

document.addEventListener("animationstart", function(e){
    if (e.animationName === "fadeIn") {
        e.target.classList.add("did-fade-in");
    }
});

document.addEventListener("animationend", function(e){
    if (e.animationName === "fadeOut") {
        e.target.classList.remove("did-fade-in");
    }
});

//for closing the (download digikala) tab at the bottom

window.onload = function(){
    document.getElementById('close').onclick = function(){
        this.parentNode.remove();
        return false;
    };
};

let inputImage = document.getElementById('digi');
let searchBar = document.getElementById('search-bar');
function hideImage(){
    inputImage.style.display = "none";
}
searchBar.addEventListener("click", hideImage);
