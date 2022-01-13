/*?1. Factorialize a Number*/
/*function factorialize(num) {
    let result = 1;
    while(num){
        result = result * num
        num--
        console.log(num)
    }
    console.log(result)
    return result;
}

const r = factorialize(5);
console.log(r)*/


/*?2.Find the Longest Word in a String*/
//@ решение №1 с помощью цикла for
/*function findLongestWordLength(str) {
    let arr = str.split(' ')
    let maxLength = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > maxLength) {
            maxLength = arr[i].length
        }
            }
    return maxLength;
}*/

//@ решение №2 c помощью reduce

/*function findLongestWordLength(str) {
    return str.split(' ').reduce((prev, item)=>{
        return Math.max(prev, item.length)
    }, 0)
}*/

//@ решение №3

/*
function findLongestWordLength(str) {
    return Math.max(...str.split(' ').map(item => item.length))
}

const result = findLongestWordLength("The quick brown fox jumped over the lazy dog");
console.log(result)
*/

/*?3. Return Largest Numbers in Arrays*/

/*function largestOfFour(arr) {
    let maxItems = []
    for (let i = 0; i < arr.length; i++) {
        maxItems.push(Math.max(...arr[i]))
    }
    return maxItems
}

const result = largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
console.log(result)*/

/*§4. Confirm the Ending*/

/*
function confirmEnding(str, target) {
    let regexp = new RegExp(`${target}$`)
    console.log(regexp)
    return regexp.test(str);
}

const result = confirmEnding("Bastian", "a");
console.log(result)*/

/*?4. Repeat a String Repeat a String*/
//@ решение №1
/*
function repeatStringNumTimes(str, num) {
    return num >= 0 ? str.repeat(num) : ''
}
*/

//@ решение №2
/*
function repeatStringNumTimes(str, num) {
    let result = ''
    for (let i = 0; i < num; i++) {
        result += str
    }
    return result
}

const result = repeatStringNumTimes("abc", 3);
console.log(result)*/

/*§5 Truncate a String*/

//@ мое решение с регулярками
/*function truncateString(str, num) {
    let regexp = new RegExp(`^.{${num}}`, 'i')
    if (str.length <= num) {
        return str + '.'
    }
    return str.match(regexp, '')[0] + '...'
}*/

//@ решение с помощью slice из ответов

/*
function truncateString(str, num) {
    return num >= str.length ? str : str.slice(0, num) + '...'
}

const result = truncateString("A-tisket a-tasket A green and yellow basket", 1000);
console.log(result)
*/

/*?6 Finders Keepers*/
//@ мое решение (не воспользовался передаваемой функцией)
/*function findElement(arr, func) {
   return arr.find((item) => item % 2 === 0)
}*/


//@ решение из ответов
/*function findElement(arr, func) {
    return arr.find(func)
}

const result = findElement([1, 2, 3, 4], num => num % 2 === 0);
console.log(result)*/


/*?6 Boo who*/

function booWho(bool) {
    return typeof bool === 'boolean'
}


const result = booWho(false);
console.log(result)