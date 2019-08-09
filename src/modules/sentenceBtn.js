const sentenceBtn = () => {
  let btn = document.querySelector('.add-sentence-btn'),
    hiddenBlocks = document.querySelectorAll('.hidden'),
    visibleSmBlock = document.querySelector('.visible-sm-block');

  btn.addEventListener('click', () => {

    hiddenBlocks.forEach((elem) => {

      elem.classList.remove('hidden');
    });

    visibleSmBlock.classList.remove('visible-sm-block');

    btn.classList.add('hidden');

  });
};

export default sentenceBtn;