
$(function() {
    var header = $(".menu-bar");
  
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if (scroll >= 550) {
            header.addClass("scrolled");
        } else {
            header.removeClass("scrolled");
        }
    });
  
});

let slideIndex = 1;
showSlides(slideIndex);
let num = [];

function plusSlides(num) {
  showSlides(slideIndex += num);
}
plusSlides(num);

function currentSlide(num) {
  showSlides(slideIndex = num);
}
currentSlide(num);

function showSlides(num) {
  let i;
  const slides = document.getElementsByClassName('mySlides');
  const dots = document.getElementsByClassName('dot');
  if (num > slides.length) {
    slideIndex = 1;
  }    
  if (num < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active-slide-img', '');
  }

  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active-slide-img';  
}