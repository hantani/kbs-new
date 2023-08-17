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
  });
})();
