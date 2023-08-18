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
  var disasterSwiper;
  const disasterRolling = () => {
    disasterSwiper = new Swiper(".disaster-rolling-swiper", {
      direction: "vertical",
      loop: true,
      loopAdditionalSlides: 1,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    });
  };
  // 재난 알림 펼침 클릭 event
  const disasterClick = () => {
    $(".disaster-rolling .arrow-btn")
      .off("click")
      .on("click", function () {
        if ($(this).hasClass("on")) {
          disasterRolling();
          $(".disaster-rolling").removeClass("open");
          $(this).removeClass("on");
        } else {
          disasterSwiper.destroy();
          $(".disaster-rolling-list").removeAttr("style");
          $(".disaster-rolling").addClass("open");
          $(this).addClass("on");
          if ($(".disaster-rolling .swiper-wrapper").height() > 414) {
            $(".disaster-rolling-swiper").addClass("overflow-y");
          }
        }
      });
  };

  // KBS WORLD 클릭 event
  const worldSelect = () => {
    const $menu = document.querySelector("#header .foreign-site-links");
    const $btn = document.querySelector("#header .kbs-world-select-btn");

    $btn.addEventListener("click", () => {
      $btn.classList.toggle("on");
      $menu.classList.toggle("on");
    });
  };

  // 햄버거 버튼 클릭 event
  const hamburgerClick = () => {
    const $btn = document.querySelector(".hamburger-btn");
    const $navMenu = document.querySelector(".header-nav");
    const $fullMenu = document.querySelector(".full-menu-wrapper");
    const $navLinks = document.querySelectorAll(".nav-link");
    const $commonMenues = document.querySelectorAll(".common-menu");
    const $dim = document.querySelector(".dim");

    $btn.addEventListener("click", () => {
      if ($btn.classList.contains("on")) {
        $btn.classList.remove("on");
        $navMenu.classList.remove("on");
        $fullMenu.classList.remove("on");
        $dim.classList.remove("on");
        $navLinks.forEach(($navLink) => {
          $navLink.classList.remove("on");
        });
        $commonMenues.forEach(($commonMenu) => {
          $commonMenu.classList.remove("on");
        });
      } else if (!$btn.classList.contains("on")) {
        $btn.classList.add("on");
        $navMenu.classList.add("on");
        $fullMenu.classList.add("on");
        $dim.classList.add("on");
      }
    });
  };

  // 네비게이션 메뉴 클릭 event
  const navMenuClick = () => {
    const menuNames = ["분야별", "TV 뉴스", "프리미엄K", "시사", "지역"];
    const $navLinks = document.querySelectorAll(".nav-link");
    const $fullMenu = document.querySelector(".full-menu-wrapper");
    const $dim = document.querySelector(".dim");
    const $fullMenuNames = document.querySelectorAll(".full-menu-heading");
    let $onNavLink;

    $navLinks.forEach(($navLink) => {
      $navLink.addEventListener("click", () => {
        const menuName = $navLink.innerText;
        if (menuNames.includes(menuName)) {
          if ($onNavLink) {
            $onNavLink.classList.remove("on");
          }

          $navLink.classList.add("on");
          $onNavLink = $navLink;

          $fullMenuNames.forEach(($fullMenuName) => {
            const fullMenuName = $fullMenuName.innerText;
            const $commonMenu = $fullMenuName.parentElement.parentElement;
            $commonMenu.classList.remove("on");

            if (fullMenuName === menuName) {
              $commonMenu.classList.add("on");
            }
          });
        }

        if (!$fullMenu.classList.contains("on")) {
          $fullMenu.classList.add("on");
          $dim.classList.add("on");
        }
      });
    });
  };

  // 서치 버튼 클릭 event
  const searchClick = () => {
    const $btn = document.querySelector(".hamburger-search-btns .search-btn");
    const $closeBtn = document.querySelector(".search .close-btn");
    const $hamburgerBtn = document.querySelector(".hamburger-btn");
    const $fullMenu = document.querySelector(".full-menu-wrapper");
    const $navLinks = document.querySelectorAll(".nav-link");
    const $commonMenues = document.querySelectorAll(".full-menu .common-menu");
    const $searchMenu = document.querySelector(".search-most-view");
    const $dim = document.querySelector(".dim");

    $btn.addEventListener("click", () => {
      if ($fullMenu.classList.contains("on")) {
        $fullMenu.classList.remove("on");
      }

      if ($hamburgerBtn.classList.contains("on")) {
        $hamburgerBtn.classList.remove("on");
      }

      $navLinks.forEach(($navLink) => {
        $navLink.classList.remove("on");
      });
      $commonMenues.forEach(($commonMenu) => {
        $commonMenu.classList.remove("on");
      });

      $searchMenu.classList.add("on");
      $dim.classList.add("on");
    });

    $closeBtn.addEventListener("click", () => {
      $searchMenu.classList.remove("on");
      $dim.classList.remove("on");
    });
  };

  // 스크롤시 네비게이션 메뉴 고정 event
  const navFixed = () => {
    var menuBar = $(".header-nav-wrapper");
    var point = menuBar.offset().top;
    $(window).on("scroll", function () {
      if ($(window).scrollTop() > point) {
        menuBar.addClass("fixed");
      } else {
        menuBar.removeClass("fixed");
      }
    });
  };

  // 라이브 섹션 클릭 event
  const liveClick = () => {
    const $btn = document.querySelector(".header-live .arrow-btn");

    $btn.addEventListener("click", () => {
      const $headerLive = $btn.parentElement;
      $headerLive.classList.toggle("on");
    });
  };

  // 딤 화면 클릭 event
  const dimClick = () => {
    const $dim = document.querySelector(".dim");
    const $searchMenu = document.querySelector(".search-most-view");
    const $nav = document.querySelector(".header-nav");
    const $hamburgerBtn = document.querySelector(".hamburger-btn");
    const $fullMenu = document.querySelector(".full-menu-wrapper");
    const $navLinks = document.querySelectorAll(".nav-link");
    const $commonMenues = document.querySelectorAll(".common-menu");

    $dim.addEventListener("click", () => {
      $dim.classList.remove("on");
      $searchMenu.classList.remove("on");
      $nav.classList.remove("on");
      $hamburgerBtn.classList.remove("on");
      $fullMenu.classList.remove("on");
      $navLinks.forEach(($navLink) => {
        $navLink.classList.remove("on");
      });
      $commonMenues.forEach(($commonMenu) => {
        $commonMenu.classList.remove("on");
      });
    });
  };

  window.addEventListener("load", () => {
    weatherRolling();
    disasterRolling();
    worldSelect();
    hamburgerClick();
    navMenuClick();
    navFixed();
    searchClick();
    liveClick();
    dimClick();
    disasterClick();
  });
})();
