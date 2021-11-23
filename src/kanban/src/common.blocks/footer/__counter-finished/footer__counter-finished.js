const setFinishedCounter = () => {
  const finishedTasksBlock = document.querySelector('.footer__counter-finished');
  const boardMocks = JSON.parse(localStorage.getItem('boardMocks'));

  if (boardMocks.length) {
    if (boardMocks.length === 1) {
      finishedTasksBlock.innerText = '0';
    } else {
      finishedTasksBlock.innerText = boardMocks[boardMocks.length - 1].issues.length;
    }
  } else {
    finishedTasksBlock.innerText = '0';
  }
};

export { setFinishedCounter };
