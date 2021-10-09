const createCalc = () => {
  let result = 0;

  return {
    add(operand = 0) {
      result += operand;

      return this.add;
    },
    subtract(operand = 0) {
      result -= operand;

      return this.subtract;
    },
    divide(operand = 1) {
      result /= operand;

      return this.divide;
    },
    multiply(operand = 1) {
      result *= operand;

      return this.multiply;
    },
    getResult() {
      return result;
    },
    reset() {
      result = 0;
    },
  };
};

const calculator = createCalc();

module.exports = calculator;
