
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
$(collapsible).append(collapsibleStoryLine, collapsibleTechDetails);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

$(collapsibleBodyTechDetails).css({'padding-left':'1.5em'});

$(collapsibleBodyStoryLine).css({'padding-left':'1.5em'});

$("p").each(function () {
  this.style.setProperty('padding','0em',"important")
});

