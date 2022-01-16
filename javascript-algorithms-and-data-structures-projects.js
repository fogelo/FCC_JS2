/*?1. Palindrome Checker*/
//@мое решение
function palindrome(str) {
    let obj = {
        '_': '',
        ' ': '',
        ',': '',
        '.': '',
        '-': '',
        '(': ')',
        '\\': '/',
    }
    str = str.replace(/[\s_,.\-(\\]/g, match=>obj[match]).toLowerCase()
    console.log(str)
    let arr = str.split('')
    console.log(arr.join(''))
    for (let i = 0; i < arr.length; i++) {
        if (!(arr[i] === arr[arr.length - 1 - i])) {
            return false
        }
    }
    return true;
}

const result = palindrome("race car");
console.log(result)
//@ решение из ответов проработать
