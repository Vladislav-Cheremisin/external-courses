import {
  mainWrapper,
  boardMocks,
  setListsBtnsStatus,
  createLists,
  addListeners,
} from '../../main/main';

const createNewList = () => {
  const newListData = {
    title: 'New List',
    issues: [
      {
        id: 'task1',
        name: 'task example',
      },
    ],
  };

  boardMocks.unshift(newListData);

  createLists();
  addListeners();
  setListsBtnsStatus();

  const newList = mainWrapper.childNodes[0];
  const newListHeaderInput = document.createElement('input');

  newListHeaderInput.className = 'kanban-list__header-input';
  newListHeaderInput.setAttribute('placeholder', 'List header required');
  newList.firstChild.remove();
  newList.insertBefore(newListHeaderInput, newList.childNodes[0]);

  newListHeaderInput.focus();

  const saveNewList = (value) => {
    boardMocks[0].title = value;
    createLists();
    addListeners();
    setListsBtnsStatus();
  };

  const removeUnnamedNewList = (event) => {
    if (event.target.value === '') {
      boardMocks.shift();
      createLists();
      addListeners();
      setListsBtnsStatus();
    } else {
      saveNewList(event.target.value);
    }
  };

  newListHeaderInput.addEventListener('blur', removeUnnamedNewList);
};

export { createNewList };
