$(document).ready(function() {
  var menu = $("#mobile");
  var scroll_speed = 1500;
  var offset = -($("#nav").height()*4);
  var nav = $("#nav");

  $("#rwd-menu").on("click", function() {
    menu.toggleClass("open");
    nav.toggleClass("open");
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
