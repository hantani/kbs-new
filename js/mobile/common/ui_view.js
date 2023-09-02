"use strict";

(function () {
  var swiperFn = function swiperFn(slide, indicator) {
    var rtValue = new Swiper(slide, {
      slidesPerView: 1,
      spaceBetween: 8,
      loop: true,
      pagination: {
        el: indicator
      }
    });
    return rtValue;
  };
  var viewSeriesSwiper = function viewSeriesSwiper() {
    var recommendNews = swiperFn(".view-series-swiper", ".view-series-indicator");
  };
  var viewLikeClick = function viewLikeClick() {
    var $btns = document.querySelectorAll(".view-like .common-button");
    $btns.forEach(function ($btn) {
      $btn.addEventListener("click", function () {
        $btn.classList.toggle("on");
      });
    });
  };

  // 헤더고정
  var headerSticky = function headerSticky() {
    var $topMenu = $(".top-menu");
    var point = $topMenu.offset().top;
    $(window).on("scroll", function () {
      if ($(window).scrollTop() > point) {
        $(".progress-bar").addClass("sticky");
      } else {
        $topMenu.removeClass("sticky");
        $(".progress-bar").removeClass("sticky");
      }
    });
  };
  var progress = function progress() {
    var $status = document.querySelector(".progress-bar .status");
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = winScroll / height * 100;
    $status.style.width = scrolled + "%";
  };
  var init = function init() {
    viewSeriesSwiper();
    viewLikeClick();
    headerSticky();
  };
  window.addEventListener("load", function () {
    init();
  });
  window.addEventListener("scroll", function () {
    progress();
  });
})();