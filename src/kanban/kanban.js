const userProfile = document.querySelector('.user-profile');
const userPopUpBtn = document.querySelector('.user-profile__pop-up-btn');
const userPopUp = document.createElement('div');
const userPopUpItems = [
  '<a href="kanban.html" class="user-profile__pop-up-item">My profile</a>',
  '<a href="kanban.html" class="user-profile__pop-up-item">Achievements</a>',
  '<a href="kanban.html" class="user-profile__pop-up-item">Settings</a>',
  '<a href="kanban.html" class="user-profile__pop-up-item">Log out</a>',
];

userPopUp.className = 'user-profile__pop-up';

const showUserPopUp = () => {
  if (!Array.from(userProfile.childNodes).includes(userPopUp)) {
    userPopUp.innerHTML = userPopUpItems.join('');
    userPopUpBtn.classList.add('user-profile__pop-up-btn_active');
    userProfile.append(userPopUp);
    userProfile.removeEventListener('click', showUserPopUp);
  }
};

const hideUserPopUp = (event) => {
  if (Array.from(userProfile.childNodes).includes(userPopUp) && event.target.className !== 'user-profile__pop-up-item') {
    userPopUpBtn.classList.remove('user-profile__pop-up-btn_active');
    userProfile.removeChild(userPopUp);

    setTimeout(() => {
      userProfile.addEventListener('click', showUserPopUp);
    }, 0);
  }
};

userProfile.addEventListener('click', showUserPopUp);
document.body.addEventListener('mouseup', hideUserPopUp);

/* Task 13 */

const mainWrapper = document.querySelector('.main');
let boardMocks = null;

if (localStorage.getItem('boardMocks') !== null) {
  boardMocks = JSON.parse(localStorage.getItem('boardMocks'));
} else {
  boardMocks = [
    {
      title: 'Backlog',
      issues: [
        {
          id: 'task1',
          name: 'backlog task example',
        }
      ],
    },
    {
      title: 'Ready',
      issues: [
        {
          id: 'task1',
          name: 'ready task example',
        }
      ],
    },
    {
      title: 'In Progress',
      issues: [
        {
          id: 'task1',
          name: 'in progress task example',
        }
      ],
    },
    {
      title: 'Finished',
      issues: [
        {
          id: 'task1',
          name: 'finished task example',
        }
      ],
    },
  ];
}

function paintLists() {
  mainWrapper.innerHTML = '';
  localStorage.setItem('boardMocks', JSON.stringify(boardMocks));

  boardMocks.forEach(element => {
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

    element.issues.forEach(issue => {
      const newIssue = document.createElement('li');

      newIssue.className = 'kanban-list__task';
      newIssue.id = issue.id;
      newIssue.innerText = issue.name;

      listTaskWrapper.append(newIssue);
    })

    list.append(listTaskWrapper);
    list.append(listAddCardBtn);
    mainWrapper.append(list);
  })
}

paintLists(boardMocks);

let addCardBtns = document.querySelectorAll('.kanban-list__add-card-btn');
let listsTaskWrappers = document.querySelectorAll('.kanban-list__task-wrapper');

function createNewListItem() {
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
      }

      boardMocks[0].issues.push(newListItem);
      listsTaskWrappers[0].removeChild(newListInput);
      paintLists(boardMocks);
      addCardBtns = document.querySelectorAll('.kanban-list__add-card-btn');
      listsTaskWrappers = document.querySelectorAll('.kanban-list__task-wrapper');
      addCardBtns[0].addEventListener('click', createNewListItem);
    }
  })
}

addCardBtns[0].addEventListener('click', createNewListItem);