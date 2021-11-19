class Electrodevice {
  constructor(name, powerRate, isTurnedOn) {
    this.name = name;
    this.isTurnedOn = isTurnedOn;
    this.powerRate = powerRate;
  }

  countKwUsagePerH() {
    if (this.isTurnedOn) {
      return +(this.powerRate / 1000).toFixed(1);
    }

    return 0;
  }
}

class KitchenDevice extends Electrodevice {
  constructor(name, powerRate, isTurnedOn) {
    super(name, powerRate, isTurnedOn);
    this.location = 'kitchen';
  }
}

class MultimediaDevice extends Electrodevice {
  constructor(name, powerRate, isTurnedOn, location) {
    super(name, powerRate, isTurnedOn);
    this.location = location;
  }
}

class OtherDevice extends Electrodevice {
  constructor(name, powerRate, isTurnedOn, location) {
    super(name, powerRate, isTurnedOn);
    this.location = location;
  }
}

const oven = new KitchenDevice('Oven', 2500, false);
const teapot = new KitchenDevice('Teapot', 1000, true);
const dishwasher = new KitchenDevice('Dishwasher', 1800, true);
const computer = new MultimediaDevice('Computer', 500, false, 'living room');
const tv = new MultimediaDevice('TV', 400, true, 'kitchen');
const xbox = new MultimediaDevice('XBox', 1000, true, 'living room');
const heater = new OtherDevice('Heater', 1500, true, 'living room');
const conditioner = new OtherDevice('Conditioner', 3500, false, 'living room');
const washingMachine = new OtherDevice('Washing Machine', 2700, true, 'bathroom');

class Flat {
  constructor(flatNumber, countOfRooms, ownerName, ...electordevices) {
    this.flatNumber = flatNumber;
    this.countOfRooms = countOfRooms;
    this.ownerName = ownerName;
    this.electordevices = electordevices;
  }

  countPowerUsage() {
    let result = 0;

    this.electordevices.forEach((electordevice) => {
      if (electordevice.isTurnedOn) {
        result += electordevice.countKwUsagePerH();
      }
    });

    return `This flat use ${result} Kw per hour`;
  }
}

const myElectroDevices = [
  oven,
  dishwasher,
  tv,
  heater,
  conditioner,
  teapot,
  computer,
  xbox,
  washingMachine,
];

const myFlat = new Flat(113, 2, 'Vladislav', ...myElectroDevices);

myFlat.countPowerUsage();
