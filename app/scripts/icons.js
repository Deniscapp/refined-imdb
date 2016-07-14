'use strict';
// window.setInterval(function () {
//
// },0.010)
document.addEventListener('DOMContentLoaded', fireContentLoadedEvent, false);

function fireContentLoadedEvent () {
  console.log ("DOMContentLoaded");
  var imdPro = $("img[alt='IMDbPro Menu']");
  $("#navProMenu").on("mouseenter", function () {
    $(this).css("background", "")
  });
}
