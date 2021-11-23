var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  spaceBetween: 20,
  slidesPerView: 3,
  loop: true,
  setWrapperSize: true,
  coverflowEffect: {
    rotate: 0,
    stretch: -40,
    depth: 100,
    modifier: 0.7,
    slideShadows: false,
  },
  breakpoints: {
    740: {
      slidesPerView: 5,
      spaceBetween: 40,
    },
  },
  // pagination: {
  //   el: ".swiper-pagination",
  // },
});
