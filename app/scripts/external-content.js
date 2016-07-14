'use strict';

var materialScript = document.createElement("script");
materialScript.src = "https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.6/js/materialize.min.js";
var linkCSS = document.createElement("link");
var linkIcons = document.createElement("link");

linkIcons.rel = "stylesheet";
linkIcons.href = "http://fonts.googleapis.com/icon?family=Material+Icons";

linkCSS.rel = "stylesheet";
linkCSS.href = "https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.6/css/materialize.min.css";

var head = document.getElementsByTagName("head");

document.documentElement.appendChild(linkCSS);
document.documentElement.appendChild(linkIcons);
