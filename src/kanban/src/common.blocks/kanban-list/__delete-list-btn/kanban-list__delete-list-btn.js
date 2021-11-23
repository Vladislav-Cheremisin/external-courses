const mainScripts = require('../../main/main');

const deleteKanbanList = (event) => {
  const currentList = event.target.parentNode.parentNode;
  const main = currentList.parentNode;
  const boardMocks = JSON.parse(localStorage.getItem('boardMocks'));
  const newBoardMocks = [];

  main.childNodes.forEach((node, index) => {
    if (node !== currentList) {
      newBoardMocks.push(boardMocks[index]);
    }
  });

  mainScripts.changeBoardMocksAndRefresh(newBoardMocks);
};

export { deleteKanbanList };
