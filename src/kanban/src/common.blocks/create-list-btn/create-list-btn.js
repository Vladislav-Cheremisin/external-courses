import {
  mainWrapper,
  changeBoardMocksAndRefresh,
} from '../main/main';

const createNewList = () => {
  const newBoardMocks = JSON.parse(localStorage.getItem('boardMocks'));
  const newListData = {
    title: 'New List',
    issues: [
      {
        id: 'task1',
        name: 'task example',
      },
    ],
  };

  newBoardMocks.unshift(newListData);

  changeBoardMocksAndRefresh(newBoardMocks);

  const newList = mainWrapper.childNodes[0];
  const newListHeaderInput = document.createElement('input');

  newListHeaderInput.className = 'kanban-list__header-input';
  newListHeaderInput.setAttribute('placeholder', 'List header required');
  newList.firstChild.remove();
  newList.insertBefore(newListHeaderInput, newList.childNodes[0]);

  newListHeaderInput.focus();

  const saveNewList = (value) => {
    newBoardMocks[0].title = value;

    changeBoardMocksAndRefresh(newBoardMocks);
  };

  const removeUnnamedNewList = (event) => {
    if (event.target.value === '') {
      newBoardMocks.shift();

      changeBoardMocksAndRefresh(newBoardMocks);
    } else {
      saveNewList(event.target.value);
    }
  };

  newListHeaderInput.addEventListener('blur', removeUnnamedNewList);
};

export { createNewList };
