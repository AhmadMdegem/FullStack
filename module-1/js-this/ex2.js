const pump = function (amount) {
  this.liters += amount; // liters
  console.log('You put ' + amount + ' liters in ' + this.name); //this.amount
};

const garage = {
  car1: {
    name: 'Audi',
    liters: 3,
    fillTank: pump
  },
  car2: {
    name: 'Mercedes',
    liters: 1,
    fillTank: pump
  }
};

garage.car1.fillTank(2);
console.log('Audi should have 5 liters: ', garage.car1.liters);

garage.car2.fillTank(30);
console.log('Mercedes should have 31 liters: ', garage.car2.liters);

  //////// output
// You put 2 liters in Audi
// Audi should have 5 liters:  5
// You put 30 liters in Mercedes
// Mercedes should have 31 liters:  31