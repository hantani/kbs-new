(() => {
  // 뉴스9 슬라이드
  const nineSlide = () => {
    if ($(".news-9-slide .swiper-slide").length > 4) {
      var newsNine = new Swiper(".news-9-slide", {
        slidesPerView: 4,
        spaceBetween: 24,
        slidesPerGroup: 4,
        loopFillGroupWithBlank: true,
        loop: true,
        pagination: {
          el: ".news-9-pagination",
          type: "fraction",
        },
        navigation: {
          nextEl: ".news-9-next",
          prevEl: ".news-9-previous",
        },
      });
    }
  };

  // 주요영상 슬라이드
  const mainVideoSlide = () => {
    if ($(".main-video-slide .swiper-slide").length > 2) {
      var newsNine = new Swiper(".main-video-slide", {
        slidesPerView: 2,
        spaceBetween: 24,
        slidesPerGroup: 2,
        loopFillGroupWithBlank: true,
        loop: true,
        pagination: {
          el: ".main-video-pagination",
          type: "fraction",
        },
        navigation: {
          nextEl: ".main-video-next",
          prevEl: ".main-video-previous",
        },
      });
    }
  };

  // 유튜브 라이브 뉴스 슬라이드
  const youtubeLiveNewsSlide = () => {
    if ($(".youtube-live-news-slide .swiper-slide").length > 2) {
      var newsNine = new Swiper(".youtube-live-news-slide", {
        slidesPerView: 2,
        spaceBetween: 24,
        slidesPerGroup: 2,
        loopFillGroupWithBlank: true,
        loop: true,
        pagination: {
          el: ".youtube-live-news-pagination",
          type: "fraction",
        },
        navigation: {
          nextEl: ".youtube-live-news-next",
          prevEl: ".youtube-live-news-previous",
        },
      });
    }
  };

  // K-SHorts 슬라이드
  const kshortsSlide = () => {
    if ($(".k-shorts-slide .swiper-slide").length > 2) {
      var newsNine = new Swiper(".k-shorts-slide", {
        slidesPerView: 4,
        spaceBetween: 24,
        slidesPerGroup: 4,
        loopFillGroupWithBlank: true,
        loop: true,
        pagination: {
          el: ".k-shorts-pagination",
          type: "fraction",
        },
        navigation: {
          nextEl: ".k-shorts-next",
          prevEl: ".k-shorts-previous",
        },
      });
    }
  };

  // PremiumK 슬라이드
  const premiumkSlide = () => {
    if ($(".crab-slide .swiper-slide").length > 4) {
      var newsNine = new Swiper(".crab-slide", {
        slidesPerView: 4,
        spaceBetween: 24,
        slidesPerGroup: 4,
        loopFillGroupWithBlank: true,
        loop: true,
        pagination: {
          el: ".crab-pagination",
          type: "fraction",
        },
        navigation: {
          nextEl: ".crab-next",
          prevEl: ".crab-previous",
        },
      });
    }

    if ($(".site-video-slide .swiper-slide").length > 4) {
      var newsNine = new Swiper(".site-video-slide", {
        slidesPerView: 4,
        spaceBetween: 24,
        slidesPerGroup: 4,
        loopFillGroupWithBlank: true,
        loop: true,
        pagination: {
          el: ".site-video-pagination",
          type: "fraction",
        },
        navigation: {
          nextEl: ".site-video-next",
          prevEl: ".site-video-previous",
        },
      });
    }

    if ($(".breaking-news-video-slide .swiper-slide").length > 4) {
      var newsNine = new Swiper(".breaking-news-video-slide", {
        slidesPerView: 4,
        spaceBetween: 24,
        slidesPerGroup: 4,
        loopFillGroupWithBlank: true,
        loop: true,
        pagination: {
          el: ".breaking-news-video-pagination",
          type: "fraction",
        },
        navigation: {
          nextEl: ".breaking-news-video-next",
          prevEl: ".breaking-news-video-previous",
        },
      });
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

  window.addEventListener("load", () => {
    nineSlide();
    mainVideoSlide();
    keywordRoll();
    tabClick();
    tooltipClick();
    kshortsSlide();
    youtubeLiveNewsSlide();
    premiumkSlide();
  });
})();
