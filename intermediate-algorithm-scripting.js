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




