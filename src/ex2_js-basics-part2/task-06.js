const isPrime = (number) => {
  if (number > 1000) {
    return 'Данные неверны';
  }
  if (number < 2) {
    return 'Не причисляется ни к простым, ни к составным числам';
  }
  for (let i = 2; i < number - 1; i += 1) {
    if ((number % i) === 0) {
      return `Число ${number} - составное число`;
    }
  }
  return `Число ${number} - простое число`;
};

module.exports = isPrime;
