const section = document.querySelector('.content');
section.onclick = event => {
  const elem = event.target;
  if (elem.classList.contains('content-item__info')) {
    console.log(elem);
    navigator.clipboard.writeText(elem.innerHTML).then(() => {
      document.querySelector('.copied').style.display = 'inline-block';

      let timer = setTimeout(() => {
        document.querySelector('.copied').style.display = 'none';
      }, 800);

      // clearInterval(timer);
    });
  }
};
