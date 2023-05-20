const swiper = new Swiper('.swiper', {
  // Optional parameters
  slidesPerView: 'auto',
  spaceBetween: 30,
  // centeredSlides: true,
  direction: 'horizontal',
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  mousewheel: {
    forceToAxis: true,
  },

  // breakpoints: {
  //   375: {
  //     slidesPerView: 1,
  //     spaceBetween: 10,
  //   },
  //   768: {
  //     slidesPerView: 2,
  //     spaceBetween: 20,
  //   },
  //   20000: {
  //     slidesPerView: 1,
  //     spaceBetween: 30,
  //   },
  // },
});
