function isEmpty(value) {
  return value.trim() === '';
}

function isValidPhoneNumber(value) {
  let phoneRegex = /^\d{10}$/;
  return phoneRegex.test(value);
}

function isSelected(value) {
  return value !== '';
}

function isRadioSelected(radioButtons) {
  return Array.from(radioButtons).some(button => button.checked);
}

function validateForm() {
  let nameInput = document.getElementById('name');
  let numberInput = document.getElementById('number');
  let selectInput = document.getElementById('mySelect');
  let textareaInput = document.getElementById('textarea');
  let radioButtons = document.getElementsByName('messenger');

  if (isEmpty(nameInput.value)) {
    showError(nameInput, 'Введіть імʼя!');
    return false;
  } else if (nameInput.value.trim().length < 2) {
    showError(nameInput, 'Імʼя має містити рівно два символи!');
    return false;
  } else {
    showValid(nameInput);
    // showError(nameInput, '')
  }

  if (isEmpty(numberInput.value) || !isValidPhoneNumber(numberInput.value)) {
    showError(numberInput, 'Введіть номер телефону такого формату 097ХХХХ');
    return false;
  } else {
    showValid(numberInput);
  }

  if (!isSelected(selectInput.value)) {
    showError(selectInput, 'Оберіть тему!');
    return false;
  } else {
    showValid(selectInput);
  }

  if (isEmpty(textareaInput.value)) {
    showError(textareaInput, 'Напишіть ваше повідомлення!');
    return false;
  } else {
    showValid(textareaInput);
  }

  if (!isRadioSelected(radioButtons)) {
    showError(radioButtons, 'Оберіть бажанний месенджер!');
    return false;
  } else {
    showValid(radioButtons);
  }
  // 
  console.log('Імʼя:', nameInput.value);
  console.log('Номер телефона:', numberInput.value);
  console.log('Обрана тема:', selectInput.value);
  console.log('Повідомлення:', textareaInput.value);
  console.log('Вибарнний мессенджер:');
  Array.from(radioButtons).forEach(button => {
    if (button.checked) {
      console.log(button.value);
    }
  });

  alert('Форма успішно валідована!');
  return true;
}

function showError(inputElement, errorMessage) {
  let parentElement = inputElement.parentNode;
  let existingErrorDiv = parentElement.querySelector('.error-message');
  if (existingErrorDiv) {
    existingErrorDiv.textContent = errorMessage;
  } else {
    let errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = errorMessage;
    parentElement.appendChild(errorDiv);
  }
}

function showValid(inputElement) {
  let parentElement = inputElement.parentNode;
  let errorDiv = parentElement.querySelector('.error-message');
  if (errorDiv) {
    parentElement.removeChild(errorDiv);
  }
}

const form = document.getElementById('form');
form.addEventListener('submit', function (event) {
  event.preventDefault();
  validateForm();
});
