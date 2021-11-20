const debouncedInput = document.querySelector('.input-debounced');
const regularInput = document.querySelector('.input-regular');

const debounce = (func, timer) => function debounced(args) {
  const previousCall = this.lastCall;
  this.lastCall = Date.now();

  if (previousCall && ((this.lastCall - previousCall) <= timer)) {
    clearTimeout(this.callTimer);
  }

  this.callTimer = setTimeout(() => func(args), timer);
};

const repeatInputValue = (event) => {
  const inputWrapper = event.target.parentNode;
  const oldInputRepeater = inputWrapper.querySelector('.task-form__input-repeater');

  if (oldInputRepeater) {
    inputWrapper.removeChild(oldInputRepeater);
  }

  const inputValue = event.target.value;
  const newElement = document.createElement('span');

  newElement.classList.add('task-form__input-repeater');
  newElement.innerText = inputValue;
  inputWrapper.appendChild(newElement);
};

const debouncedRepeatInputValue = debounce(repeatInputValue, 1500);

regularInput.addEventListener('input', repeatInputValue);
debouncedInput.addEventListener('input', debouncedRepeatInputValue);
