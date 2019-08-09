const popupCall = () => {

  let popup = document.querySelector('.popup-call'),
    popupContent = document.querySelector('.popup-content'),
    popupBtn = document.querySelectorAll('.call-btn'),
    popupClose = document.querySelector('.popup-close');

  popupBtn.forEach((elem) => {
    elem.addEventListener('click', () => {
      popup.style.display = 'block';
    });
  });

  popup.addEventListener('click', (event) => {
    let target = event.target;
    if (target.classList.contains('popup-close')) {
      popup.style.display = 'none';
    } else {
      target = target.closest('.popup-content');
      if (!target) {
        popup.style.display = 'none';
      }
    }
  });

};



export default popupCall;