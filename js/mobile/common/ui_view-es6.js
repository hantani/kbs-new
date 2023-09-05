(() => {
  const swiperFn = (slide, indicator) => {
    const rtValue = new Swiper(slide, {
      slidesPerView: 1,
      spaceBetween: 8,
      loop: true,
      pagination: {
        el: indicator,
      },
    });

    return rtValue;
  };

  const viewSeriesSwiper = () => {
    var recommendNews = swiperFn(
      ".view-series-swiper",
      ".view-series-indicator"
    );
  };

  const viewLikeClick = () => {
    const $btns = document.querySelectorAll(".view-like .common-button");

    $btns.forEach(($btn) => {
      $btn.addEventListener("click", () => {
        $btn.classList.toggle("on");
      });
    });
  };

  // 헤더고정
  const headerSticky = () => {
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

  const progress = () => {
    const $status = document.querySelector(".progress-bar .status");
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    $status.style.width = scrolled + "%";
  };

  const ttsPopup = () => {
    const $btn = document.querySelector(".tts-btn");
    const $popup = document.querySelector(".tts-popup");
    const $dim = document.querySelector(".dim");
    const $checkBtn = document.querySelector(".tts-popup .check-btn");

    $btn.addEventListener("click", () => {
      $popup.classList.toggle("on");
      $dim.classList.toggle("on");
      $btn.classList.toggle("on");
    });

    $checkBtn.addEventListener("click", () => {
      $popup.classList.remove("on");
      $dim.classList.remove("on");
      $btn.classList.remove("on");
    });

    $dim.addEventListener("click", () => {
      $popup.classList.remove("on");
      $dim.classList.remove("on");
      $btn.classList.remove("on");
    });
  };

  const summaryPopup = () => {
    const $btn = document.querySelector(".summary-btn");
    const $popup = document.querySelector(".summary-popup");
    const $dim = document.querySelector(".dim");
    const $closeBtn = document.querySelector(".summary-popup .close-btn");

    $btn.addEventListener("click", () => {
      $popup.classList.toggle("on");
      $dim.classList.toggle("on");
    });

    $dim.addEventListener("click", () => {
      $popup.classList.remove("on");
      $dim.classList.remove("on");
    });

    $closeBtn.addEventListener("click", () => {
      $popup.classList.remove("on");
      $dim.classList.remove("on");
    });
  };

  const init = () => {
    viewSeriesSwiper();
    viewLikeClick();
    headerSticky();
    ttsPopup();
    summaryPopup();
  };

  window.addEventListener("load", () => {
    init();
  });
  window.addEventListener("scroll", () => {
    progress();
  });
})();
