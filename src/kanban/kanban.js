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
