
function enablePhoneNavbar(){
    $("#nav-menu").addClass("hidden");
    $("#menu-button").removeClass("hidden");
}

function disablePhoneNavbar(){
    $("#nav-menu").removeClass("hidden");
    $("#menu-button").addClass("hidden");
}



$(document).ready(function () {

    const currentYear = new Date().getFullYear();
    $("#current-year").text(currentYear);

  if ($(window).width() < 600) {
   enablePhoneNavbar()
  }

  // Optional: Re-check on window resize
  $(window).resize(function () {
    if ($(window).width() < 600) {
      enablePhoneNavbar();

    } else {
      disablePhoneNavbar();
    }
  });



  $("#menu-button").on("click", function(){
    $("#phone-nav-menu").toggleClass("hidden");
  });

});
