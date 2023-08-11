(() => {
  // 날씨 롤링 event
  const weatherRolling = () => {
    var weatherSwiper = new Swiper(".weather", {
      direction: "vertical",
      loop: true,
      loopAdditionalSlides: 1,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    });
  };

  // 재난 알림 롤링 event
  const disasterRolling = () => {
    var disasterSwiper = new Swiper(".disaster-rolling-swiper", {
      direction: "vertical",
      loop: true,
      loopAdditionalSlides: 1,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    });
  };

  // KBS WORLD select
  const worldSelect = () => {
    const $menu = document.querySelector("#header .foreign-site-links");
    const $btn = document.querySelector("#header .kbs-world-select-btn");

    $btn.addEventListener("click", () => {
      $btn.classList.toggle("on");
      $menu.classList.toggle("on");
    });
  };

  window.addEventListener("load", () => {
    weatherRolling();
    disasterRolling();
    worldSelect();
  });
})();
