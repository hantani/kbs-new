"use strict";

(function () {
  // 슬라이드 함수
  var slideFn = function slideFn(view, slide, pagination, nextBtn, prevBtn) {
    var retrunValue = new Swiper(slide, {
      slidesPerView: view,
      spaceBetween: 24,
      slidesPerGroup: view,
      loopFillGroupWithBlank: true,
      loop: true,
      pagination: {
        el: pagination,
        type: "fraction"
      },
      navigation: {
        nextEl: nextBtn,
        prevEl: prevBtn
      }
    });
    return retrunValue;
  };

  // 내비게이션 없는 슬라이드 함수
  var noNaviSlideFn = function noNaviSlideFn(view, slide, pagination) {
    var retrunValue = new Swiper(slide, {
      slidesPerView: view,
      spaceBetween: 24,
      slidesPerGroup: view,
      loopFillGroupWithBlank: true,
      loop: true,
      pagination: {
        el: pagination,
        type: "fraction"
      }
    });
    return retrunValue;
  };

  // 시리즈 슬라이드
  var seriesSlide = function seriesSlide() {
    if ($(".view-series-slide .swiper-slide").length > 4) {
      var newsNine = slideFn(4, ".view-series-slide", ".view-series-pagination", ".view-series-next", ".view-series-previous");
    } else if ($(".view-series-swiper .swiper-slide").length <= 4) {
      var newsNine = noNaviSlideFn(4, ".view-series-slide", ".view-series-pagination");
    }
  };

  // 좋아요 클릭
  var likeClick = function likeClick() {
    var $btns = document.querySelectorAll(".positive-btn");
    $btns.forEach(function ($btn) {
      $btn.addEventListener("click", function () {
        $btn.classList.toggle("on");
      });
    });
  };

  // 요약 팝업
  var summaryPopup = function summaryPopup() {
    var $btn = document.querySelector(".summary-btn");
    var $closeBtn = document.querySelector(".summary-popup .close-btn");
    var $popup = document.querySelector(".summary-popup");
    var $dim = document.querySelector(".dim");
    var $nav = document.querySelector(".header-nav-wrapper");
    $btn.addEventListener("click", function () {
      $popup.classList.toggle("on");
      $dim.classList.toggle("on");
      $nav.classList.toggle("index-change");
    });
    $closeBtn.addEventListener("click", function () {
      $popup.classList.remove("on");
      $dim.classList.remove("on");
      $nav.classList.remove("index-change");
    });
    $dim.addEventListener("click", function () {
      $popup.classList.remove("on");
      $dim.classList.remove("on");
      $nav.classList.remove("index-change");
    });
  };
  var init = function init() {
    likeClick();
    seriesSlide();
    summaryPopup();
  };
  window.addEventListener("load", function () {
    init();
  });
})();