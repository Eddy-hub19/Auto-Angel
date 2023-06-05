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

      timeoutId = setTimeout(() => {
        copiedMessage.style.display = 'none';
      }, 800);
    });
    clearTimeout(timeoutId);
  }
};

const contacts = document.querySelector(".contacts");

let timeoutId2;

contacts.onclick = event => {
  const elem = event.target;
  if (elem.classList.contains('copy-text')) {
    navigator.clipboard.writeText(elem.innerHTML).then(() => {
      const copiedMsg = document.createElement('div');
      copiedMsg.classList.add('copied');
      copiedMsg.textContent = 'Скопійовано';
      elem.parentNode.appendChild(copiedMsg);

      clearTimeout(timeoutId2);

      timeoutId2 = setTimeout(() => {
        copiedMsg.style.display = 'none';
      }, 800);
    });
  }
};
