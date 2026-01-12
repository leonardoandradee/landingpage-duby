var swiper = new Swiper(".slide-depoimentos", {
  slidesPerView: 3,
  spaceBetween: 32,
  pagination: {
    el: ".s-testimonials .top .swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 1,
    },
    580: {
      slidesPerView: 1.4,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1.8,
    },
    991: {
      slidesPerView: 2.4,
      spaceBetween: 32,
    },
    1240: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
  },
});

AOS.init({
  duration: 1000,
  once: true,
});
