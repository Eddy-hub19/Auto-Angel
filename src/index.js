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

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  mousewheel: {
    forceToAxis: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    375: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
