"use strict";

(function () {
  // 셀렉트 메뉴 클릭 event
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
    var $txtIcon = document.querySelector(".aside-btns-list .txt-btn .txt-icon");
    var $btnTxt = document.querySelector(".aside-btns-list .txt-btn .txt");
    var $menu = document.querySelector(".aside-btns-list .txt-menu");

    // 텍스트 메뉴 펼침
    $btn.addEventListener("click", function () {
      $btn.classList.toggle("on");
      $menu.classList.toggle("on");
    });

    // 텍스트 메뉴 클릭
    $(".txt-menu-btn.large").off("click").on("click", function () {
      $("body *").each(function () {
        $(this).css("font-size", "");
        var size = Number($(this).css("font-size").replace("px", "")) + 1;
        if (size > 1) {
          $(this).css("font-size", size + "px");
        }
      });
      $txtIcon.className = "txt-icon large";
      $btnTxt.innerText = "확대";
      $menu.classList.remove("on");
    });
    $(".txt-menu-btn.normal").off("click").on("click", function () {
      $("body *").each(function () {
        $(this).css("font-size", "");
      });
      $txtIcon.className = "txt-icon normal";
      $btnTxt.innerText = "기본";
      $menu.classList.remove("on");
    });
    $(".txt-menu-btn.small").off("click").on("click", function () {
      $("body *").each(function () {
        $(this).css("font-size", "");
        var size = Number($(this).css("font-size").replace("px", "")) - 1;
        $(this).css("font-size", size + "px");
      });
      $txtIcon.className = "txt-icon small";
      $btnTxt.innerText = "축소";
      $menu.classList.remove("on");
    });
  };

  // 사이드 메뉴 다크 클릭 event
  var asideDarkClick = function asideDarkClick() {
    var $btn = document.querySelector(".dark-btn");
    var $btnTxt = document.querySelector(".dark-btn .txt");
    var $body = document.querySelector("body");
    $btn.addEventListener("click", function () {
      $body.classList.toggle("dark");
      if ($body.classList.contains("dark")) {
        $btnTxt.innerHTML = "\uB77C\uC774\uD2B8<br />\uBAA8\uB4DC";
      } else {
        $btnTxt.innerHTML = "\uB2E4\uD06C<br />\uBAA8\uB4DC";
      }
    });
  };
  window.addEventListener("load", function () {
    selectClick();
    asideShareClick();
    asideTxtClick();
    asideDarkClick();
  });
})();