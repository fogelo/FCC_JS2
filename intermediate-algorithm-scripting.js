/*?1. Sum All Numbers in a Range*/

/*function sumAll(arr) {
    arr.sort((a, b) => a - b)
    let result = 0
    for (let i = arr[0]; i <= arr[1]; i++) {
        result += i
    }
    return result;
}

const result = sumAll([1, 4]);
console.log(result)*/

/*§2. Diff Two Arrays*/

//@ мое решение
/*function diffArray(arr1, arr2) {
    let result = []
        for (let i = 0; i < arr1.length; i++) {
            if (!arr2.includes(arr1[i])) {
                result.push(arr1[i])
            }
        }
        for (let i = 0; i < arr2.length; i++) {
            if (!arr1.includes(arr2[i])) {
                result.push(arr2[i])
            }
        }
    return result
}*/

/*//@ решения из ответов
function diffArray(arr1, arr2) {
    return [...arr1, ...arr2].filter(item => !arr1.includes(item) || !arr2.includes(item))
}

const result = diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
console.log(result)*/

/*?3. Seek and Destroy*/

/*
function destroyer(arr) {
    const [arr1, ...rest] = [...arguments];
    return arr1.filter((item)=>!rest.includes(item))
}

const result = destroyer([1, 2, 3, 1, 2, 3], 2, 3);
console.log(result)*/

/*§4. Wherefore art thou*/

/*//@ мое решение (так не проканало, но все равно интересно)
function whatIsInAName(collection, source) {
    const arr = [];
    // Only change code below this line
    return collection.filter((item)=> JSON.stringify(item).includes(JSON.stringify(source).replace(/{|}/g, '')))
    // Only change code above this line
}*/


//@ решение из ответов
/*function whatIsInAName(collection, source) {
    let srcKeys = Object.keys(source)
    return collection.filter((obj) => {
       return  srcKeys.every((item) => {
            return obj.hasOwnProperty(item) && obj[item]===source[item] //будет работать и без obj.hasOwnProperty(item)
        })
    })
}

// const arr = [{first: "Romeo", last: "Montague"}, {first: "Mercutio", last: null}, {first: "Tybalt", last: "Capulet"}]
// const result = whatIsInAName(arr, {last: "Capulet"});
const arr = [{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }]
const result = whatIsInAName(arr, { "apple": 1, "cookie": 2 });
console.log(result)*/


/*§5. Spinal Tap Case*/
/*//@ мое решение
function spinalCase(str) {
    return str.replace(/[A-Z]/g, (letter) => ' ' + letter)
        .trim()
        .toLowerCase()
        .split(/_|\s+/)
        .filter((item)=>item)
        .join('-')
}*/

//@ решения из ответов №1
/*function spinalCase(str) {
    // Create a variable for the white space and underscores.
    let regex = /\s+|_+/g;

    // Replace low-upper case to low-space-uppercase
    str = str.replace(/([a-z])([A-Z])/g, item=>item.split('').join(' '));
    console.log(str)
    // Replace space and underscore with -
    return str.replace(regex, "-").toLowerCase();
}*/

//@ решения из ответов №2
/*function spinalCase(str) {
    return str
        // /(?=[A-Z])/ - по факту эта проверка находит 'место' перед любой заглавной буквой и можно так разделить строку
        .split(/\s|_|(?=[A-Z])/)
        .join("-")
        .toLowerCase();
}

// test here
const result = spinalCase('thisIsSpinalTap');
console.log(result)*/

/*?6. Search and Replace*/
//@ мое решение
/*function myReplace(str, before, after) {
    let regBefore = new RegExp(`${before}`)
    const check = (item) => {
        if(item.toLowerCase() === item) {
            return after.toLowerCase()
        } else {
            after = [...after]
            after[0] = after[0].toUpperCase()
            return after.join('')
        }
    }
    return str.replace(regBefore, check);
}

const result = myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");
console.log(result)
*/

