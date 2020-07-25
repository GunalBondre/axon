$(".slider-one").slick({
  autoplay: true,
  dots: true,
  accessibility: true,
  mobileFirst: true,
  vertical: true,
  prevArrow: ".prev",
  nextArrow: ".next",
});

$(".featured-slider").slick({
  mobileFirst: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  prevArrow: ".prevButton",
  nextArrow: ".nextButton",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

$(".newArrival").slick({
  mobileFirst: true,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  prevArrow: ".newPrevButton",
  nextArrow: ".newButton",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
