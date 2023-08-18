(() => {
  const selectClick = () => {
    const $btns = document.querySelectorAll(".footer-select-btn");

    $btns.forEach(($btn) => {
      $btn.addEventListener("click", () => {
        const $commonSelectLinks = $btn.nextElementSibling;
        $btn.classList.toggle("on");
        $commonSelectLinks.classList.toggle("on");
      });
    });
  };

  window.addEventListener("load", () => {
    selectClick();
  });
})();
