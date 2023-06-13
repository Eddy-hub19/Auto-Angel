let url = window.location.href;

let links = document.getElementsByTagName('a');

for (let i = 0; i < links.length; i++) {
  let link = links[i];
  if (link.href === url) {
    link.classList.add('current');
  } else {
    link.classList.remove('current');
  }
}
