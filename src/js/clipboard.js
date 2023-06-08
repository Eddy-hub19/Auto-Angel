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
        copiedMessage.parentNode.removeChild(copiedMessage);
      }, 600);
    });
    clearTimeout(timeoutId);
  } else {
    copiedMessage.parentNode.removeChild(copiedMessage);
  }
};

// refactor this code to use same function and just proviede different selectors
// for example function copyToClipboard(selector) { ... }
const contacts = document.querySelector('.contacts-item');

let timeoutId2;

contacts.onclick = event => {
  debugger;
  const elem = event.target;
  if (elem.classList.contains('contacts-item__desc')) {
    navigator.clipboard.writeText(elem.innerHTML).then(() => {
      const copiedMsg = document.createElement('div');
      copiedMsg.classList.add('copied');
      copiedMsg.textContent = 'Скопійовано';

      clearTimeout(timeoutId2);

      timeoutId2 = setTimeout(() => {
        copiedMsg.style.display = 'none';
      }, 600);
    });
  }
};
