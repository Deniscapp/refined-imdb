'use strict';
// window.setInterval(function () {
//
// },0.010)
document.addEventListener('DOMContentLoaded', fireContentLoadedEvent, false);

function fireContentLoadedEvent () {
  console.log ("DOMContentLoaded");
  var spanFacebook = $("a[title='Follow IMDb on Facebook']").children()[0];
  var spanTwitter = $("a[title='Follow IMDb on Twitter']").children()[0];
  var spanInstagram = $("a[title='Follow IMDb on Instagram']").children()[0];
  var help = $("a:contains(Help)");
  var spanHelp = document.createElement("span");

  $(spanHelp).addClass("fa fa-question-circle fa-3x");
  $(help).html(spanHelp);
  $(help).css({"position":"relative","top":"-0.75em"});

  $(spanFacebook).removeClass();
  $(spanFacebook).addClass("fa fa-facebook-square fa-3x");

  $(spanTwitter).removeClass();
  $(spanTwitter).addClass("fa fa-twitter-square fa-3x");

  $(spanInstagram).removeClass();
  $(spanInstagram).addClass("fa fa-instagram fa-3x");

  var imdPro = $("img[alt='IMDbPro Menu']");
  $("#navProMenu").on("mouseenter", function () {
    $(this).css("background", "")
  });
}
