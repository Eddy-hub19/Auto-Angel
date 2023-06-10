const section = document.querySelector('.bank-details');
let timeoutId;

section.onclick = event => {
  const elem = event.target;
  if (elem.classList.contains('content-item__info')) {
    const text = elem.innerText;
    navigator.clipboard.writeText(text).then(() => {
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

const contactsItems = document.querySelectorAll('.contacts-item');

let timeoutIds = [];

contactsItems.forEach(item => {
  item.onclick = event => {
    const elem = event.target;
    if (elem.classList.contains('contacts-item__desc')) {
      const text = elem.innerText.replace(/\s+/g, ' ').trim();
      navigator.clipboard.writeText(text).then(() => {
        const copiedMsg = document.createElement('span');
        copiedMsg.classList.add('copied');
        copiedMsg.textContent = 'Скопійовано';
        elem.parentNode.appendChild(copiedMsg);

        const timeoutId = setTimeout(() => {
          copiedMsg.style.display = 'none';
        }, 600);

        timeoutIds.push(timeoutId);
      });
    }
  };
});
