'use strict';

// creating a Collection w/ cast members

$('.collapsible').collapsible({
  accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
});

var castTable = $(".cast_list");
var castTableBody = castTable.children()[0];
var castInfo = [];

$(castTableBody).children().each(function (index, val) {
  castInfo.push(val);
});

var ul = document.createElement("ul");
$(ul).addClass("collection");


for(var i=1; i<castInfo.length; i++){

  let li = document.createElement("li");
  var img = document.createElement("img");
  var a = document.createElement("a");
  var span = document.createElement("span");
  var spanText = document.createElement("span");
  var _i = document.createElement("i");

  $(li).addClass("collection-item avatar");
  $(img).addClass("circle");
  $(span).addClass("title");
  $(a).addClass("secondary-content");
  $(_i).addClass("material-icons");

  var td = $(castInfo[i]).children()[0];
  var tdChar = $(castInfo[i]).children()[3];
  var charName = $($(tdChar).children()[0]).html();
  $(spanText).html(charName);

  var _a = $(td).children()[0];
  var actorImg = $(_a).children()[0];

  $(span).html(actorImg.title);
  $(_i).html("keyboard_arrow_right");
  a.href = _a.href;
  $(a).append(_i);
  a.target = "_blank";
  img.src = $(actorImg).attr("loadlate");


  $(li).append(img, span,"<br>" ,spanText, a);
  $(ul).append(li);

}

var collapsible = document.createElement("ul");
$(collapsible).attr("id","movie-info");

$(collapsible).addClass("collapsible");
$(collapsible).attr("data-collapsible","expandable");

var collapsibleItem = document.createElement("li");
var icon = document.createElement("i");
$(icon).addClass("material-icons");
$(icon).html("group");

var collapsibleHeader = document.createElement("div");
$(collapsibleHeader).addClass("collapsible-header");
$(collapsibleHeader).html("<i class='material-icons'>group</i> "+ $($(castInfo[0]).children()[0]).html());


var collapsibleBody = document.createElement("div");
$(collapsibleBody).addClass("collapsible-body");

$(collapsibleBody).append(ul);
$(collapsibleItem).append(collapsibleHeader, collapsibleBody);
$(collapsible).append(collapsibleItem);

var article = $("#titleCast");
$(article).replaceWith(collapsible);

$("ul").each(function () {
  this.style.setProperty('padding-left','0em',"important")
});