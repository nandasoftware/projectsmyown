// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

console.log("asds");

function click(e) {
  const elements = document.getElementsByClassName("ctags");
  for (var j = 0; j < elements.length; j++) {  elements[j].remove(); }

  chrome.tabs.executeScript(null,
      {code:' var sheet = document.createElement("style"); sheet.innerHTML = " .find-a { width: 20px; height: 20px; border-radius: 100%; position: absolute; text-align: center; color: #fff; line-height: 20px; }.find-a span { display: none; position: absolute; margin-top: 0px; color: #fff; background: #ccc; padding-left: 10px; padding-right: 10px; z-index: 99999999999 !important;}.find-a:hover span {display: inline-block;}"; document.body.appendChild(sheet); const elements = document.getElementsByTagName("a");            for (var j = 0; j < elements.length; j++) {const td = elements[j].innerHTML;var clr = "";if(elements[j].getAttribute("href") == "#"){clr = "#e60f0f";}else if(elements[j].getAttribute("href") == "javascript:void(0);"){clr = "#ffa500";}else if(elements[j].getAttribute("href") == "javascript:void(0)"){clr = "#ffa500";}else{clr = "#119608";}if (elements[j].childNodes.length == 1) {elements[j].innerHTML = td + "<span class=find-a style=background-color:"+clr+">! <span>" + elements[j].getAttribute("href") + "</span></span>";}}'});
  window.close();
}

document.addEventListener('DOMContentLoaded', function () {
  var divs = document.querySelectorAll('div');
  for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', click);
  }
});


