(() => {
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

  window.addEventListener("load", () => {
    weatherRolling();
    disasterRolling();
  });
})();
