(() => {
  // 슬라이드 함수
  const slideFn = (view, slide, pagination, nextBtn, prevBtn) => {
    const retrunValue = new Swiper(slide, {
      slidesPerView: view,
      spaceBetween: 24,
      slidesPerGroup: view,
      loopFillGroupWithBlank: true,
      loop: true,
      pagination: {
        el: pagination,
        type: "fraction",
      },
      navigation: {
        nextEl: nextBtn,
        prevEl: prevBtn,
      },
    });

    return retrunValue;
  };

  // 뉴스9 슬라이드
  const nineSlide = () => {
    if ($(".news-9-slide .swiper-slide").length > 4) {
      var newsNine = slideFn(
        4,
        ".news-9-slide",
        ".news-9-pagination",
        ".news-9-next",
        ".news-9-previous"
      );
    }
  };

  // 주요영상 슬라이드
  const mainVideoSlide = () => {
    if ($(".main-video-slide .swiper-slide").length > 2) {
      var mainVideoSlide = slideFn(
        2,
        ".main-video-slide",
        ".main-video-pagination",
        ".main-video-next",
        ".main-video-previous"
      );
    }
  };

  // 유튜브 라이브 뉴스 슬라이드
  const youtubeLiveNewsSlide = () => {
    if ($(".youtube-live-news-slide .swiper-slide").length > 2) {
      var youtubeLive = slideFn(
        2,
        ".youtube-live-news-slide",
        ".youtube-live-news-pagination",
        ".youtube-live-news-next",
        ".youtube-live-news-previous"
      );
    }
  };

  // K-SHorts 슬라이드
  const kshortsSlide = () => {
    if ($(".k-shorts-slide .swiper-slide").length > 4) {
      var kShorts = slideFn(
        4,
        ".k-shorts-slide",
        ".k-shorts-pagination",
        ".k-shorts-next",
        ".k-shorts-previous"
      );
    }
  };

  // PremiumK 슬라이드
  const premiumkSlide = () => {
    if ($(".crab-slide .swiper-slide").length > 4) {
      var crab = slideFn(
        4,
        ".crab-slide",
        ".crab-pagination",
        ".crab-next",
        ".crab-previous"
      );
    }

    if ($(".site-video-slide .swiper-slide").length > 4) {
      var siteVideo = slideFn(
        4,
        ".site-video-slide",
        ".site-video-pagination",
        ".site-video-next",
        ".site-video-previous"
      );
    }

    if ($(".breaking-news-video-slide .swiper-slide").length > 4) {
      var breakingNews = slideFn(
        4,
        ".breaking-news-video-slide",
        ".breaking-news-video-pagination",
        ".breaking-news-video-next",
        ".breaking-news-video-previous"
      );
    }
  };

  // 키워드롤
  const keywordRoll = () => {
    var keywordSwiper = new Swiper(".rolling-keyword", {
      direction: "vertical",
      loop: true,
      loopAdditionalSlides: 1,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    });
  };

  // 탭 클릭
  const tabClick = () => {
    $(".tab-btn")
      .off("click")
      .on("click", function () {
        var id = $(this).closest(".tab-btns").data("tab-contents");
        var index = $(this).closest(".tab-btns-list").index();
        $(this).closest(".tab-btns-list").siblings().removeClass("on");
        $(this).closest(".tab-btns-list").addClass("on");
        $("#" + id)
          .find(".tab-contents-list")
          .hide();
        $("#" + id)
          .find(".tab-contents-list")
          .eq(index)
          .show();
      });
  };

  // 툴팁 클릭
  const tooltipClick = () => {
    const $btns = document.querySelectorAll(".tooltip-btn");
    const $closeBtns = document.querySelectorAll(".tooltip .close-btn");

    $btns.forEach(($btn) => {
      $btn.addEventListener("click", () => {
        const $tooptip = $btn.nextElementSibling;

        $tooptip.classList.toggle("on");
      });
    });

    $closeBtns.forEach(($closeBtn) => {
      $closeBtn.addEventListener("click", () => {
        const $tooptip = $closeBtn.parentElement;

        $tooptip.classList.remove("on");
      });
    });
  };

  // 라이브 섹션 클릭 event
  const liveClick = () => {
    const $btn = document.querySelector(".header-live .arrow-btn");
    const $aside = document.querySelector(".aside");

    if ($btn) {
      $btn.addEventListener("click", () => {
        const $headerLive = $btn.parentElement;
        $headerLive.classList.toggle("on");
        $aside.classList.toggle("position-change");
        asideFixed();
      });
    }
  };

  // 사이드 메뉴 위치 세팅
  const setAsidePosition = () => {
    const $aside = document.querySelector(".aside");
    const $headLine = document.querySelector(".head-line");
    const $body = document.querySelector("body");
    const top = $headLine.getBoundingClientRect().top;
    const left = $headLine.getBoundingClientRect().left;

    if ($body.classList.contains("has-live-wrapper")) {
      $aside.style.top = `${top + 234}px`;
    } else {
      $aside.style.top = `${top}px`;
    }

    $aside.style.left = `${left - 98}px`;
  };

  window.addEventListener("load", () => {
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
  });
  window.addEventListener("resize", () => {
    setAsidePosition();
  });
})();
