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

  const init = () => {
    viewSeriesSwiper();
    viewLikeClick();
    headerSticky();
  };

  window.addEventListener("load", () => {
    init();
  });
  window.addEventListener("scroll", () => {
    progress();
  });
})();
