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