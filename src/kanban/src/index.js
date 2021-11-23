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
} from './common.blocks/create-list-btn/create-list-btn';

import { addMainTooltip } from './common.blocks/main/__tooltip/main__tooltip';

const createListBtn = document.querySelector('.create-list-btn');

userProfile.addEventListener('click', showUserPopUp);
document.body.addEventListener('mouseup', hideUserPopUp);

createLists();
addListeners();
setListsBtnsStatus();
addMainTooltip();

createListBtn.addEventListener('click', createNewList);
