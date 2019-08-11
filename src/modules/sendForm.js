const sendForm = () => {

  const form = document.querySelectorAll('form'),
    mainForm = document.querySelectorAll('.main-form');

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

      let body = {};

      formData.forEach((val, key) => {
        body[key] = val;
      });

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