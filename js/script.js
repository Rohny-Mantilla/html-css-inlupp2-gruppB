var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  spaceBetween: 10,
  slidesPerView: 3,
  loop: true,
  setWrapperSize: true,
  slideActiveClass: "centrum",
  slideBlankClass: "resten",
  coverflowEffect: {
    rotate: 0,
    stretch: -40,
    depth: 100,
    modifier: 0.7,
    slideShadows: false,
  },
  breakpoints: {
    590: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  },
  // pagination: {
  //   el: ".swiper-pagination",
  // },
});
