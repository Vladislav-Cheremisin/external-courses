const createListBtnScripts = require('../../create-list-btn/create-list-btn');

const addMainTooltip = () => {
  const board = document.querySelector('.main');

  if (board.childNodes.length === 0) {
    const mainTooltip = document.createElement('div');
    const tooltip = '<h1>Board is empty</h1><br><h2>Press <button class="main__tooltip-btn">Create New List</button> button to add new list</h2>';

    mainTooltip.className = 'main__tooltip';
    mainTooltip.innerHTML = tooltip;
    board.append(mainTooltip);

    const mainTooltipBtn = document.querySelector('.main__tooltip-btn');

    mainTooltipBtn.addEventListener('click', createListBtnScripts.createNewList);
  }
};

export { addMainTooltip };
