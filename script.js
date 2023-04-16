$(function () {
  //ハンバーガーメニュー（SP）
  $btnMenu = $("#js-btn-menu");
  $gnav = $(".gnav");

  $btnMenu.on("click", function () {
    $btnMenu.toggleClass("active");
    $gnav.toggleClass("show");
    $gnav.animate({ width: "toggle" }, 200);
  });

  $(document).on("click", function (e) {
    if (
      !$(e.target).closest($gnav).length &&
      !$(e.target).closest($btnMenu).length
    ) {
      if ($gnav.hasClass("show")) {
        $gnav.removeClass("show");
        $btnMenu.toggleClass("active");
        $gnav.animate({ width: "toggle" }, 200);
      }
    }
  });
});
