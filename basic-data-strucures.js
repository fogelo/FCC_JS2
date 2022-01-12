/*§1. Check if an Object has a Property*/

/*let users = {
    Alan: {
        age: 27,
        online: true
    },
    Jeff: {
        age: 32,
        online: true
    },
};

//@ метод hasOwnProperty()
console.log(users.hasOwnProperty('Alan'))

//@ конструкция с помощью in
console.log('Alan' in users)*/


/*§2. Iterate Through the Keys of an Object with a for...in Statement*/
//нужно было проверить сколько пользователей онлайн

/*const users = {
    Alan: {
        online: false
    },
    Jeff: {
        online: true
    },
    Sarah: {
        online: false
    }
}

function countOnline(usersObj) {
    // Only change code below this line
    let result = 0;
    for (let index_key in usersObj){
        if(usersObj[index_key].online) {
            result++
        }
    }
    return result
    // Only change code above this line
}

console.log(countOnline(users));*/

/*?3. Factorialize a Number*/
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


/*?4.Find the Longest Word in a String*/
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
