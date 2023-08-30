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

  // 어사이드 스크롤
  const asideScroll = () => {
    var lastScrollTop = 0;
    $(window).scroll(function () {
      var st = $(this).scrollTop();
      if (st > lastScrollTop) {
        $(".top-btn").hide();
        $("aside").hide();
      } else {
        $(".top-btn").show();
        $("aside").show();
      }
      lastScrollTop = st;
    });
  };

  // 어사이드 공유
  const asideShare = () => {
    const $btn = document.querySelector(".aside-btn.share-btn");
    const $closeBtn = document.querySelector(".popup.share-menu .close-btn");
    const $popup = document.querySelector(".popup.share-menu");
    const $dim = document.querySelector(".dim");

    $btn.addEventListener("click", () => {
      $popup.classList.toggle("on");
      $dim.classList.toggle("on");
    });

    $closeBtn.addEventListener("click", () => {
      $popup.classList.remove("on");
      $dim.classList.remove("on");
    });

    $dim.addEventListener("click", () => {
      $popup.classList.remove("on");
      $dim.classList.remove("on");
    });
  };

  // 어사이드 텍스트 메뉴
  const asideTxt = () => {
    const $offBtn = document.querySelector(".aside-btn.txt-btn");
    const $onBtn = document.querySelector(
      ".aside-btns .btn-menu-list .txt-btn"
    );
    const $btnMenu = document.querySelector(".aside-btns-list .btn-menu");

    $offBtn.addEventListener("click", () => {
      $offBtn.classList.add("off");
      $btnMenu.classList.add("on");
    });

    $onBtn.addEventListener("click", () => {
      $btnMenu.classList.remove("on");
      $offBtn.classList.remove("off");
    });

    // 텍스트 메뉴 클릭
    $(".common-btn.large-btn")
      .off("click")
      .on("click", function () {
        $("body *").each(function () {
          $(this).css("font-size", "");
          var size = Number($(this).css("font-size").replace("px", "")) + 1;
          if (size > 1) {
            $(this).css("font-size", size + "px");
          }
        });
        $btnMenu.classList.remove("on");
        $offBtn.classList.remove("off");
      });
    $(".common-btn.normal-btn")
      .off("click")
      .on("click", function () {
        $("body *").each(function () {
          $(this).css("font-size", "");
        });
        $btnMenu.classList.remove("on");
        $offBtn.classList.remove("off");
      });
    $(".common-btn.small-btn")
      .off("click")
      .on("click", function () {
        $("body *").each(function () {
          $(this).css("font-size", "");
          var size = Number($(this).css("font-size").replace("px", "")) - 1;
          $(this).css("font-size", size + "px");
        });
        $btnMenu.classList.remove("on");
        $offBtn.classList.remove("off");
      });
  };

  // 탑 버튼
  const topBtn = () => {
    const $btn = document.querySelector(".top-btn");
    $btn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  };

  // 다크모드
  const asideDark = () => {
    const $btn = document.querySelector(".aside-btn.dark-btn");
    const $body = document.querySelector("body");

    $btn.addEventListener("click", () => {
      $body.classList.toggle("dark");
    });
  };

  const init = () => {
    appLinkClick();
    asideScroll();
    asideShare();
    asideTxt();
    topBtn();
    asideDark();
  };

  window.addEventListener("load", () => {
    init();
  });
})();
