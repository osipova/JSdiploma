const questionsPanel = () => {

  let questions = document.querySelector('.questions'),
    headings = document.querySelectorAll('.panel-heading'),
    collapses = document.querySelectorAll('.panel-collapse');

  const inPanel = (index) => {
    for (let i = 4; i < collapses.length; i++) {
      if (i !== index) {
        collapses[i].classList.remove('in');
      } else {
        if (!collapses[i].classList.contains('in')) {
          collapses[i].classList.add('in');
        } else {
          collapses[i].classList.remove('in');
        }
      }
    }
  };

  questions.addEventListener('click', (event) => {
    let target = event.target;
    target = target.closest('.panel-heading');
    if (target !== null) {
      headings.forEach((item, i) => {
        if (item === target) {
          inPanel(i);
        }
      });
    }
  });
};

export default questionsPanel;