// Сhange-theme

function changeTheme() {
  const body = document.body
  const moon = document.querySelector(".moon")
  const toggleTheme = document.querySelector(".toggleTheme")
  body.classList.toggle("light")
  moon.classList.toggle("sun")
  toggleTheme.classList.toggle("day")
}

// const light = document.querySelector('.light')
// light.style.background = "#262626"