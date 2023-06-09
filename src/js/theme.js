document.querySelector('.toggleTheme').addEventListener('click', event => {
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
    if (localStorage.getItem('theme') === 'light') {
      const body = document.body;
      const moon = document.querySelector('.moon');
      const toggleTheme = document.querySelector('.toggleTheme');
      toggleTheme.classList.toggle('day');
      moon.classList.toggle('sun');
      body.classList.toggle('light');
      document.querySelector('body').classList.add('dark');
      document.querySelector('.themetoggle').classList.add('dark');
      document.querySelector('header').classList.add('dark');
    } else {
      document.querySelector('.hero').classList.remove('dark');
      document.querySelector('.themetoggle').classList.remove('dark');
      document.querySelector('header').classList.remove('dark');
    }
  } catch (err) {
    console.log(err);
    console.log('message Получається не зловило темну тему');
  }
}

addDarkClassToHTML();