/*?6. DNA Pairing*/
//@ мое решение
/*function pairElement(str) {
    let result = []
    for (let i = 0; i < str.length; i++) {
        str[i] === 'G' ? result.push(['G', 'C'])
            : str[i] === 'C' ? result.push(['C', 'G'])
                : str[i] === 'A' ? result.push(['A', 'T'])
                    : str[i] === 'T' ? result.push(['T', 'A']) : ''
    }
    return result;
}*/

//@ best
/*
function pairElement(str) {
    let pairs = {
        A: 'T',
        T: 'A',
        C: 'G',
        G: 'C',
    }
    let arr = str.split('')
    return arr.map(x=>[x, pairs[x]])
}
const result = pairElement("ATCGA");
console.log(result)
*/

/*?7. Missing letters*/

/*
function fearNotLetter(str) {
    for (let i = 0; i < str.length; i++) {
        if (str.charCodeAt(i + 1) - str.charCodeAt(i) === 2) {
            return String.fromCharCode((str.charCodeAt(i + 1) + str.charCodeAt(i)) / 2)
        }
    }
    return undefined
}

const result = fearNotLetter("abcde");
console.log(result)
*/

/*?8. Sorted Union*/
//@ мое решение
/*function uniteUnique(arr) {
    let arrays = [...arguments]
    let result = []
    for (let i = 0; i < arrays.length; i++) {
        result = [...result, ...arrays[i]]
    }
    return [...new Set(result)]
}*/

/*
//@ решение из ответов
function uniteUnique(...arrays) {
    let result = [].concat(...arrays)
    return [...new Set(result)]
}

const result = uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
console.log(result)
*/

// Object.is()

/*?9. Convert HTML Entities*/

//@ мое решение
/*function convertHTML(str) {
    function replacer(item) {
        item = item.replace(`&`, '&amp;')
        item = item.replace(`<`, '&lt;')
        item = item.replace(`>`, '&gt;')
        item = item.replace(`"`, '&quot;')
        item = item.replace(`'`, '&apos;')
        return item
    }

    return str.replace(/&|<|>|"|'/g, replacer);
}*/

//@ решение из ответов (как мое только немного оптимизированней)
/*
function convertHTML(str) {
    let htmlEntities = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&apos;",
    }
    return str.replace(/[&<>"']/g, match=>htmlEntities[match]) // то есть repalce как-бы вызывается каждый раз когда
}

const result = convertHTML("<>"); //&amp
console.log(result)
*/

/*?10. Sum All Odd Fibonacci Numbers*/
//@ мое решение
/*function sumFibs(num) {
    let arr = [0, 1]
    for (let i = 0; i < num; i++) {
        if (arr[i] + arr[i + 1] <= num) {
            arr.push(arr[i] + arr[i + 1])
        }
    }
    console.log(arr)
    return arr
        .filter(item => item % 2 !== 0)
        .reduce((prev,item)=>prev+item)
}*/

/*const result = sumFibs(1000);
console.log(result)*/

/*§11. Sum All Primes*/

//@ мое решение (не прошло тест)
/*function sumPrimes(num) {
    let numbers = []
    for (let i = 1; i <= num; i++) {
        numbers.push(i)
    }
    let primeNumbers = numbers.filter(item => !(item === 1
        || item % 2 === 0 && item !== 2
        || item % 3 === 0 && item !== 3
        || item % 5 === 0 && item !== 5
        || item % 7 === 0 && item !== 7)
    )
    console.log(numbers)
    console.log(primeNumbers)
    return primeNumbers.reduce((prev, item) => prev + item, 0)
}*/

//@ решение из ответов №1 (фишка в Math.sqrt() если сделать просто до num цикл доработает до конца и в итоге вернет false)
/*function sumPrimes(num) {
    // Helper function to check primality
    function isPrime(num) {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0)
                return false;
        }
        return true;
    }

    // Check all numbers for primality
    let sum = 0;
    for (let i = 2; i <= num; i++) {
        if (isPrime(i))
            sum += i;
    }
    return sum;
}*/

/*//@ решение из ответов №2 (вот это решение мне нравится, но оно менее эффективно)
function sumPrimes(num) {
    let primes = []
    for (let i = 2; i <= num; i++) {
        if (primes.every(prime => i % prime !== 0)) {
            primes.push(i)
        }
    }
    return primes.reduce((prev, item) => prev + item)
}

const result = sumPrimes(4);
console.log(result)*/

