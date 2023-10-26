
$(document).ready(function () {
  $(".header__bar , .offcanvas-overlay").click(function () {
    $(".offcanvas-area , .offcanvas-overlay").addClass("active");
  });
  $(".menu-close , .offcanvas-overlay").click(function () {
    $(".offcanvas-area , .offcanvas-overlay").removeClass("active");
  });
  
  $(".testimonial__slider").owlCarousel({
    items: 1,
    loop: true,
    margin: 22,
    nav: true,
    navText: [
      '<img src="assets/img/arrow-left.svg" alt="">',
      '<img src="assets/img/arrow-right.svg" alt="">',
    ],
    dot: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  $(".product__video__slider").owlCarousel({
    items: 1,
    loop: true,
    margin: 22,
    nav: true,
    dot: false
  });

  $(".phone__slider").owlCarousel({
    items: 1,
    loop: true,
    margin: 22,
    nav: true,
    dot: false
  });
  
  $(".youtube").magnificPopup({
    type: "iframe",
  });

  $(".youtube1").magnificPopup({
    type: "iframe",
  });

  $(".youtube2").magnificPopup({
    type: "iframe",
  });

  $(".youtube3").magnificPopup({
    type: "iframe",
  });
});
