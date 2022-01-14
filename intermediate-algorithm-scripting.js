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
function whatIsInAName(collection, source) {
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

console.log(result)


