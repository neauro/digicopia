var menu;
$(document).ready(function() {
  menu = $(".mobile");
  var scroll_speed = 1500;
  var offset = -($("#nav").height()*4);

  $(".mobile.overlay").on("click", function(e) {
    e.stopPropagation(); 
    if (menu.hasClass("open")) {
      menu.removeClass("open");
    }
  });

  $("#rwd-menu").on("click", function(e) {
    e.stopPropagation();
    menu.toggleClass("open");
  });

  $(".go-home").on("click", function() {
    $('html, body').animate({
      scrollTop: $("#container").offset().top-($("#nav").height()*4)
    }, scroll_speed);
  });

  $(".go-work").on("click", function() {
    $('html, body').animate({
      scrollTop: $("#work").offset().top-($("#nav").height()*4)
    }, scroll_speed);
  });

  $(".go-about").on("click", function() {
    $('html, body').animate({
      scrollTop: $("#like").offset().top-($("#nav").height())
    }, scroll_speed);
  });

});
