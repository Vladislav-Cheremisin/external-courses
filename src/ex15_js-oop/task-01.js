function Sweets() {}

Sweets.prototype.isSweet = () => true;

function Candy(name, weight) {
  this.name = name;
  this.weight = weight;
}

Candy.prototype = new Sweets();

function ChocoBar(name, weight) {
  this.name = name;
  this.weight = weight;
}

ChocoBar.prototype = new Sweets();

function Jelly(name, weight) {
  this.name = name;
  this.weight = weight;
}

Jelly.prototype = new Sweets();

const rafaello = new Candy('Rafaello', 10);
const mercy = new Candy('Mercy', 30);
const bounty = new ChocoBar('Bounty', 100);
const snickers = new ChocoBar('Snickers', 150);
const haribo = new Jelly('Haribo', 200);

function Present(...sweets) {
  this.contain = [];
  this.weight = 0;

  sweets.forEach((sweet) => {
    this.contain.push(sweet);
    this.weight += sweet.weight;
  });

  this.sortSweetsByWeight = function sortSweetsByWeight() {
    this.contain.sort((a, b) => a.weight - b.weight);
  };

  this.findSweet = function findSweet(name) {
    for (let i = 0; i < this.contain.length; i += 1) {
      if (this.contain[i].name === name) {
        return this.contain[i];
      }
    }

    return 'There are no sweets with this name!';
  };
}

const newPresent = new Present(rafaello, bounty, mercy, haribo, snickers);

newPresent.sortSweetsByWeight();

newPresent.findSweet('Mercy'); // Sweets { name: 'Mercy', weight: 30 }
newPresent.findSweet('Mars'); // There are no sweets with this name!
