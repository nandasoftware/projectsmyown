// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

function click(e) {
  const elements = document.getElementsByClassName("ctags");
  for (var j = 0; j < elements.length; j++) {  elements[j].remove(); }

  chrome.tabs.executeScript(null,
      {code:' var divs = document.querySelectorAll("a"); for (var i = 0; i < divs.length; i++) {  var shref = divs[i].getAttribute("href"); divs[i].style.cssText="position: relative;";     var node = document.createElement("span"); node.classList.add("ctags");  node.style.cssText = "position: absolute;width: 6rem;background: red;margin-top: -3.7rem;margin-left: -6.6rem;z-index: 9999;padding: 0.2rem;"; var textnode = document.createTextNode(shref); node.appendChild(textnode);divs[i]. appendChild(node)}'});
  window.close();
}

document.addEventListener('DOMContentLoaded', function () {
  var divs = document.querySelectorAll('div');
  for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', click);
  }
});


