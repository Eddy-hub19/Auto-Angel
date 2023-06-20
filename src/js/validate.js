const form = document.getElementById('form');
const inputs = form.querySelectorAll(
  'input[required], textarea[required], select[required]'
);

form.addEventListener('submit', function (event) {
  event.preventDefault();

  inputs.forEach(function (input) {
    const errorMessage = input.parentNode.querySelector('.error-message');

    if (!input.checkValidity()) {
      errorMessage.style.display = 'block';
      input.classList.add('error');
    } else {
      errorMessage.style.display = 'none';
      input.classList.remove('error');
    }
  });

  form.submit()
});

inputs.forEach(function (input) {
  const errorMessage = input.parentNode.querySelector('.error-message');

  input.addEventListener('input', function () {
    if (!input.checkValidity()) {
      errorMessage.style.display = 'block';
    } else {
      errorMessage.style.display = 'none';
    }
  });
});

const selectElement = document.getElementById('mySelect');
const selectErrorMessage =
  selectElement.parentNode.querySelector('.error-message');

selectElement.addEventListener('change', function () {
  if (!selectElement.checkValidity()) {
    selectErrorMessage.style.display = 'block';
  } else {
    selectErrorMessage.style.display = 'none';
  }
});

const textareaElement = document.getElementById('textarea');
const textareaErrorMessage =
  textareaElement.parentNode.querySelector('.error-message');

textareaElement.addEventListener('input', function () {
  if (!textareaElement.checkValidity()) {
    textareaErrorMessage.style.display = 'block';
  } else {
    textareaErrorMessage.style.display = 'none';
  }
});

const messengerRadios = form.querySelectorAll(
  'input[type="radio"][name="messenger"]'
);
const messengerErrorMessage = document.querySelector(
  '.choose-messenger .error-message'
);

messengerRadios.forEach(function (radio) {
  radio.addEventListener('change', function () {
    const selectedMessenger = form.querySelector(
      'input[type="radio"][name="messenger"]:checked'
    );
    if (!selectedMessenger) {
      messengerErrorMessage.style.display = 'block';
    } else {
      messengerErrorMessage.style.display = 'none';
    }
  });
});
