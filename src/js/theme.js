function toggleTheme() {
  const body = document.body;
  const currentTheme = localStorage.getItem('theme');
  body.classList.toggle('dark', !currentTheme);
  body.classList.toggle('light', currentTheme === 'light');
}

function switchTheme() {
  const body = document.body;
  const moon = document.querySelector('.moon');
  const toggle = document.querySelector('.toggleTheme');
  const toggleThemeMobile = document.querySelector('.toggleTheme-mobile');
  const other = document.querySelector('.other')
  const newTheme = body.classList.contains('light') ? 'dark' : 'light';
  body.classList.toggle('light');
  body.classList.toggle('dark');
  moon.classList.toggle('sun');
  toggle.classList.toggle('day');
  toggleThemeMobile.classList.toggle('day');
  body.style.transition = 'all 1s ease-out';
  other.classList.toggle('light')
  localStorage.setItem('theme', newTheme);
}

document.addEventListener('DOMContentLoaded', function () {
  const themeToggle = document.getElementById('themeToggle');
  const themeToggleMobile = document.getElementById('themeToggleMobile');
  toggleTheme();

  themeToggle.addEventListener('click', switchTheme);
  themeToggleMobile.addEventListener('click', switchTheme);
});
