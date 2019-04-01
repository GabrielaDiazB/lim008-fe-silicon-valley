$(function() {
    var header = $(".menu-bar");
  
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if (scroll >= 20) {
            header.addClass("scrolled");
        } else {
            header.removeClass("scrolled");
        }
    });
  
});

let slideIndexOne = 0;
showSlidesOne();

function showSlidesOne() {
  let i;
  let slidesOne = document.getElementsByClassName("mySlides1");
  let dotsOne = document.getElementsByClassName("dot1");
  for (i = 0; i < slidesOne.length; i++) {
    slidesOne[i].style.display = "none";  
  }
  slideIndexOne++;
  if (slideIndexOne > slidesOne.length) {slideIndexOne = 1}    
  for (i = 0; i < dotsOne.length; i++) {
    dotsOne[i].className = dotsOne[i].className.replace(" active", "");
  }
  slidesOne[slideIndexOne-1].style.display = "block";  
  dotsOne[slideIndexOne-1].className += " active";
  setTimeout(showSlidesOne, 2000); // Change image every 2 seconds
}

let slideIndexTwo = 0;
showSlidesTwo();

function showSlidesTwo() {
  let i;
  let slidesTwo = document.getElementsByClassName("mySlides2");
  let dotsTwo = document.getElementsByClassName("dot2");
  for (i = 0; i < slidesTwo.length; i++) {
    slidesTwo[i].style.display = "none";  
  }
  slideIndexTwo++;
  if (slideIndexTwo > slidesTwo.length) {slideIndexTwo = 1}    
  for (i = 0; i < dotsTwo.length; i++) {
    dotsTwo[i].className = dotsTwo[i].className.replace(" active", "");
  }
  slidesTwo[slideIndexTwo-1].style.display = "block";  
  dotsTwo[slideIndexTwo-1].className += " active";
  setTimeout(showSlidesTwo, 3000); // Change image every 2 seconds
}

let slideIndexThree = 0;
showSlidesThree();

function showSlidesThree() {
  let i;
  let slidesThree = document.getElementsByClassName("mySlides3");
  let dotsThree = document.getElementsByClassName("dot3");
  for (i = 0; i < slidesThree.length; i++) {
    slidesThree[i].style.display = "none";  
  }
  slideIndexThree++;
  if (slideIndexThree > slidesThree.length) {slideIndexThree = 1}    
  for (i = 0; i < dotsThree.length; i++) {
    dotsThree[i].className = dotsThree[i].className.replace(" active", "");
  }
  slidesThree[slideIndexThree-1].style.display = "block";  
  dotsThree[slideIndexThree-1].className += " active";
  setTimeout(showSlidesThree, 2500); // Change image every 2 seconds
}
