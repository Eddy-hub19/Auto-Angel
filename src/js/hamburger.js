// Show Hamburger menu
const hamburger = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  hamburger.classList.toggle('top');
  menu.classList.toggle('active');
  document.body.classList.add('no-scroll');
});

// Close Hamburger menu on click btn
const closeButton = document.querySelector('.close-btn');
closeButton.addEventListener('click', () => {
  if (closeButton.classList.contains('white')) {
    closeButton.classList.remove('white');
    document.body.classList.remove('no-scroll');
    hamburger.style.background = 'transparent';
  } else {
    closeButton.classList.add('white');
    hamburger.style.background = '#e8e8e8';
  }
});

// Go to anchor by link
const menuItem = document.querySelectorAll('.menu-item');
menuItem.forEach(item => {
  item.addEventListener('click', () => {
    hamburger.classList.remove('active');
    hamburger.classList.remove('white');
    document.body.classList.remove('no-scroll');
    menu.classList.remove('active');
  });
});
