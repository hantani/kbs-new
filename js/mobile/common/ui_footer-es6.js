(() => {
  const appLinkClick = () => {
    const $btn = document.querySelector(
      ".application-download-links .open-btn"
    );
    const $appLinks = document.querySelector(
      ".application-download-links .app-links"
    );

    $btn.addEventListener("click", () => {
      $btn.classList.toggle("on");
      $appLinks.classList.toggle("on");
    });
  };

  const init = () => {
    appLinkClick();
  };

  window.addEventListener("load", () => {
    init();
  });
})();
