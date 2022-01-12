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

function largestOfFour(arr) {
    let maxItems = []
    for (let i = 0; i < arr.length; i++) {
        maxItems.push(Math.max(...arr[i]))
    }
    return maxItems
}

const result = largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
console.log(result)

