const section = document.querySelector('.bank-details');
let timeoutId;

section.onclick = event => {
  const elem = event.target;
  if (elem.classList.contains('content-item__info')) {
    navigator.clipboard.writeText(elem.innerHTML).then(() => {
      const copiedMessage = document.createElement('span');
      copiedMessage.classList.add('copied');
      copiedMessage.textContent = 'Скопійовано';
      elem.parentNode.appendChild(copiedMessage);

      clearInterval(timeoutId);

      timeoutId = setTimeout(() => {
        copiedMessage.style.display = 'none';
      }, 800);
    });
  }
};

const contacts = document.querySelector('.contacts-item');

let timeoutId2;

contacts.onclick = event => {
  const elem = event.target;
  if (elem.classList.contains('.copy-text')) {
    navigator.clipboard.writeText(elem.innerHTML).then(() => {
      const copiedMessage = document.createElement('span');
      copiedMessage.classList.add('copied');
      copiedMessage.textContent = 'Скопійовано';
      elem.parentNode.appendChild(copiedMessage);

      clearInterval(timeoutId2);

      timeoutId2 = setTimeout(() => {
        copiedMessage.style.display = 'none';
      }, 800);
    });
  }
};
