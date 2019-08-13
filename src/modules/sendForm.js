const sendForm = (calcResult) => {

  const form = document.querySelectorAll('.capture-form'),
    directorForm = document.querySelector('.director-form');

  const errorMassage = 'Что-то пошло не так...',
    loadMassage = 'Загурзка...',
    saccessMesage = 'Спасибо! Мы скоро с вами свяжемся.';

  const statusMessage = document.createElement('div');
  statusMessage.style.color = '#000';
  statusMessage.style.csstext = 'font-size: 2rem';
  statusMessage.classList.add('request');

  form.forEach((item) => {
    item.addEventListener('input', (event) => {
      if (event.target.matches('.phone-user')) {
        event.target.value = event.target.value.replace(/[^\+\d]/g, "");
      }
    });

    item.addEventListener('submit', (event) => {
      //отменяем дефолтное поведеие события, чтобы не было обновления страницы
      event.preventDefault();
      //добавили div на страницу, пустой
      item.appendChild(statusMessage);

      statusMessage.textContent = loadMassage; //тут может быть спиннер, анимация, окно

      //объект считывает данные формы и имеет обязательно атрибут name
      const formData = new FormData(item);

      let dataForms = {};

      formData.forEach((val, key) => {
        dataForms[key] = val;
      });

      let body;

      if (Object.keys(calcResult).length !== 0) {
        body = Object.assign(dataForms, calcResult);
      } else {
        body = Object.assign({}, dataForms);
      }

      const inputDirectorForm = document.querySelector('.director-input').value;

      if (inputDirectorForm) {
        body[`question`] = inputDirectorForm;
      }

      postData(body)
        .then((response) => {
          if (response.status !== 200) {
            throw new Error('status network not 200 ');
          }
          //console.log(response);
          statusMessage.textContent = saccessMesage;
        })
        .catch((error) => {
          statusMessage.textContent = errorMassage;
          console.error(error);
        });

      item.reset();
      directorForm.reset();
    });
  });

  const postData = (body) => {
    return fetch('./server.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
  };

};

export default sendForm;