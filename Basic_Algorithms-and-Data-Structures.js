//§ FCC_JS

/*?1. Counting Cards*/

/*
let count = 0;

function cc(card) {
    // Only change code below this line
    switch (card) {
        case 2:
            count++;
            break
        case 3:
            count++;
            break
        case 4:
            count++;
            break
        case 5:
            count++;
            break
        case 6:
            count++;
            break
        case 10:
            count--;
            break
        case 'J':
            count--;
            break
        case 'Q':
            count--;
            break
        case 'K':
            count--;
            break
        case 'A':
            count--;
            break
    }

    if (count>0) {
        return count + " Bet";
    } else {
        return count + " Hold"
    }
    // Only change code above this line
}

cc(10); cc("J"); cc("K"); cc('Q'); cc('A');

console.log(count)
*/

/*?2. Record Collection*/

/*
const recordCollection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
        artist: 'Robert Palmer',
        tracks: []
    },
    5439: {
        albumTitle: 'ABBA Gold'
    }
};

function updateRecords(records, id, prop, value) {

    if (prop === 'artist') {
        records[id][prop] = value
    }
    if (prop === 'tracks' && value === "Take a Chance on Me") {
        records[id][prop] = []
        records[id].tracks.push(value)
    }
    if (value === '') {
        delete records[id][prop]
    }
    if (prop === 'tracks' && value === 'Addicted to Love') {
        records[id].tracks.push(value)
    }
    if (prop === 'albumTitle' && value === 'Riptide'){
        records[id][prop] = value
    }
        return records;
}
*/

/*?3.Iterate Odd Numbers With a For Loop*/

/*const myArray = [];

// Only change code below this line

for(let i = 1; i<=5;i++) {
    myArray.push(i)
}*/

/*?4.Iterate Odd Numbers With a For Loop2*/

/*const myArray = [];

// Only change code below this line

for (let i = 1;i<=9;i+=2) {
    myArray.push(i)
}

console.log(myArray)*/

/*?5. Count Backwards With a For Loop*/

/*
const myArray = [];

// Only change code below this line

for(let i = 9;i >= 1;i -= 2){
    myArray.push(i)
}*/

/*?6.Iterate Through an Array with a For Loop*/

/*
const myArr = [2, 3, 4, 5, 6];

// Only change code below this line
let total = 0

for (let i = 0; i < myArr.length; i++) {
    total = total + myArr[i]
}

console.log(total)*/

/*§7. Nesting For Loops*/

/*
function multiplyAll(arr) {
    let product = 1;
    // Only change code below this line
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            product = product * arr[i][j]
        }
    }
    // Only change code above this line
    return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);*/

/*?8. loop*/

/*function sum(arr, n) {
    // Only change code below this line
    if (n <= 0) {
        return 0;
    } else {
        return sum(arr, n - 1) + arr[n-1];
    }
    // Only change code above this line
}

const result = sum([2, 3, 4], 1)
console.log(result)*/

/*?10. Profile Lookup*/

/*const contacts = [
    {
        firstName: "Akira",
        lastName: "Laine",
        number: "0543236543",
        likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
        firstName: "Harry",
        lastName: "Potter",
        number: "0994372684",
        likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
        firstName: "Sherlock",
        lastName: "Holmes",
        number: "0487345643",
        likes: ["Intriguing Cases", "Violin"],
    },
    {
        firstName: "Kristian",
        lastName: "Vos",
        number: "unknown",
        likes: ["JavaScript", "Gaming", "Foxes"],
    },
];

function lookUpProfile(name, prop) {
    // Only change code below this line
    let arr = []
    for (let i = 0; i < contacts.length; i++) {
        if(contacts[i][prop] && contacts[i].firstName === name) {
            return contacts[i][prop]
        } else if (!contacts[i][prop] && contacts[i].firstName === name) {
            arr.push('No such property')
        } else if (contacts[i][prop] && contacts[i].firstName !== name) {
            arr.push('No such contact')
        } else if (!contacts[i][prop] && contacts[i].firstName !== name) {
            arr.push('No such contact')
        }
    }
        return arr[0]
// Only change code above this line
}*/


/*?10. Generate Random Fractions with JavaScript*/

/*function randomFraction() {

    // Only change code below this line

    return Math.random();

    // Only change code above this line
}*/


/*§10. Generate Random Whole Numbers with JavaScript*/

/*function randomWholeNum() {

    // Only change code below this line

    return Math.floor(Math.random()*10);
}

function randomRange(myMin, myMax) {
    // Only change code below this line
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
    // Only change code above this line
}*/

/*§11. Use the parseInt Function*/

/*function convertToInteger(str) {
    return parseInt(str)
}*/

/*§12. Use the parseInt Function with a Radix*/

/*function convertToInteger(str) {
    return parseInt(str, 2)
}*/

/*?13. Use the Conditional (Ternary) Operator*/

/*function checkEqual(a, b) {
    return a === b ? "Equal" : "Not Equal";
}*/

/*?14. Use Multiple Conditional (Ternary) Operators*/

/*function checkSign(num) {
    return num > 0 ? 'positive'
        : num < 0 ? 'negative'
            : 'zero'
}*/


/*?§15. Use Recursion to Create a Countdown*/

