const mainWrapper = document.querySelector('.main');
let addCardBtns = document.querySelectorAll('.kanban-list__add-card-btn');
let listsTaskWrappers = document.querySelectorAll('.kanban-list__task-wrapper');

const getBoardMocks = () => {
  if (localStorage.getItem('boardMocks') !== null) {
    return JSON.parse(localStorage.getItem('boardMocks'));
  }
  return [
    {
      title: 'Backlog',
      issues: [
        {
          id: 'task1',
          name: 'backlog task example',
        },
      ],
    },
    {
      title: 'Ready',
      issues: [
        {
          id: 'task1',
          name: 'ready task example',
        },
      ],
    },
    {
      title: 'In Progress',
      issues: [
        {
          id: 'task1',
          name: 'in progress task example',
        },
      ],
    },
    {
      title: 'Finished',
      issues: [
        {
          id: 'task1',
          name: 'finished task example',
        },
      ],
    },
  ];
};

const boardMocks = getBoardMocks();

const setListsBtnsStatus = () => {
  for (let i = 1; i < listsTaskWrappers.length; i += 1) {
    if (listsTaskWrappers[i - 1].childNodes.length === 0) {
      addCardBtns[i].setAttribute('disabled', 'disabled');
    } else if (listsTaskWrappers[i - 1].childNodes.length !== 0 && addCardBtns[i].hasAttribute('disabled')) {
      addCardBtns[i].removeAttribute('disabled');
    }
  }
};

const createLists = () => {
  mainWrapper.innerHTML = '';
  localStorage.setItem('boardMocks', JSON.stringify(boardMocks));

  boardMocks.forEach((element) => {
    const list = document.createElement('section');
    const listHeader = document.createElement('h1');
    const listPopUpBtn = document.createElement('button');
    const listTaskWrapper = document.createElement('ul');
    const listAddCardBtn = document.createElement('button');

    list.className = 'kanban-list';
    listHeader.className = 'kanban-list__header';
    listHeader.innerText = element.title;
    listPopUpBtn.className = 'kanban-list__pop-up-btn';
    listPopUpBtn.innerText = '•••';
    listTaskWrapper.className = 'kanban-list__task-wrapper';
    listAddCardBtn.className = 'kanban-list__add-card-btn';
    listAddCardBtn.innerText = 'Add Card';
    list.append(listHeader);
    list.append(listPopUpBtn);

    element.issues.forEach((issue) => {
      const newIssue = document.createElement('li');

      newIssue.className = 'kanban-list__task';
      newIssue.id = issue.id;
      newIssue.innerText = issue.name;
      listTaskWrapper.append(newIssue);
    });

    list.append(listTaskWrapper);
    list.append(listAddCardBtn);
    mainWrapper.append(list);
    addCardBtns = document.querySelectorAll('.kanban-list__add-card-btn');
    listsTaskWrappers = document.querySelectorAll('.kanban-list__task-wrapper');
  });

  setListsBtnsStatus();
};

const refreshLists = () => {
  localStorage.setItem('boardMocks', JSON.stringify(boardMocks));

  for (let i = 0; i < listsTaskWrappers.length; i += 1) {
    listsTaskWrappers[i].innerHTML = '';
  }

  boardMocks.forEach((element, index) => {
    element.issues.forEach((item) => {
      const listItem = document.createElement('li');

      listItem.className = 'kanban-list__task';
      listItem.id = item.id;
      listItem.innerText = item.name;
      listsTaskWrappers[index].append(listItem);
    });
  });

  setListsBtnsStatus();
};

const moveListItem = (event) => {
  const currentList = event.target.parentNode;
  let currentListIndex = 0;

  mainWrapper.childNodes.forEach((node, index) => {
    if (node === currentList) {
      currentListIndex = index;
    }
  });

  const currentListDropdown = document.createElement('ul');

  currentListDropdown.className = 'kanban-list__dropdown';
  currentListDropdown.setAttribute('tabindex', '-1');

  boardMocks[currentListIndex - 1].issues.forEach((issue) => {
    const dropdownItem = document.createElement('li');

    dropdownItem.className = 'kanban-list__dropdown-item';
    dropdownItem.innerText = issue.name;
    currentListDropdown.append(dropdownItem);
  });

  const removeDropdowns = (wrappers) => {
    wrappers.forEach((element) => {
      element.childNodes.forEach((child) => {
        if (child.classList.contains('kanban-list__dropdown')) {
          const dropdownToRemove = element.querySelector('.kanban-list__dropdown');

          dropdownToRemove.remove();
        }
      });
    });
  };

  removeDropdowns(listsTaskWrappers);
  currentList.childNodes[2].append(currentListDropdown);
  currentListDropdown.focus();
  currentListDropdown.addEventListener('blur', () => currentListDropdown.remove());

  const currentListItems = currentListDropdown.childNodes;

  const saveMovedItem = (e) => {
    const movedItemText = e.target.innerText;
    const currentMockArr = boardMocks[currentListIndex].issues;
    const prevMockArr = boardMocks[currentListIndex - 1].issues;
    const deleteItemIndex = prevMockArr.findIndex((element) => element.name === movedItemText);
    const objForBoardMocks = {
      id: `task${boardMocks[currentListIndex].issues.length + 1}`,
      name: movedItemText,
    };

    currentMockArr.push(objForBoardMocks);
    prevMockArr.splice(deleteItemIndex, 1);

    for (let n = 0; n < prevMockArr.length; n += 1) {
      prevMockArr[n].id = `task${n + 1}`;
    }

    refreshLists();
    setListsBtnsStatus();
  };

  currentListItems.forEach((element) => element.addEventListener('click', saveMovedItem));
};

const createNewListItem = () => {
  const newListInput = document.createElement('input');

  newListInput.className = 'kanban-list__task-input';
  newListInput.setAttribute('type', 'text');
  listsTaskWrappers[0].append(newListInput);
  newListInput.focus();

  newListInput.addEventListener('blur', () => {
    if (newListInput.value === '') {
      listsTaskWrappers[0].removeChild(newListInput);
    } else {
      const newListItem = {
        id: `task${boardMocks[0].issues.length + 1}`,
        name: newListInput.value,
      };

      boardMocks[0].issues.push(newListItem);
      listsTaskWrappers[0].removeChild(newListInput);
      refreshLists();
    }
  });
};

const addListeners = () => {
  addCardBtns[0].addEventListener('click', createNewListItem);
  for (let i = 1; i < addCardBtns.length; i += 1) {
    addCardBtns[i].addEventListener('click', moveListItem);
  }
};

export {
  mainWrapper,
  boardMocks,
  setListsBtnsStatus,
  createLists,
  addListeners,
};
