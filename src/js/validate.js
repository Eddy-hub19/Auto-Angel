function validatePhoneNumber(phoneNumber) {
  const phoneNumberPattern = /^\d{10}$/;
  return phoneNumberPattern.test(phoneNumber);
}

const form = document.querySelector('.form');
const phoneNumberInput = form.querySelector('.form-wrap-number__field-number');
const nameInput = form.querySelector('.form-wrap-name__field-name');
const selectInput = form.querySelector('#mySelect');
const textareaInput = form.querySelector('#textarea');
const messengerInputs = form.querySelectorAll('input[name="Name"]');

// Обработчик события при изменении значения в поле номера телефона
phoneNumberInput.addEventListener('input', function () {
  const phoneNumber = phoneNumberInput.value;
  if (validatePhoneNumber(phoneNumber)) {
    phoneNumberInput.style.border = '4px solid green';
  } else {
    phoneNumberInput.style.border = '4px solid red';
  }
});

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const phoneNumber = phoneNumberInput.value;
  const name = nameInput.value;
  const selectedOption = selectInput.value;
  const message = textareaInput.value;
  let selectedMessenger = '';

  // Отримання вибраного месенджера
  for (const messengerInput of messengerInputs) {
    if (messengerInput.checked) {
      selectedMessenger = messengerInput.value;
      break;
    }
  }

  if (validatePhoneNumber(phoneNumber)) {
    console.log('Номер телефону є дійсним.');
    console.log("Ім'я:", name);
    console.log('Номер телефону:', phoneNumber);
    console.log('Вибрана тема:', selectedOption);
    console.log('Повідомлення:', message);
    console.log('Вибраний месенджер:', selectedMessenger);

    alert("Дякуємо, ми зв'яжемося з вами найближчим часом.");

    phoneNumberInput.style.border = '4px solid green';
  } else {
    console.log('Номер телефону недійсний.');

    phoneNumberInput.style.border = '4px solid red';
  }
});
