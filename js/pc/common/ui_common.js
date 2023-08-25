"use strict";

(function () {
  // 탭 클릭
  var tabClick = function tabClick() {
    $(".tab-btn").off("click").on("click", function () {
      var id = $(this).closest(".tab-btns").data("tab-contents");
      var index = $(this).closest(".tab-btns-list").index();
      $(this).closest(".tab-btns-list").siblings().removeClass("on");
      $(this).closest(".tab-btns-list").addClass("on");
      $("#" + id).find(".tab-contents-list").hide();
      $("#" + id).find(".tab-contents-list").eq(index).show();
    });
  };
  var init = function init() {
    tabClick();
  };
  window.addEventListener("load", function () {
    init();
  });
})();