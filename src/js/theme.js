document.querySelector('.toggleTheme').addEventListener('click', event => {
  event.preventDefault();
  if (localStorage.getItem('theme') === 'dark') {
    localStorage.removeItem('theme');
  } else {
    localStorage.setItem('theme', 'light');
  }
  addDarkClassToHTML();
});
document.querySelector('.toggleTheme-mobile').addEventListener('click', event => {
  event.preventDefault();
  if (localStorage.getItem('theme') === 'dark') {
    localStorage.removeItem('theme');
  } else {
    localStorage.setItem('theme', 'light');
  }
  addDarkClassToHTML();
});

function addDarkClassToHTML() {
  try {
    if (
      localStorage.getItem('theme') === 'light' ||
      localStorage.getItem('theme') !== null
    ) {
      const body = document.body;
      const moon = document.querySelector('.moon');
      const toggleTheme = document.querySelector('.toggleTheme');
      const toggleThemeMobile = document.querySelector('.toggleTheme-mobile');
      toggleTheme.classList.toggle('day');
      toggleThemeMobile.classList.toggle('day');
      moon.classList.toggle('sun');
      body.classList.toggle('light');
      document.querySelector('.secondary').classList.add('light')
      document.querySelector('.other').classList.add('light')
      // document.querySelector('body').classList.add('dark');
      // document.querySelector('.toggleTheme').classList.add('dark');
      // document.querySelector('.toggleTheme-mobile').classList.add('dark');
      // document.querySelector('header').classList.add('dark');
    } else {
      document.querySelector('.hero').classList.remove('dark');
      // document.querySelector('.toggleTheme').classList.remove('dark');
      document.querySelector('header').classList.remove('dark');
    }
  } catch (err) {
    console.log(err);
    console.log('Получається не зловило темну тему', localStorage);
  }
}

addDarkClassToHTML();
