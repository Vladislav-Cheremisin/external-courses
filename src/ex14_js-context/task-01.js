function Calculator() {
  this.result = 0;
  this.add = (num) => {
    if (num) {
      this.result += num;
    }

    return this;
  };
  this.subtract = (num) => {
    if (num) {
      this.result -= num;
    }

    return this;
  };
  this.divide = (num) => {
    if (num) {
      this.result /= num;
    }

    return this;
  };
  this.multiply = (num) => {
    if (num) {
      this.result *= num;
    }

    return this;
  };
  this.reset = () => {
    this.result = 0;

    return this;
  };
  this.setState = (num) => {
    if (num) {
      this.result = num;
    }

    return this;
  };
  this.fetchData = (callback) => {
    if (callback) {
      this.result = 500;
      setTimeout(() => {
        callback(this.result);
      }, 0);
    }

    return this;
  };
  this.getResult = () => this.result;
}

const calculator = new Calculator();

module.exports = calculator;
