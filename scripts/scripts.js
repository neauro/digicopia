var menu;
$(document).ready(function() {
  menu = $("#mobile");
  var scroll_speed = 1500;
  var offset = -($("#nav").height()*4);

  $(".close").on("click", function() {
    console.log("DEBUG: close is clicked");
    console.log(menu.attr("class"));
    if ($(this).attr("id") != "rwd-menu") {
      console.log("DEBUG: clicked thing is #rwd-menu");
      if (menu.hasClass("open")) {
        console.log("DEBUG: menu has open class");
        menu.removeClass("open");
      }
      else {
        console.log("DEBUG: menu does NOT have open class");
      }
    }
    else {
      console.log("DEBUG: clicked thing is not #rwd-menu");
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
