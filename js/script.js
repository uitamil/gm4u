var owl = $(".banner-carousel");
owl.owlCarousel({
  items: 1,
  loop: true,
  nav: false,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
});

var owl1 = $(".testimonial-carousel");
owl1.owlCarousel({
  items: 3,
  loop: true,
  nav: false,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
});
