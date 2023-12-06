$(document).ready(function () {
  // 슬라이드
  $(".slide-area").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: $("#aro1_prev"),
    nextArrow: $("#aro1_next"),
  });

  $(".iqos-area-slick").slick({
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          speed: 300,
          arrows: true,
          prevArrow: $("#iaro1_prev"),
          nextArrow: $("#iaro1_next"),
        },
      },
    ],
  });

  // 네비 메뉴
  // $(".brand-bar").click(function () {
  //   $(this).toggleClass("active");
  //   $(".navigation-menu").toggleClass("active");
  // });
  // $(".close-btn").click(function () {
  //   $(".navigation-menu, .brand-bar").removeClass("active");
  // });
});
