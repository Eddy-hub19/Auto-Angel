// Show Hamburger menu
const hamburger = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  menu.classList.toggle('active');
});

const closeButton = document.querySelector('.close-btn');
closeButton.addEventListener('click', () => {
  if (closeButton.classList.contains('white')) {
    closeButton.classList.remove('white');
    hamburger.style.background = 'transparent';
  } else {
    closeButton.classList.add('white');
    hamburger.style.background = '#e8e8e8';
  }
});

const light = document.querySelector('.light')
light.document.style.background = "#262626"

menu.addEventListener('click', () => {
  if (menu.classList.contains('active')) {
    // hamburger.classList.remove('white');
    menu.classList.remove('active');
    hamburger.classList.remove('active');
  }
});