/*?12. Smallest Common Multiple*/
/*
//@ мое решение (не самое эффективное, но как есть. В ответах вроде не намного лучше )
function smallestCommons(arr) {
    arr.sort((a, b) => a - b)
    let newArr = []
    for (let i = arr[0]; i <= arr[arr.length - 1]; i++) {
        newArr.push(i)
    }
    for (let i = newArr[newArr.length - 1]; i <= newArr.reduce((prev, item) => prev * item, 1); i++) {
        if (newArr.every(item => i % item === 0)) {
            return i
        }
    }
}

const result = smallestCommons([23, 18]);
console.log(result)*/


/*?13. Drop it*/
/*
//@ мое решение
function dropElements(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            return arr.slice(i)
        }
    }
    return []
}

const result = dropElements([1, 2, 3, 4], function (n) {
    return n > 4
})
console.log(result)*/

/*?14. Steamroller*/

/*//@ мое решение, подсмотрел в мозиле
function steamrollArray(arr) {
    return arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? steamrollArray(val) : val), [])
}

const result = steamrollArray([1, [2], [3, [[4]]]]);
console.log(result)*/

/*?15. Binary Agents*/
//@ мое решение

/*function binaryAgent(str) {
    return  str.split(' ').map(item=>parseInt(item, 2)).map(item=>String.fromCharCode(item)).join('')
}

const result = binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 " +
    "01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
console.log(result)*/

/*?16. Binary Agents*/
//@ мое решение
/*function truthCheck(collection, pre) {
    for (let i = 0; i < collection.length; i++) {
        if (!!collection[i][pre] === false) {
            return false
        }
    }
    return true
}*/


/*//@ решение из ответов (более лаконичное)
function truthCheck(collection, pre) {
    return collection.every(obj=>!!obj[pre]) // !!знаки не обязательно, но так наглядней (сам поставил)
}
const result = truthCheck([{"user": "Tinky-Winky", "sex": "male"},
    {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "male"}], "sex");
console.log(result)*/

/*?17. Arguments Optional*/

/*function addTogether(a) {
    if(typeof a !== 'number'){
        return undefined
    }
    if ([...arguments].length > 1) {
        const [a, b] = [...arguments]
        return (typeof a !== 'number' || typeof b !== 'number') ? undefined : a + b
    } else {

        return function (b) {
            return (typeof a !== 'number' || typeof b !== 'number') ? undefined : a + b
        }
    }
}

const result = addTogether('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
console.log(result)*/

/*?17. Make a Person*/
/*const Person = function (firstAndLast) {
    // Only change code below this line
    // Complete the method below and implement the others similarly
    this.getFullName = function () {
        return firstAndLast
    }
    this.getFirstName = function () {
        return firstAndLast.split(' ')[0]
    }
    this.getLastName = function () {
        return firstAndLast.split(' ')[1]
    }
    this.setFullName = function (newFullName) {
        firstAndLast = newFullName
    }
    this.setFirstName = function (newFirstName) {
        firstAndLast = firstAndLast.replace(/^\w+/, newFirstName)
    }
    this.setLastName = function (newLastName) {
        firstAndLast = firstAndLast.replace(/\w+$/, newLastName)
    }
    return firstAndLast;
};

const bob = new Person('Bob Ross');
console.log(bob)
bob.setLastName('anton')
const result = bob.getLastName();
console.log(result)
console.log(Object.keys(bob).length)*/

/*?18. Map the Debris*/

//@ решение из ответо (просто скопировал и не стал разбираться что есть что
function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    const newArr = [];

    for (let elem in arr) {
        const orbitalPer = Math.round(
            2 * Math.PI * Math.sqrt(Math.pow(arr[elem].avgAlt + earthRadius, 3) / GM)
        );
        newArr.push({name: arr[elem].name, orbitalPeriod: orbitalPer});
    }
    return newArr;
}

// test here
orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);

















