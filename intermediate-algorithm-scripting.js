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

function destroyer(arr) {
    const [arr1, ...rest] = [...arguments];
    return arr1.filter((item)=>!rest.includes(item))
}

const result = destroyer([1, 2, 3, 1, 2, 3], 2, 3);
console.log(result)