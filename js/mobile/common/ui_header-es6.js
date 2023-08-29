(() => {
  // 수직 롤링 함수
  const verticalRollingFn = (swiper) => {
    const retrunValue = new Swiper(swiper, {
      direction: "vertical",
      loop: true,
      loopAdditionalSlides: 1,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    });

    return retrunValue;
  };

  // 속보 롤링 event
  const breakingNewsRolling = () => {
    var breakingNewsSwiper = verticalRollingFn(".breaking-news-swiper");
  };

  // 속보 클릭
  const breakingNewsClick = () => {
    const $btn = document.querySelector(".breaking-news.rolling .arrow-btn");
    const $history = document.querySelector(".breaking-news-history-wrapper");

    $btn.addEventListener("click", () => {
      $btn.classList.toggle("on");
      $history.classList.toggle("on");
    });
  };

  // 재난 알림 롤링 event
  var disasterSwiper;
  const disasterRolling = () => {
    disasterSwiper = verticalRollingFn(".disaster-rolling-swiper");
  };
  // 재난 알림 펼침 클릭 event
  const disasterClick = () => {
    $(".disaster-rolling-message .arrow-btn")
      .off("click")
      .on("click", function () {
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
  const headerSticky = () => {
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
  const searchMenuOnOff = () => {
    const $btn = document.querySelector(".search-hamburger .search-btn");
    const $searchMenu = document.querySelector("#header .search-menu");
    const $closeBtn = document.querySelector(
      ".search-input-keywords .close-btn"
    );
    const $body = document.querySelector("body");

    $btn.addEventListener("click", () => {
      $searchMenu.classList.add("on");
      $body.classList.add("hidden");
    });

    $closeBtn.addEventListener("click", () => {
      $searchMenu.classList.remove("on");
      $body.classList.remove("hidden");
    });
  };

  // 서치 인풋 포커스
  const searchFocus = () => {
    const $searchMenu = document.querySelector("#header .search-menu");
    const $input = document.querySelector(".search-box .search-input");
    const $recommend = document.querySelector(".search-box .recommend-search");
    const $recommendBtn = document.querySelector(
      ".recommend-search-list .recommend-word"
    );

    $input.addEventListener("focus", () => {
      $input.classList.add("on");
      $recommend.classList.add("on");
    });

    $searchMenu.addEventListener("click", (e) => {
      const target = e.target;

      if (target !== $input && target !== $recommendBtn) {
        $input.classList.remove("on");
        $recommend.classList.remove("on");
      }
    });
  };

  const init = () => {
    breakingNewsRolling();
    breakingNewsClick();
    disasterRolling();
    disasterClick();
    headerSticky();
    searchMenuOnOff();
    searchFocus();
  };

  window.addEventListener("load", () => {
    init();
  });
})();
