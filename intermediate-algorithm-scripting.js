/*?1. Sum All Numbers in a Range*/

function sumAll(arr) {
    arr.sort((a, b) => a - b)
    let result = 0
    for (let i = arr[0]; i <= arr[1]; i++) {
        result += i
    }
    return result;
}

const result = sumAll([1, 4]);
console.log(result)