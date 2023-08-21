"use strict";

(function () {
  var selectClick = function selectClick() {
    var $btns = document.querySelectorAll(".footer-select-btn");
    $btns.forEach(function ($btn) {
      $btn.addEventListener("click", function () {
        var $commonSelectLinks = $btn.nextElementSibling;
        $btn.classList.toggle("on");
        $commonSelectLinks.classList.toggle("on");
      });
    });
  };
  window.addEventListener("load", function () {
    selectClick();
  });
})();