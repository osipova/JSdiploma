const calculator = () => {

  const constructor = document.getElementById('constructor'),
    checkBox = document.getElementById('myonoffswitch'),
    checkBoxTwo = document.getElementById('myonoffswitch-two'),
    titleText = document.querySelectorAll('.title-text'),
    selectBox = document.querySelectorAll('.select-box'),
    formControl = document.querySelectorAll('.form-control'),
    resultValue = document.getElementById('calc-result');

  let resultsCalc = {};

  const countSum = () => {

    let result = 10000,
      camersCount = 1;

    if (!checkBox.checked) {
      result = 15000;
      camersCount = 2;
      titleText[1].style.display = 'inline-block';
      selectBox[2].style.display = 'inline-block';
      selectBox[3].style.display = 'inline-block';
    } else if (checkBox.checked) {
      result = 10000;
      camersCount = 1;
      titleText[1].removeAttribute('style');
      titleText[1].style.display = 'none';
      selectBox[2].style.display = 'none';
      selectBox[3].style.display = 'none';
    }

    if (formControl[0].selectedIndex === 1) {
      result += result / 100 * 20;
    }

    if (formControl[1].selectedIndex === 1) {
      result += result / 100 * 30;
    } else if (selectBox[1].selectedIndex === 2) {
      result += result / 100 * 50;
    }

    if (selectBox[2].style.display !== 'none' && selectBox[3].style.display !== 'none') {
      if (formControl[2].selectedIndex === 1) {
        result += result / 100 * 20;
      }

      if (formControl[3].selectedIndex === 1) {
        result += result / 100 * 30;
      } else if (formControl[3].selectedIndex === 2) {
        result += result / 100 * 50;
      }
    }

    if (checkBoxTwo.checked && camersCount === 1) {
      result += 1000;
    } else if (checkBoxTwo.checked && camersCount === 2) {
      result += 2000;
    }

    resultsCalc[`camers`] = camersCount;
    resultsCalc[`diametr1`] = formControl[0].options[formControl[0].selectedIndex].value;
    resultsCalc[`countRings1`] = formControl[1].options[formControl[1].selectedIndex].value;

    if (selectBox[2].style.display !== 'none' && selectBox[3].style.display !== 'none') {
      resultsCalc[`diametr2`] = formControl[2].options[formControl[2].selectedIndex].value;
      resultsCalc[`countRings2`] = formControl[3].options[formControl[3].selectedIndex].value;
    } else {
      resultsCalc[`diametr2`] = 0;
      resultsCalc[`countRings2`] = 0;
    }

    resultsCalc[`bottom`] = checkBoxTwo.checked;
    resultsCalc[`distance`] = document.getElementById('distance').value;
    resultsCalc[`sum`] = result;
    resultValue.setAttribute('placeholder', result);

    //console.log(resultValue.getAttribute('placeholder'));
  };

  constructor.addEventListener('change', (event) => {
    const target = event.target;
    if (target.matches('select') || target.matches('input')) {
      //resultValue.removeAttribute('disabled');
      countSum();
      // console.log(result);
    }
  });

  return resultsCalc;

};

export default calculator;