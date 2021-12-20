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

userProfile.addEventListener('click', showUserPopUp);
document.body.addEventListener('mouseup', hideUserPopUp);

/* Task 13 */

createLists();
addListeners();
setListsBtnsStatus();
