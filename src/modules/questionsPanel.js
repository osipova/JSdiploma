const questionsPanel = () => {
  let answers1 = document.getElementById('collapseOne-two'),
    answers2 = document.getElementById('collapseTwo-two'),
    answers3 = document.getElementById('collapseThree-two'),
    questions = document.querySelector('.questions');

  const inAnswers = (elem) => {
    if (!elem.classList.contains('in')) {
      elem.classList.add('in');
    } else {
      elem.classList.remove('in');
    }
  };


  questions.addEventListener('click', (event) => {
    console.log("here");
    let target = event.target;
    console.log(target);
    if (target.closest('#headingOne-two')) {
      inAnswers(answers1);
      answers2.classList.remove('in');
      answers3.classList.remove('in');
    } else if (target.closest('#headingTwo-two')) {
      inAnswers(answers2);
      answers1.classList.remove('in');
      answers3.classList.remove('in');
    } else if (target.closest('#headingThree-two')) {
      inAnswers(answers3);
      answers2.classList.remove('in');
      answers1.classList.remove('in');
    }
  });


};

export default questionsPanel;