const form = document.getElementById('commentForm');
const mySelect = document.querySelector('.custom-select');
const chooseMessenger = document.querySelector('.choose-messenger');
form.addEventListener('submit', validateForm);

function validateForm(event) {
  event.preventDefault();

  const formData = new FormData(form);
  const name = formData.get('name');
  const number = formData.get('number');
  const topic = formData.get('topic');
  const textarea = formData.get('textarea');
  const messenger = formData.get('Name');

  // Удаление предыдущих классов с тенями
  const inputs = form.querySelectorAll('input, select, textarea');
  inputs.forEach(input => {
    input.classList.remove('error');
  });

  let hasError = false;

  // Проверка полей и добавление класса с тенью при невалидных значениях
  if (!name) {
    form.querySelector('#name').classList.add('error');
    // const errorMsg = document.createElement('span');
    // errorMsg.classList.add('error');
    hasError = true;
  }

  if (!number) {
    form.querySelector('#number').classList.add('error');
    hasError = true;
  }

  if (!topic) {
    mySelect.classList.add('error');
    hasError = true;
  }

  if (!textarea) {
    form.querySelector('#textarea').classList.add('error');
    hasError = true;
  }

  if (!messenger) {
    const messengerInputs = form.querySelectorAll('input[name="Name"]');
    messengerInputs.forEach(input => {
      input.classList.add('error');
      chooseMessenger.classList.add('error');
    });
    hasError = true;
  }

  if (hasError) {
    alert('будь-ласка, заповніть усі обовʼязкові поля.');
    return;
  }

  // Дополнительная проверка формата номера телефона
  if (!/^\d{10}$/.test(number)) {
    alert(
      'будь-ласка введіть коректно номер телефону в такому форматі 097XXXXXXX“'
    );
    return;
  }

  // Все поля заполнены и прошли проверку
  // Теперь можно отправить форму или выполнить другие действия
  form.submit();
  form.reset();
}