/*// Only change code below this line
function countdown(n){
    if (n < 1) {
        return [];
    } else {
        const countArray = countdown(n - 1);
        countArray.unshift(n);
        return countArray;
    }
}*/

/*§16. Use Recursion to Create a Range of Numbers*/

/*function rangeOfNumbers(startNum, endNum) {
    if (startNum > endNum) {
        return [];
    } else {
        const countArray = rangeOfNumbers(startNum + 1, endNum);
        countArray.unshift(startNum);
        return countArray;
    }
}*/


/*?17. Compare Scopes of the var and let Keywords*/

/*function checkScope() {
    let i = 'function scope';
    if (true) {
        let i = 'block scope';
        console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
}*/

/*?18. Mutate an Array Declared with const*/

/*const s = [5, 7, 2];

function editInPlace() {
    // Only change code below this line
    s[0] = 2
    s[1] = 5
    s[2] = 7
    // Only change code above this line
}

editInPlace();*/


/*?19. Prevent Object Mutation*/

/*
function freezeObj() {
    const MATH_CONSTANTS = {
        PI: 3.14
    };
    // Only change code below this line
    Object.freeze(freezeObj);
    // Only change code above this line
    try {
        freezeObj.MATH_CONSTANTS.PI = 99;
    } catch (ex) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}

const PI = freezeObj();*/

/*?20. Use Arrow Functions to Write Concise Anonymous Functions*/

/*
const magic = ()=> {
    return new Date();
};*/

/*?21. Write Arrow Functions with Parameters*/

/*const myConcat = (arr1, arr2) => {
    return arr1.concat(arr2);
};

console.log(myConcat([1, 2], [3, 4, 5]));*/

/*?22. Set Default Parameters for Your Functions*/

/*
const increment = (number = 5, value = 1) => number + value;
*/

/*§23. Use the Rest Parameter with Function Parameters*/

/*
const sum = (...args) => {
    console.log(args)
    return args.reduce((a, b) => a + b, 0);

}

const result = sum(1, 5,2)
console.log(result)*/

/*?24. Use the Spread Operator to Evaluate Arrays In-Place*/

/*const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  // Change this line

console.log(arr2);*/


/*?25. Use Destructuring Assignment to Extract Values from Objects*/

/*const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};

const {today, tomorrow} = HIGH_TEMPERATURES*/

/*§26. Use Destructuring Assignment to Assign Variables from Objects*/

/*const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};


const {today: highToday, tomorrow: highTomorrow  } = HIGH_TEMPERATURES

const {today: today, tomorrow} = HIGH_TEMPERATURES
console.log(today)*/

/*§27. Use Destructuring Assignment to Assign Variables from Nested Objects*/
// nested - вложенный

/*const LOCAL_FORECAST = {
    yesterday: {low: 61, high: 75},
    today: {low: 64, high: 77},
    tomorrow: {low: 68, high: 80}
};


const {today: {low: lowToday, high: highToday}} = LOCAL_FORECAST
console.log(lowToday)*/

/*§28. Use Destructuring Assignment to Assign Variables from Arrays*/

/*let a = 8, b = 6;
// Only change code below this line

[a, b] = [b, a]*/


/*?29. Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements*/

/*const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
    // Only change code below this line
    const [,,...arr] = list; // Change this line
    // Only change code above this line
    return arr;
}
const arr = removeFirstTwo(source);
console.log(arr)*/

/*§30. Use Destructuring Assignment to Pass an Object as a Function's Parameters*/

/*const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};

// Only change code below this line
const half = ({max, min}) => {
   // const {max, min} = stats
    return (max + min) / 2.0;
}

const result = half(stats)
console.log(result)
// Only change code above this line*/

/*?31. Create Strings using Template Literals*/


/*
const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
    // Only change code below this line
    const failureItems = [];
    for (let i = 0; i < arr.length; i++) {
        failureItems.push(`<li class="text-warning">${arr[i]}</li>`)
    }
    // Only change code above this line

    return failureItems;
}

const failuresList = makeList(result.failure);
console.log(failuresList)
*/

/*?32. Write Concise Object Literal Declarations Using Object Property Shorthand*/

/*const createPerson = (name, age, gender) => {
    // Only change code below this line
    //если не присваивать значение явно автоматически будет присвоено значение, которое совпадает с ключом
    return {
        name,
        age,
        gender
    };
    // Only change code above this line
};*/

/*?33. Write Concise Declarative Functions with ES6*/

/*// Only change code below this line
const bicycle = {
    gear: 2,
    setGear(newGear) {
        this.gear = newGear;
    }
};
// Only change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);*/

/*?34. Use class Syntax to Define a Constructor Function*/

/*
class Vegetable{
    constructor(name) {
        this.name = name
    }
}

const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'*/

/*?35. Use getters and setters to Control Access to an Object*/

/*// Only change code below this line
class Thermostat{
    constructor(fahrenheit) {
        this.fahrenheit = fahrenheit
    }
    get temperature() {
        return (5/9 * (this.fahrenheit - 32))
    }
    set temperature (celsius){
        this.fahrenheit = celsius * 9.0 / 5 + 32
    }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius*/

/*?37. Create a JavaScript Promise*/

