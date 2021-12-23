const setActiveCounter = () => {
  const activeTasksBlock = document.querySelector('.footer__counter-active');
  const boardMocks = JSON.parse(localStorage.getItem('boardMocks'));

  if (boardMocks.length) {
    activeTasksBlock.innerText = boardMocks[0].issues.length;
  } else {
    activeTasksBlock.innerText = '0';
  }
};

export { setActiveCounter };
