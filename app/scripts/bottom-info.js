
'use strict';

$('.collapsible').collapsible({
  accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
});
var collapsible = $("#movie-info"); // Collapsible for all bottom info content

// Storyline section
var storyLine = $("#titleStoryLine");
var storyLineContent = $(storyLine).children();


var collapsibleStoryLine = document.createElement("li");

var collapsibleHeaderStoryLine = document.createElement("div");

$(collapsibleHeaderStoryLine).addClass("collapsible-header");
$(collapsibleHeaderStoryLine).html("<i class='material-icons'>info</i> "+"Storyline Information");

var collapsibleBodyStoryLine = document.createElement("div");
$(collapsibleBodyStoryLine).addClass("collapsible-body");
$(collapsibleBodyStoryLine).append(storyLineContent);


$(storyLine).remove();
$(collapsibleStoryLine).append(collapsibleHeaderStoryLine, collapsibleBodyStoryLine);
 // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

//Technical details section
var titleDetails = $("#titleDetails");
var titleDetailsContent = $(titleDetails).children();

var collapsibleTechDetails = document.createElement("li");

var collapsibleHeaderTechDetails = document.createElement("div");

$(collapsibleHeaderTechDetails).addClass("collapsible-header");
$(collapsibleHeaderTechDetails).html("<i class='material-icons'>settings</i> "+"Technical Details");

var collapsibleBodyTechDetails = document.createElement("div");
$(collapsibleBodyTechDetails).addClass("collapsible-body");
$(collapsibleBodyTechDetails).append(titleDetailsContent);

$(collapsibleTechDetails).append(collapsibleHeaderTechDetails, collapsibleBodyTechDetails);

$(titleDetails).remove();

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

var didYouKnow = $("#titleDidYouKnow");
console.log($(didYouKnow).children()[1]);
var didYouKnowContent = $(didYouKnow).children();

var collapsibleDidYouKnow = document.createElement("li");

var collapsibleHeaderDidYouKnow = document.createElement("div");

$(collapsibleHeaderDidYouKnow).addClass("collapsible-header");
$(collapsibleHeaderDidYouKnow).html("<i class='material-icons'>announcement</i> "+ $($(didYouKnow).children()[1]).html());

var collapsibleBodyDidYouKnow = document.createElement("div");
$(collapsibleBodyDidYouKnow).addClass("collapsible-body");
$(collapsibleBodyDidYouKnow).append(didYouKnowContent);

$(collapsibleDidYouKnow).append(collapsibleHeaderDidYouKnow, collapsibleBodyDidYouKnow);

$(didYouKnow).remove();

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
$(collapsible).append(collapsibleStoryLine, collapsibleTechDetails, collapsibleDidYouKnow);


$(collapsibleBodyTechDetails).css({'padding-left':'1.5em'});

$(collapsibleBodyStoryLine).css({'padding-left':'1.5em'});

$(collapsibleBodyDidYouKnow).css({'padding-left':'1.5em'});

$("p").each(function () {
  this.style.setProperty('padding','0em',"important")
});

$("li").each(function () {
  this.style.setProperty('margin-bottom','0em',"important")
});

var editIcon = $('.rightcornerlink').children();

$(editIcon).each(function () {
  if($(this).html() == 'Edit') {
      $(this).html('<i class="material-icons">edit</i>');
      $(this).parent().css({'position':'relative','top':'1.4em'})
  }
});

