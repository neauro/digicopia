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
});
