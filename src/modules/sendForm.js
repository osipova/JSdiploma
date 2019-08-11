const sendForm = () => {

  const form = document.querySelectorAll('.capture-form');

  const errorMassage = 'Что-то пошло не так...',
    loadMassage = 'Загурзка...',
    saccessMesage = 'Спасибо! Мы скоро с вами свяжемся.';
  const statusMessage = document.createElement('div');
  statusMessage.style.color = '#fff';
  statusMessage.style.csstext = 'font-size: 2rem';
  statusMessage.classList.add('request');

  form.forEach((item) => {
    item.addEventListener('input', (event) => {
      if (event.target.matches('.user_phone')) {
        event.target.value = event.target.value.replace(/[^\+\d]/g, "");
      }
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