const popup = () => {

  let body = document.querySelector('body');

  const openPopup = (className) => {
    let popup = document.querySelector(className);
    popup.style.display = 'block';
  };

  const closePopup = () => {
    let popup = document.querySelectorAll('.popup');
    popup.forEach((elem) => {
      if (elem) {
        elem.style.display = 'none';
      }
    });
  };

  body.addEventListener('click', (event) => {
    let target = event.target;
    if (target.classList.contains('call-btn')) {
      openPopup('.popup-call');
    } else if (target.classList.contains('check-btn')) {
      openPopup('.popup-check');
    } else if (target.classList.contains('consultation-btn')) {
      openPopup('.popup-consultation');
    } else if (target.classList.contains('discount-btn')) {
      openPopup('.popup-discount');
    } else if (target.classList.contains('popup-close')) {
      closePopup();
    } else if (!target.closest('popup')) {
      closePopup();
    }
  });

};

export default popup;