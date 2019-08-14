const constructor = () => {

  let constructor = document.querySelector('.constructor'),
    headings = document.querySelectorAll('.panel-heading'),
    collapses = document.querySelectorAll('.panel-collapse'),
    constructBtn = document.querySelectorAll('.construct-btn');

  // const inPanel = (index) => {
  //   if (!collapses[index].classList.contains('in')) {
  //     collapses[index].classList.add('in');
  //   } else {
  //     collapses[index].classList.remove('in');
  //   }
  // };

  const inPanel = (index) => {
    for (let i = 0; i < collapses.length - 3; i++) {
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

  // const inBtn = (index) => {
  //   collapses[index].classList.add('in');
  // };

  constructor.addEventListener('click', (event) => {

    let target = event.target,
      index = 0;

    if (target.closest('.construct-btn')) {
      //console.log(target);
      target = target.closest('.construct-btn');
      if (target !== null) {
        constructBtn.forEach((item, i) => {
          if (item === target) {
            inPanel(i + 1);
          }
        });
      }
    } else {
      target = target.closest('.panel-heading');
      if (target !== null) {
        headings.forEach((item, i) => {
          if (item === target) {
            inPanel(i);
          }
        });
      }
    }

  });
};

export default constructor;