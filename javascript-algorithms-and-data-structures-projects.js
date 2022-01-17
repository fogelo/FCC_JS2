/*?1. Palindrome Checker*/
/*//@мое решение
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
console.log(result)*/

/*?2. Roman Numeral Converter*/
function convertToRoman(num) {
    console.log(num)
    let obj = {
        1: 'I', 2: 'II', 3: 'III', 4: 'IV', 5: 'V', 6: 'VI', 7: 'VII', 8: 'VIII', 9: 'IX', 10: 'X',
        20: 'XX', 30: 'XXX', 40: 'XL', 50: 'L', 60: 'LX', 70: 'LXX', 80: 'LXXX', 90: 'XC', 100: 'C',
        200: 'CCC', 300: 'CCC', 400: 'CD', 500: 'D', 600: 'DC', 700: 'DCC', 800: 'DCCC', 900: 'CM', 1000: 'M',
        2000: 'MM', 3000: 'MMM',
    }
    let arr = num.toString().split('').reverse()
    console.log(arr)
    for (let i = 0; i < arr.length; i++) {
        arr[i] !== '0' ? arr[i] = arr[i] + '0'.repeat(i) : arr[i] = ''
    }
    return arr.reverse()
        .join(' ')
        .replace(/\d+/g, match => obj[match])
        .replace(/\s/g, '')
}

const result = convertToRoman(501);
console.log(result)
