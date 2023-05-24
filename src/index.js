const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  speed: 800,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  mousewheel: {
    forceToAxis: true,
  },
});
const swiper2 = new Swiper('.swiper2', {
  direction: 'horizontal',
  loop: true,
  speed: 1000,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  mousewheel: {
    forceToAxis: true,
  },
});

const swiper3 = new Swiper('.swiper3', {
  centeredSlides: true,
  direction: 'horizontal',
  loop: true,
  speed: 1000,
  autoHeight: true,
  slidesPerView: 3,

  // breakpoints: {
  //   // when window width is >= 320px
  //   320: {
  //     slidesPerView: 1,
  //     spaceBetween: 20,
  //   },
  //   // when window width is >= 480px
  //   480: {
  //     slidesPerView: 1,
  //     spaceBetween: 30,
  //   },
  //   // when window width is >= 640px
  //   640: {
  //     slidesPerView: 1,
  //     spaceBetween: 40,
  //   },
  //   900: {
  //     slidesPerView: 1,
  //     spaceBetween: 40,
  //   },
  // },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  mousewheel: {
    forceToAxis: true,
  },

  breakpoints: {
    375: {
      slidesPerView: 1,
      // spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
