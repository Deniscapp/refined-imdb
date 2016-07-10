'use strict';

// creating a Collection w/ cast members

var castTable = $(".cast_list");
var castTableBody = castTable.children()[0];
var castInfo = [];

$(castTableBody).children().each(function (index, val) {
  castInfo.push(val);
});

var ul = document.createElement("ul");
$(ul).addClass("collection with-header");

let li = document.createElement("li");
$(li).addClass("collection-header");
$(li).html($($(castInfo[0]).children()[0]).html());
$(ul).append(li);

for(var i=1; i<castInfo.length; i++){

  let li = document.createElement("li");
  var img = document.createElement("img");
  var a = document.createElement("a");
  var span = document.createElement("span");
  var p = document.createElement("p");
  var _i = document.createElement("i");

  $(li).addClass("collection-item avatar");
  $(img).addClass("circle");
  $(span).addClass("title");
  $(a).addClass("secondary-content");
  $(_i).addClass("material-icons");

  var td = $(castInfo[i]).children()[0];
  var tdChar = $(castInfo[i]).children()[3];
  var charName = $($(tdChar).children()[0]).html();
  $(p).html(charName);

  var _a = $(td).children()[0];
  var actorImg = $(_a).children()[0];

  $(span).html(actorImg.title);
  $(_i).html("keyboard_arrow_right");
  a.href = _a.href;
  $(a).append(_i);
  a.target = "_blank";
  img.src = $(actorImg).attr("loadlate");


  $(li).append(img, span, p, a);
  $(ul).append(li);

}

var article = $("#titleCast");
$(article).replaceWith(ul);
