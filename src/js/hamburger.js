// Show Hamburger menu
const hamburger = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  hamburger.classList.toggle('top');
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

const menuItem = document.querySelectorAll('.menu-item');

menuItem.forEach(item => {
  item.addEventListener('click', () => {
    hamburger.classList.remove('active');
    hamburger.classList.remove('white');
    menu.classList.remove('active');
  });
});
