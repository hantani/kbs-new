"use strict";

(function () {
  // 수직 롤링 함수
  var verticalRollingFn = function verticalRollingFn(swiper) {
    var retrunValue = new Swiper(swiper, {
      direction: "vertical",
      loop: true,
      loopAdditionalSlides: 1,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      }
    });
    return retrunValue;
  };

  // 속보 롤링 event
  var breakingNewsRolling = function breakingNewsRolling() {
    var breakingNewsSwiper = verticalRollingFn(".breaking-news-swiper");
  };

  // 속보 클릭
  var breakingNewsClick = function breakingNewsClick() {
    var $btn = document.querySelector(".breaking-news.rolling .arrow-btn");
    var $history = document.querySelector(".breaking-news-history-wrapper");
    $btn.addEventListener("click", function () {
      $btn.classList.toggle("on");
      $history.classList.toggle("on");
    });
  };

  // 재난 알림 롤링 event
  var disasterSwiper;
  var disasterRolling = function disasterRolling() {
    disasterSwiper = verticalRollingFn(".disaster-rolling-swiper");
  };
  // 재난 알림 펼침 클릭 event
  var disasterClick = function disasterClick() {
    $(".disaster-rolling-message .arrow-btn").off("click").on("click", function () {
      if ($(this).hasClass("on")) {
        disasterRolling();
        $(".disaster-rolling-message").removeClass("open");
        $(this).removeClass("on");
        $(".rolling-message").each(function (index, el) {
          $(el).removeClass("open");
        });
      } else {
        disasterSwiper.destroy();
        $(".disaster-rolling-list").removeAttr("style");
        $(".disaster-rolling-message").addClass("open");
        $(this).addClass("on");
        $(".rolling-message").each(function (index, el) {
          $(el).addClass("open");
        });
      }
    });
  };

  // 헤더고정
  var headerSticky = function headerSticky() {
    var $topMenu = $(".top-menu");
    var point = $topMenu.offset().top;
    $(window).on("scroll", function () {
      if ($(window).scrollTop() > point) {
        $topMenu.addClass("sticky");
        $(".top-quick-menu").addClass("sticky");
      } else {
        $topMenu.removeClass("sticky");
        $(".top-quick-menu").removeClass("sticky");
      }
    });
  };

  // 서치메뉴 On, Off
  var searchMenuOnOff = function searchMenuOnOff() {
    var $btn = document.querySelector(".search-hamburger .search-btn");
    var $searchMenu = document.querySelector("#header .search-menu");
    var $closeBtn = document.querySelector(".search-input-keywords .close-btn");
    var $body = document.querySelector("body");
    $btn.addEventListener("click", function () {
      $searchMenu.classList.add("on");
      $body.classList.add("hidden");
    });
    $closeBtn.addEventListener("click", function () {
      $searchMenu.classList.remove("on");
      $body.classList.remove("hidden");
    });
  };

  // 서치 인풋 포커스
  var searchFocus = function searchFocus() {
    var $searchMenu = document.querySelector("#header .search-menu");
    var $input = document.querySelector(".search-box .search-input");
    var $recommend = document.querySelector(".search-box .recommend-search");
    var $recommendBtn = document.querySelector(".recommend-search-list .recommend-word");
    $input.addEventListener("focus", function () {
      $input.classList.add("on");
      $recommend.classList.add("on");
    });
    $searchMenu.addEventListener("click", function (e) {
      var target = e.target;
      if (target !== $input && target !== $recommendBtn) {
        $input.classList.remove("on");
        $recommend.classList.remove("on");
      }
    });
  };
  var init = function init() {
    breakingNewsRolling();
    breakingNewsClick();
    disasterRolling();
    disasterClick();
    headerSticky();
    searchMenuOnOff();
    searchFocus();
  };
  window.addEventListener("load", function () {
    init();
  });
})();