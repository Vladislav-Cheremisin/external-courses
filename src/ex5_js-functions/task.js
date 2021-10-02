const Calculator = () => {
  let result = 0;
  const calculator = {
    add(operand = 0) {
      result += operand;
      return calculator.add;
    },
    subtract(operand = 0) {
      result -= operand;
      return calculator.subtract;
    },
    divide(operand = 1) {
      result /= operand;
      return calculator.divide;
    },
    multiply(operand = 1) {
      result *= operand;
      return calculator.multiply;
    },
    getResult() {
      return result;
    },
    reset() {
      result = 0;
    },
  };

  return calculator;
};

const calculator = Calculator();

module.exports = calculator;
