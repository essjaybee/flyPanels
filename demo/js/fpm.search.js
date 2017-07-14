/*! flypanels - v2.1.0 - 2017-07-14
* https://github.com/SubZane/flyPanels
* Copyright (c) 2017 Andreas Norman; Licensed MIT */

!function(a,b){"function"==typeof define&&define.amd?define([],b(a)):"object"==typeof exports?module.exports=b(a):a.fpm_search=b(a)}("undefined"!=typeof global?global:this.window||this.global,function(a){"use strict";var b,c,d,e,f={},g=!!document.querySelector&&!!a.addEventListener,h={saveQueryCookie:!1,searchPanel:document.querySelector('.offcanvas [data-panel="search"]'),onInit:function(){},onDestroy:function(){},onEmptySearchResult:function(){},onSearchError:function(){},onSearchSuccess:function(){}},i=function(a){l("hide"),b.searchPanel.querySelector(".flypanels-searchresult").innerHTML="",b.searchPanel.querySelector(".resultinfo .query").innerHTML=a,b.searchPanel.querySelector(".resultinfo .num").innerHTML=0;var c=b.searchPanel.querySelector(".searchbox").getAttribute("data-searchurl");c=c+"&q="+a;var d=new XMLHttpRequest;d.open("GET",c,!0),d.onload=function(){if(d.status>=200&&d.status<400){var c=k(d.response);if(!1!==c){var f=c.Items.length;if(f>0){!0===b.saveQueryCookie&&n.set("searchQuery",a,null,"/");var g=j(c.Items);b.searchPanel.querySelector(".resultinfo .query").innerHTML=a,b.searchPanel.querySelector(".resultinfo .num").innerHTML=f,b.searchPanel.querySelector(".flypanels-searchresult").innerHTML=g,e=document.querySelectorAll(".flypanels-right .searchbutton, #flypanels-searchfield, .flypanels-searchresult ul li a"),m("hide"),b.searchPanel.querySelector(".resultinfo").removeAttribute("hidden"),b.searchPanel.querySelector(".resultinfo").setAttribute("aria-hidden","false"),b.searchPanel.querySelector(".flypanels-searchresult").removeAttribute("hidden"),b.searchPanel.querySelector(".flypanels-searchresult").setAttribute("aria-hidden","false"),s("onSearchSuccess")}else s("onEmptySearchResult"),!0===b.saveQueryCookie&&n.remove("searchQuery","/"),m("hide"),l("show")}else s("onEmptySearchResult"),!0===b.saveQueryCookie&&n.remove("searchQuery","/"),m("hide"),l("show")}else l("show"),m("hide"),s("onSearchError")},d.onerror=function(){l("show")},d.send()},j=function(a){var b="<ul>";for(var c in a)"Page"===a[c].Type?b+='<li><a href="'+a[c].LinkUrl+'"><span class="type"><i class="fa page"></i></span><span class="link">'+a[c].Header+"</span></a>":b+='<li><a href="'+a[c].LinkUrl+'"><span class="type"><i class="fa doc"></i></span><span class="link">'+a[c].Header+"</span></a>";return b+="</ul>"},k=function(a){try{var b=JSON.parse(a);if(b&&"object"==typeof b&&null!==b)return b}catch(a){}return console.warn("Error parsing JSON file"),!1},l=function(a){"hide"===a?(b.searchPanel.querySelector(".errormsg").setAttribute("hidden",""),b.searchPanel.querySelector(".errormsg").setAttribute("aria-hidden","true")):(b.searchPanel.querySelector(".errormsg").removeAttribute("hidden"),b.searchPanel.querySelector(".errormsg").setAttribute("aria-hidden","false"))},m=function(a){"hide"===a?b.searchPanel.querySelector(".errormsg").setAttribute("hidden",""):b.searchPanel.querySelector(".errormsg").removeAttribute("hidden")},n={get:function(a){return a?decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent(a).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||null:null},set:function(a,b,c,d,e,f){if(!a||/^(?:expires|max\-age|path|domain|secure)$/i.test(a))return!1;var g="";if(c)switch(c.constructor){case Number:g=c===1/0?"; expires=Fri, 31 Dec 9999 23:59:59 GMT":"; max-age="+c;break;case String:g="; expires="+c;break;case Date:g="; expires="+c.toUTCString()}return document.cookie=encodeURIComponent(a)+"="+encodeURIComponent(b)+g+(e?"; domain="+e:"")+(d?"; path="+d:"")+(f?"; secure":""),!0},remove:function(a,b,c){return!!this.has(a)&&(document.cookie=encodeURIComponent(a)+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT"+(c?"; domain="+c:"")+(b?"; path="+b:""),!0)},has:function(a){return!!a&&new RegExp("(?:^|;\\s*)"+encodeURIComponent(a).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=").test(document.cookie)},keys:function(){for(var a=document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g,"").split(/\s*(?:\=[^;]*)?;\s*/),b=a.length,c=0;c<b;c++)a[c]=decodeURIComponent(a[c]);return a}},o=function(){return navigator.userAgent.toLowerCase().indexOf("android")>-1},p=function(){return!!(navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i))},q=function(){e=e||document.querySelectorAll("#flypanels-searchfield, .flypanels-right .searchbutton"),document.onkeydown=function(a){r(document.querySelector("body"),"flypanels-open")&&r(document.querySelector(".flypanels-container"),"openright")&&9===a.keyCode&&(a.shiftKey?(console.log(Array.prototype.indexOf.call(e,a.target)),0===Array.prototype.indexOf.call(e,a.target)&&(e[e.length-1].focus(),a.preventDefault())):-1===Array.prototype.indexOf.call(e,a.target)?(e[0].focus(),a.preventDefault()):Array.prototype.indexOf.call(e,a.target)+1===e.length&&(e[0].focus(),a.preventDefault()))}},r=function(a,b){return!(void 0===a.classList||!a.classList.contains(b))},s=function(a){void 0!==b[a]&&b[a].call(d)},t=function(a,b){var c={};return u(a,function(b,d){c[d]=a[d]}),u(b,function(a,d){c[d]=b[d]}),c},u=function(a,b,c){if("[object Object]"===Object.prototype.toString.call(a))for(var d in a)Object.prototype.hasOwnProperty.call(a,d)&&b.call(c,a[d],d,a);else for(var e=0,f=a.length;e<f;e++)b.call(c,a[e],e,a)};return f.destroy=function(){b&&(document.documentElement.classList.remove(b.initClass),document.removeEventListener("click",eventHandler,!1),b=null,c=null,s("onDestroy"))},f.init=function(a){g&&(f.destroy(),b=t(h,a||{}),d=document.querySelector(b.container),(o()||p())&&document.querySelector(".flypanels-searchresult").classList.add("touch"),b.searchPanel.querySelector(".searchbutton").addEventListener("click",function(a){a.preventDefault(),m("show"),i(b.searchPanel.querySelector(".searchbox input").value)}),b.searchPanel.querySelector(".searchbox input").addEventListener("keydown",function(a){13===a.which&&(m("show"),i(this.value))}),!0===n.has("searchQuery")&&!0===b.saveQueryCookie&&i(n.get("searchQuery")),q(),s("onInit"))},f});