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

function checkSign(num) {
    return num > 0 ? 'positive'
        : num < 0 ? 'negative'
            : 'zero'
}


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

function rangeOfNumbers(startNum, endNum) {
    if (startNum > endNum) {
        return [];
    } else {
        const countArray = rangeOfNumbers(startNum + 1, endNum);
        countArray.unshift(startNum);
        return countArray;
    }
}


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

// const result = rangeOfNumbers(1, 5)
// console.log(result)


/*?18. Mutate an Array Declared with const*/

const s = [5, 7, 2];

function editInPlace() {
    // Only change code below this line
    s[0] = 2
    s[1] = 5
    s[2] = 7
    // Only change code above this line
}

editInPlace();