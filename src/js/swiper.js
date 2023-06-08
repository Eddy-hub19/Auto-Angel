const swiper = new Swiper('.swiper1', {
  direction: 'horizontal',
  loop: true,
  speed: 800,

  navigation: {
    nextEl: '.swiper-button-next1',
    prevEl: '.swiper-button-prev1',
  },

  mousewheel: {
    forceToAxis: true,
  },
});

const swiper2 = new Swiper('.swiper2', {
  direction: 'horizontal',
  loop: true,
  speed: 1000,

  navigation: {
    nextEl: '.swiper-button-next2',
    prevEl: '.swiper-button-prev2',
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
  slidesPerView: 1,

  navigation: {
    nextEl: '.swiper-button-next3',
    prevEl: '.swiper-button-prev3',
  },

  mousewheel: {
    forceToAxis: true,
  },

  breakpoints: {
    375: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    1440: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
  },
});

const swiper4 = new Swiper('.swiper4', {
  centeredSlides: true,
  direction: 'horizontal',
  loop: true,
  speed: 1000,
  autoHeight: true,
  slidesPerView: 1,

  navigation: {
    nextEl: '.swiper-button-next4',
    prevEl: '.swiper-button-prev4',
  },

  mousewheel: {
    forceToAxis: true,
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
