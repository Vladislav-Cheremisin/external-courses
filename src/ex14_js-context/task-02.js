function Hangman(word) {
  this.word = word.toLowerCase();
  this.hiddenWord = '_'.repeat(this.word.length).split('');
  this.incorrectLetters = [];
  this.attempts = 6;
  this.guess = (letter) => {
    if (this.word.includes(letter.toLowerCase())) {
      this.word.split('').forEach((element, index) => {
        if (element === letter.toLowerCase()) {
          this.hiddenWord[index] = element;
        }
      });

      if (this.word === this.hiddenWord.join('')) {
        console.log(`${this.word} | You won!`);
        return this;
      }

      console.log(this.hiddenWord.join(''));

      return this;
    }

    this.incorrectLetters.push(letter.toLowerCase());
    this.attempts -= 1;
    return `wrong letter, errors left ${this.attempts} | ${this.incorrectLetters.join(',')}`;
  };
  this.getGuessedString = () => this.hiddenWord.join('');
  this.getErrorsLeft = () => this.attempts;
  this.getWrongSymbols = () => this.incorrectLetters;
  this.getStatus = () => `${this.hiddenWord.join('')} | errors left ${this.attempts}`;
  this.startAgain = (newWord) => {
    this.word = newWord;
    this.hiddenWord = '_'.repeat(this.word.length).split('');
    this.incorrectLetters = [];
    this.attempts = 6;

    return this;
  };
}

const hangman = new Hangman('webpurple');

module.exports = hangman;
