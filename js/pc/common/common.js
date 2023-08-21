"use strict";

(function () {
  // 사이드 메뉴 공유 메뉴 클릭 event
  var asideShareClick = function asideShareClick() {
    var $btn = document.querySelector(".aside-btns-list .share-btn");
    var $closeBtn = document.querySelector(".share-menu .close-btn");
    var $dim = document.querySelector(".dim");
    var $menu = document.querySelector(".share-menu");
    var $nav = document.querySelector(".header-nav-wrapper");
    $btn.addEventListener("click", function () {
      $dim.classList.toggle("on");
      $menu.classList.toggle("on");
      $nav.classList.toggle("index-change");
    });
    $closeBtn.addEventListener("click", function () {
      $dim.classList.remove("on");
      $menu.classList.remove("on");
      $nav.classList.remove("index-change");
    });
    $dim.addEventListener("click", function () {
      $dim.classList.remove("on");
      $menu.classList.remove("on");
      $nav.classList.remove("index-change");
    });
  };

  // 사이드 메뉴 텍스트 메뉴 클릭 event
  var asideTxtClick = function asideTxtClick() {
    var $btn = document.querySelector(".aside-btns-list .txt-btn");
    var $menu = document.querySelector(".aside-btns-list .txt-menu");
    $btn.addEventListener("click", function () {
      $btn.classList.toggle("on");
      $menu.classList.toggle("on");
    });
  };
  window.addEventListener("load", function () {
    asideShareClick();
    asideTxtClick();
  });
})();