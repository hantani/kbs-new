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

  // 뉴스9 슬라이드
  var nineSlide = function nineSlide() {
    if ($(".news-9-slide .swiper-slide").length > 4) {
      var newsNine = slideFn(4, ".news-9-slide", ".news-9-pagination", ".news-9-next", ".news-9-previous");
    } else if ($(".news-9-slide .swiper-slide").length <= 4) {
      var newsNine = noNaviSlideFn(4, ".news-9-slide", ".news-9-pagination");
    }
  };

  // 주요영상 슬라이드
  var mainVideoSlide = function mainVideoSlide() {
    if ($(".main-video-slide .swiper-slide").length > 2) {
      var mainVideoSlide = slideFn(2, ".main-video-slide", ".main-video-pagination", ".main-video-next", ".main-video-previous");
    } else if ($(".main-video-slide .swiper-slide").length <= 2) {
      var mainVideoSlide = noNaviSlideFn(2, ".main-video-slide", ".main-video-pagination");
    }
  };

  // 유튜브 라이브 뉴스 슬라이드
  var youtubeLiveNewsSlide = function youtubeLiveNewsSlide() {
    if ($(".youtube-live-news-slide .swiper-slide").length > 2) {
      var youtubeLive = slideFn(2, ".youtube-live-news-slide", ".youtube-live-news-pagination", ".youtube-live-news-next", ".youtube-live-news-previous");
    } else if ($(".youtube-live-news-slide .swiper-slide").length <= 2) {
      var youtubeLive = noNaviSlideFn(2, ".youtube-live-news-slide", ".youtube-live-news-pagination");
    }
  };

  // K-SHorts 슬라이드
  var kshortsSlide = function kshortsSlide() {
    if ($(".k-shorts-slide .swiper-slide").length > 4) {
      var kShorts = slideFn(4, ".k-shorts-slide", ".k-shorts-pagination", ".k-shorts-next", ".k-shorts-previous");
    } else if ($(".k-shorts-slide .swiper-slide").length <= 4) {
      var kShorts = noNaviSlideFn(4, ".k-shorts-slide", ".k-shorts-pagination");
    }
  };

  // PremiumK 슬라이드
  var premiumkSlide = function premiumkSlide() {
    if ($(".crab-slide .swiper-slide").length > 4) {
      var crab = slideFn(4, ".crab-slide", ".crab-pagination", ".crab-next", ".crab-previous");
    } else if ($(".crab-slide .swiper-slide").length <= 4) {
      var crab = noNaviSlideFn(4, ".crab-slide", ".crab-pagination");
    }
    if ($(".site-video-slide .swiper-slide").length > 4) {
      var siteVideo = slideFn(4, ".site-video-slide", ".site-video-pagination", ".site-video-next", ".site-video-previous");
    } else if ($(".site-video-slide .swiper-slide").length <= 4) {
      var siteVideo = noNaviSlideFn(4, ".site-video-slide", ".site-video-pagination");
    }
    if ($(".breaking-news-video-slide .swiper-slide").length > 4) {
      var breakingNews = slideFn(4, ".breaking-news-video-slide", ".breaking-news-video-pagination", ".breaking-news-video-next", ".breaking-news-video-previous");
    } else if ($(".breaking-news-video-slide .swiper-slide").length <= 4) {
      var breakingNews = noNaviSlideFn(4, ".breaking-news-video-slide", ".breaking-news-video-pagination");
    }
  };

  // 키워드롤
  var keywordRoll = function keywordRoll() {
    var keywordSwiper = new Swiper(".rolling-keyword", {
      direction: "vertical",
      loop: true,
      loopAdditionalSlides: 1,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      }
    });
  };

  // 탭 클릭
  var tabClick = function tabClick() {
    $(".tab-btn").off("click").on("click", function () {
      var id = $(this).closest(".tab-btns").data("tab-contents");
      var index = $(this).closest(".tab-btns-list").index();
      $(this).closest(".tab-btns-list").siblings().removeClass("on");
      $(this).closest(".tab-btns-list").addClass("on");
      $("#" + id).find(".tab-contents-list").hide();
      $("#" + id).find(".tab-contents-list").eq(index).show();
    });
  };

  // 툴팁 클릭
  var tooltipClick = function tooltipClick() {
    var $btns = document.querySelectorAll(".tooltip-btn");
    var $closeBtns = document.querySelectorAll(".tooltip .close-btn");
    $btns.forEach(function ($btn) {
      $btn.addEventListener("click", function () {
        var $tooptip = $btn.nextElementSibling;
        $tooptip.classList.toggle("on");
      });
    });
    $closeBtns.forEach(function ($closeBtn) {
      $closeBtn.addEventListener("click", function () {
        var $tooptip = $closeBtn.parentElement;
        $tooptip.classList.remove("on");
      });
    });
  };

  // 라이브 섹션 클릭 event
  var liveClick = function liveClick() {
    var $btn = document.querySelector(".header-live .arrow-btn");
    var $aside = document.querySelector(".aside");
    if ($btn) {
      $btn.addEventListener("click", function () {
        var $headerLive = $btn.parentElement;
        $headerLive.classList.toggle("on");
        $aside.classList.toggle("position-change");
        setAsidePosition();
      });
    }
  };

  // 사이드 메뉴 위치 세팅
  var setAsidePosition = function setAsidePosition() {
    var $aside = document.querySelector(".aside");
    var $headLine = document.querySelector(".head-line");
    var $body = document.querySelector("body");
    var top = $headLine.getBoundingClientRect().top;
    var left = $headLine.getBoundingClientRect().left;
    if ($body.classList.contains("has-live-wrapper")) {
      $aside.style.top = top + 234 + "px";
    } else {
      $aside.style.top = top + "px";
    }
    $aside.style.left = left - 98 + "px";
  };

  // 스크롤시 어사이드 고정 event
  var asideFixed = function asideFixed() {
    var $aside = $(".aside");
    var $headLine = $(".head-line");
    var point = $headLine.offset().top;
    $(window).on("scroll", function () {
      if ($(window).scrollTop() > point - 20) {
        $aside.addClass("fixed");
      } else if ($(window).scrollTop() <= point) {
        $aside.removeClass("fixed");
      }
    });
  };
  window.addEventListener("load", function () {
    nineSlide();
    mainVideoSlide();
    keywordRoll();
    tabClick();
    tooltipClick();
    kshortsSlide();
    youtubeLiveNewsSlide();
    premiumkSlide();
    setAsidePosition();
    liveClick();
    asideFixed();
  });
  window.addEventListener("resize", function () {
    setAsidePosition();
  });
})();