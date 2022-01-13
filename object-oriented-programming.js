/*?1. Verify an Object's Constructor with instanceof*/
/*function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
}

// Only change code below this line

let myHouse = new House(4)
console.log(myHouse instanceof House)*/

/*§2. Understand Own Properties*/
/*function Bird(name) {
    this.name = name;
    this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
// Only change code below this line
for (let key in canary){
    if(canary.hasOwnProperty(key)){
        ownProps.push(key)
    }
}
console.log(ownProps)*/

/*?3. Use Prototype Properties to Reduce Duplicate Code*/ //чтобы не дублировать код можно добавить что-то прототипу
/*function Dog(name) {
    this.name = name;
}

Dog.prototype.numLegs = 4
// Only change code above this line
let beagle = new Dog("Snoopy");
console.log(beagle)*/

/*?4. Iterate Over All Properties*/
/*function Dog(name) {
    this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

for(let key in beagle) {
    if(beagle.hasOwnProperty(key)){
        ownProps.push(key)
    } else {
        prototypeProps.push(key)
    }
}
console.log(ownProps)
console.log(prototypeProps)*/
// Only change code below this line

/*§5. Understand the Constructor Property*/

/*function Dog(name) {
    this.name = name;
}

// Only change code below this line
function joinDogFraternity(candidate) {
    return candidate.constructor === Dog
}*/

/*?6. Change the Prototype to a New Object*/
function Dog(name) {
    this.name = name;
}

Dog.prototype = {
    // Only change code below this line
    numLegs: 2,
    eat: function() {
        console.log('nom nom nom')
    },
    describe: function(){
        console.log(this.numLegs)
    }
};

/*?7. Remember to Set the Constructor Property when Changing the Prototype*/
