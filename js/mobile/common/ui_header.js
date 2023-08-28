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
  var init = function init() {
    breakingNewsRolling();
    breakingNewsClick();
    disasterRolling();
    disasterClick();
  };
  window.addEventListener("load", function () {
    init();
  });
})();