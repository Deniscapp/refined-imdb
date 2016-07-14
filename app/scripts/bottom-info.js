
'use strict';

var articles = $('.article');
var collapsible = $("#movie-info");
var icons = ['','','info','settings','announcement','question_answer','star_rate','message'];
for(var i=2; i<articles.length-1; i++){

  var articleContent = $(articles[i]).children();

  var collapsibleArticle = document.createElement("li");

  var collapsibleHeaderArticle = document.createElement("div");

  $(collapsibleHeaderArticle).addClass("collapsible-header");
  $(collapsibleHeaderArticle).html('<i class="material-icons">'+ icons[i] +'</i>'+(($(articles[i]).find("h2"))).html());

  var collapsibleBodyArticle = document.createElement("div");
  $(collapsibleBodyArticle).addClass("collapsible-body");
  $(collapsibleBodyArticle).append(articleContent);

  $(articles[i]).remove();

  $(collapsibleArticle).append(collapsibleHeaderArticle, collapsibleBodyArticle);
  console.log(collapsibleArticle);

  $(collapsible).append(collapsibleArticle);
  $(collapsibleBodyArticle).css({'padding-left':'1.5em'});


}

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

