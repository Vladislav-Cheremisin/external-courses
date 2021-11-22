import './main.css';

import {
  userProfile,
  showUserPopUp,
  hideUserPopUp,
} from './common.blocks/user-profile/__pop-up/user-profile__pop-up';

import {
  setListsBtnsStatus,
  createLists,
  addListeners,
} from './common.blocks/main/main';

import {
  createNewList,
} from './common.blocks/header/__nav/header__nav';

const createListBtn = document.querySelector('.create-list-btn');

userProfile.addEventListener('click', showUserPopUp);
document.body.addEventListener('mouseup', hideUserPopUp);

createLists();
addListeners();
setListsBtnsStatus();

/* Task 18 */

createListBtn.addEventListener('click', createNewList);
