import { deleteKanbanList } from '../__delete-list-btn/kanban-list__delete-list-btn';

const showKanbanListPopUp = (event) => {
  const currentList = event.target.parentNode;

  const popUp = document.createElement('ul');
  const popUpDeleteBtn = '<li class="kanban-list__delete-list-btn">Delete list</li>';

  popUp.className = 'kanban-list__pop-up';
  popUp.setAttribute('tabindex', '-1');
  popUp.innerHTML = popUpDeleteBtn;
  currentList.appendChild(popUp);
  popUp.focus();

  popUp.childNodes[0].addEventListener('click', deleteKanbanList);
  popUp.addEventListener('blur', () => {
    currentList.childNodes[1].removeEventListener('click', showKanbanListPopUp);
    popUp.remove();

    setTimeout(() => {
      currentList.childNodes[1].addEventListener('click', showKanbanListPopUp);
    }, 200);
  });
};

export {
  showKanbanListPopUp,
};
