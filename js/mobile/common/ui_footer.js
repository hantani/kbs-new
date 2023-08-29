"use strict";

(function () {
  var appLinkClick = function appLinkClick() {
    var $btn = document.querySelector(".application-download-links .open-btn");
    var $appLinks = document.querySelector(".application-download-links .app-links");
    $btn.addEventListener("click", function () {
      $btn.classList.toggle("on");
      $appLinks.classList.toggle("on");
    });
  };
  var init = function init() {
    appLinkClick();
  };
  window.addEventListener("load", function () {
    init();
  });
})();