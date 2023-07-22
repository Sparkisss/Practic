/* Builder */
/*
function Dog(name, breed, weight) {
  this.name = name;
  this.breed = breed;
  this.weight = weight;
}*/
/* Prototype*//*
Dog.prototype.species = 'Canine'; //string Canine is set attribute species.

Dog.prototype.bark = function() {
  if(this.weight > 25) {
    console.log(this.name + ' says Woof!');
  }else {
    console.log(this.name + ' says Yip!');
  }
};

Dog.prototype.run = function() {
  console.log('Run!');
};

Dog.prototype.wag = function() {
  console.log('Wag!');
}
let fido = new Dog('Fido', 'Mixed', 38);
let fluffy = new Dog('Fluffy', 'Podle', 30);
let spot = new Dog('Spot', 'Chihuahua', 10);
spot.bark = function() {
  console.log(this.name + ' says WOOF!');
};

fido.bark();
fido.run();
fido.wag();

fluffy.bark();
fluffy.run();
fluffy.wag();

spot.bark();
spot.run();
spot.wag();*/
/***************************************************************/
function Robot(name, year, owner) {
  this.name = name;
  this.year = year;
  this.owner = owner;
}
Robot.prototype.maker = 'ObjectsRus';

Robot.prototype.speak = function() {
  console.log('I am speak.');
};
Robot.prototype.makeCofee = function() {
  console.log('I am make coffe.');
};
Robot.prototype.blinkLights = function() {
  console.log('I am blinking.');
};

let robby = new Robot('Robby', 1962, 'Sem');
let rosie = new Robot('Rosie', 1969, 'Missis Sem');
robby.onOffSwitch = true;


robby.makeCofee = function() {
  console.log('I go to the coffe-shop.');
};

rosie.cleanHouse = function() {
  console.log('I clean a house.');
};

console.log(robby.name + ' was made by ' + robby.maker + 
          ' in ' + robby.year + ' and is owned by ' + robby.owner);

robby.makeCofee();
robby.blinkLights();

console.log(rosie.name + ' was made by ' + rosie.maker + 
          ' in ' + rosie.year + ' and is owned by ' + rosie.owner);

rosie.cleanHouse();

function Game() {
  this.level = 0;
}
Game.prototype.play = function() {
  this.level++;
  console.log('Welcome yo level ' + this.level);
  this.unlock();
}

Game.prototype.unlock = function() {
  if(this.level === 42) {
    Robot.prototype.deployLaser = function() {
      console.log(this.name + ' is blasting you with laser beams.');
    }
  }
}
let game = new Game();
while(game.level < 42) {
  game.play();
}
robby.deployLaser();
rosie.deployLaser();