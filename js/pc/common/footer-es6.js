(() => {
  // 셀렉트 메뉴 클릭 event
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

  // 사이드 메뉴 공유 메뉴 클릭 event
  const asideShareClick = () => {
    const $btn = document.querySelector(".aside-btns-list .share-btn");
    const $closeBtn = document.querySelector(".share-menu .close-btn");
    const $dim = document.querySelector(".dim");
    const $menu = document.querySelector(".share-menu");
    const $nav = document.querySelector(".header-nav-wrapper");

    $btn.addEventListener("click", () => {
      $dim.classList.toggle("on");
      $menu.classList.toggle("on");
      $nav.classList.toggle("index-change");
    });

    $closeBtn.addEventListener("click", () => {
      $dim.classList.remove("on");
      $menu.classList.remove("on");
      $nav.classList.remove("index-change");
    });

    $dim.addEventListener("click", () => {
      $dim.classList.remove("on");
      $menu.classList.remove("on");
      $nav.classList.remove("index-change");
    });
  };

  // 사이드 메뉴 텍스트 메뉴 클릭 event
  const asideTxtClick = () => {
    const $btn = document.querySelector(".aside-btns-list .txt-btn");
    const $txtIcon = document.querySelector(
      ".aside-btns-list .txt-btn .txt-icon"
    );
    const $btnTxt = document.querySelector(".aside-btns-list .txt-btn .txt");
    const $menu = document.querySelector(".aside-btns-list .txt-menu");

    // 텍스트 메뉴 펼침
    $btn.addEventListener("click", () => {
      $btn.classList.toggle("on");
      $menu.classList.toggle("on");
    });

    // 텍스트 메뉴 클릭
    $(".txt-menu-btn.large")
      .off("click")
      .on("click", function () {
        $("body *").each(function () {
          $(this).css("font-size", "");
          var size = Number($(this).css("font-size").replace("px", "")) + 1;
          if (size > 1) {
            $(this).css("font-size", size + "px");
          }
        });
        $txtIcon.className = "txt-icon large";
        $btnTxt.innerText = "확대";
        $menu.classList.remove("on");
      });
    $(".txt-menu-btn.normal")
      .off("click")
      .on("click", function () {
        $("body *").each(function () {
          $(this).css("font-size", "");
        });
        $txtIcon.className = "txt-icon normal";
        $btnTxt.innerText = "기본";
        $menu.classList.remove("on");
      });
    $(".txt-menu-btn.small")
      .off("click")
      .on("click", function () {
        $("body *").each(function () {
          $(this).css("font-size", "");
          var size = Number($(this).css("font-size").replace("px", "")) - 1;
          $(this).css("font-size", size + "px");
        });
        $txtIcon.className = "txt-icon small";
        $btnTxt.innerText = "축소";
        $menu.classList.remove("on");
      });
  };

  // 사이드 메뉴 다크 클릭 event
  const asideDarkClick = () => {
    const $btn = document.querySelector(".dark-btn");
    const $btnTxt = document.querySelector(".dark-btn .txt");
    const $body = document.querySelector("body");

    $btn.addEventListener("click", () => {
      $body.classList.toggle("dark");
      if ($body.classList.contains("dark")) {
        $btnTxt.innerHTML = `라이트<br />모드`;
      } else {
        $btnTxt.innerHTML = `다크<br />모드`;
      }
    });
  };

  window.addEventListener("load", () => {
    selectClick();
    asideShareClick();
    asideTxtClick();
    asideDarkClick();
  });
})();
