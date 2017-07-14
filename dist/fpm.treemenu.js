/*! flypanels - v2.1.0 - 2017-07-14
* https://github.com/SubZane/flyPanels
* Copyright (c) 2017 Andreas Norman; Licensed MIT */

!function(a,b){"function"==typeof define&&define.amd?define([],b(a)):"object"==typeof exports?module.exports=b(a):a.fpm_treemenu=b(a)}("undefined"!=typeof global?global:this.window||this.global,function(a){"use strict";var b,c,d,e={},f=!!document.querySelector&&!!a.addEventListener,g={expandHandler:"a.expand",onInit:function(){},onDestroy:function(){},OnExpandOpen:function(){},OnExpandClose:function(){}},h=function(){return navigator.userAgent.toLowerCase().indexOf("android")>-1},i=function(){return!!(navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i))},j=function(a,b){return!(void 0===a.classList||!a.classList.contains(b))},k=function(){var a=document.querySelectorAll(".flypanels-treemenu a, .flypanels-button-left");window.onkeydown=function(b){j(document.querySelector("body"),"flypanels-open")&&j(document.querySelector(".flypanels-container"),"openleft")&&9===b.keyCode&&(b.shiftKey?0===Array.prototype.indexOf.call(a,b.target)&&(a[a.length-1].focus(),b.preventDefault()):(console.log(b.target),console.log(a[Array.prototype.indexOf.call(a,b.target)]),-1===Array.prototype.indexOf.call(a,b.target)&&(a[0].focus(),b.preventDefault())))}},l=function(a){"false"===a.getAttribute("aria-expanded")?(a.setAttribute("aria-expanded","true"),m(a.querySelector("a.expand"),!0),a.querySelector("ul").setAttribute("aria-hidden","false"),a.querySelector("ul").removeAttribute("hidden"),setTimeout(function(){a.classList.toggle("expanded")},b.transitiontime),n("OnExpandOpen")):(a.setAttribute("aria-expanded","false"),m(a.querySelector("a.expand"),!1),a.querySelector("ul").setAttribute("aria-hidden","true"),a.querySelector("ul").setAttribute("hidden",""),setTimeout(function(){a.classList.toggle("expanded")},b.transitiontime),n("OnExpandClose"))},m=function(a,b){b?a.setAttribute("aria-label",a.getAttribute("data-aria-label-active")):a.setAttribute("aria-label",a.getAttribute("data-aria-label"))},n=function(a){void 0!==b[a]&&b[a].call(d)},o=function(a,b){var c={};return p(a,function(b,d){c[d]=a[d]}),p(b,function(a,d){c[d]=b[d]}),c},p=function(a,b,c){if("[object Object]"===Object.prototype.toString.call(a))for(var d in a)Object.prototype.hasOwnProperty.call(a,d)&&b.call(c,a[d],d,a);else for(var e=0,f=a.length;e<f;e++)b.call(c,a[e],e,a)};return e.destroy=function(){b&&(document.documentElement.classList.remove(b.initClass),document.removeEventListener("click",eventHandler,!1),b=null,c=null,n("onDestroy"))},e.init=function(a){if(f){e.destroy(),b=o(g,a||{}),d=document.querySelector(b.container),(h()||i())&&document.querySelector(".flypanels-treemenu").classList.add("touch");var c=document.querySelectorAll(".flypanels-treemenu li.haschildren "+b.expandHandler);p(c,function(a,b){a.addEventListener("click",function(a){l(this.parentElement.parentElement),a.preventDefault()})}),k(),n("onInit")}},e});