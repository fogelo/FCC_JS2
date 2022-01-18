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
/*function convertToRoman(num) {
    let obj = {
        1: 'I', 2: 'II', 3: 'III', 4: 'IV', 5: 'V', 6: 'VI', 7: 'VII', 8: 'VIII', 9: 'IX', 10: 'X',
        20: 'XX', 30: 'XXX', 40: 'XL', 50: 'L', 60: 'LX', 70: 'LXX', 80: 'LXXX', 90: 'XC', 100: 'C',
        200: 'CCC', 300: 'CCC', 400: 'CD', 500: 'D', 600: 'DC', 700: 'DCC', 800: 'DCCC', 900: 'CM', 1000: 'M',
        2000: 'MM', 3000: 'MMM',
    }
    let arr = num.toString().split('').reverse()
    for (let i = 0; i < arr.length; i++) {
        arr[i] !== '0' ? arr[i] = arr[i] + '0'.repeat(i) : arr[i] = ''
    }
    return arr.reverse()
        .join(' ')
        .replace(/\d+/g, match => obj[match])
        .replace(/\s/g, '')
}
const result = convertToRoman(501);
console.log(result)*/

/*?3. Caesars Cipher*/

/*function rot13(str) {
    return [...str]
        .map(item => item.charCodeAt(0) - 13)
        .map(item => item === 19 || item === 50 || item === 33 || item === 20 ? item + 13
            : item < 65 ? 90 - 64 + item : item)
        .map(item => String.fromCharCode(item))
        .join('')
}

const result = rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT?.!");*/


/*?4. Telephone Number Validator*/

/*
function telephoneCheck(str) {
    let regExp = /^1?\s?(\(\d{3}\)|\d{3})-?\s?\d{3}-?\s?\d{4}$/g
    return regExp.test(str)
}

const result = telephoneCheck("(275)76227382");
console.log(result)
*/


/*§5. Cash Register*/
//@ мое решение до рефакторинга
/*function checkCashRegister(price, cash, cid) {
    let change = []
    let differ = cash - price
    let allMoney = cid.reduce((prev, item) => prev + item[1], 0)

    if (allMoney < differ) {
        return {status: "INSUFFICIENT_FUNDS", change: change}
    }
    if (allMoney === differ) {
        return {status: "CLOSED", change: [...cid]}
    }
    if (differ < 100) {
        change.push(["ONE HUNDRED", 0])
    }
    if (differ > 100) {
        if (differ / 100 > cid[8][1] / 100) {
            change.push(["ONE HUNDRED", cid[8][1]])
            differ = differ - cid[8][1]
        } else {//differ / 100 < cid[8][1] / 100)
            change.push(["ONE HUNDRED", Math.trunc(differ / 100) * 100])
            differ = differ % 100
        }
    }
    differ = Math.round(differ*100)/100

    console.log(differ)
    if (differ < 20) {
        change.push(["TWENTY", 0])
    }
    if (differ > 20) {
        if (differ / 20 > cid[7][1] / 20) {
            change.push(["TWENTY", cid[7][1]])
            differ = differ - cid[7][1]
        } else {
            change.push(["TWENTY", Math.trunc(differ / 20) * 20])
            differ = differ % 20
        }
    }
    console.log(differ)

    differ = Math.round(differ*100)/100
    console.log(differ)
    if (differ < 10) {
        change.push(["TEN", 0])
    }
    if (differ > 10) {
        if (differ / 10 > cid[6][1] / 10) {
            change.push(["TEN", cid[6][1]])
            differ = differ - cid[6][1]
        } else {
            change.push(["TEN", Math.trunc(differ / 10) * 10])
            differ = differ % 20
        }
    }
    differ = Math.round(differ*100)/100

    if (differ < 5) {
        change.push(["FIVE", 0])
    }
    if (differ > 5) {
        if (differ / 10 > cid[5][1] / 5) {
            change.push(["FIVE", cid[5][1]])
            differ = differ - cid[5][1]
        } else {
            change.push(["FIVE", Math.trunc(differ / 5) * 5])
            differ = differ % 5
        }
    }
    differ = Math.round(differ*100)/100

    if (differ < 1) {
        change.push(["ONE", 0])
    }
    if (differ > 1) {
        if (differ / 1 > cid[4][1] / 1) {
            change.push(["ONE", cid[4][1]])
            differ = differ - cid[4][1]
        } else {
            change.push(["ONE", Math.trunc(differ / 1) * 1])
            differ = differ % 1
        }
    }
    differ = Math.round(differ*100)/100

    if (differ < 0.25) {
        change.push(["QUARTER", 0])
    }
    if (differ > 0.25) {
        if (differ / 0.25 > cid[3][1] / 0.25) {
            change.push(["QUARTER", cid[3][1]])
            differ = differ - cid[3][1]
        } else {
            change.push(["QUARTER", Math.trunc(differ / 0.25) * 0.25])
            differ = differ % 0.25
        }
    }
    differ = Math.round(differ*100)/100

    if (differ < 0.1) {
        change.push(["DIME", 0])
    }
    if (differ > 0.1) {
        if (differ / 0.1 > cid[2][1] / 0.1) {
            change.push(["DIME", cid[2][1]])
            differ = differ - cid[2][1]
        } else {
            change.push(["DIME", Math.trunc(differ / 0.1) * 0.1])
            differ = differ % 0.1
        }
    }
    differ = Math.round(differ*100)/100

    if (differ < 0.05) {
        change.push(["NICKEL", 0])
    }
    if (differ > 0.05) {
        if (differ / 0.05 > cid[1][1] / 0.05) {
            change.push(["NICKEL", cid[1][1]])
            differ = differ - cid[1][1]
        } else {
            change.push(["NICKEL", Math.trunc(differ / 0.05) * 0.05])
            differ = differ % 0.05
        }
    }
    differ = Math.round(differ*100)/100

    if (differ < 0.01) {
        change.push(["PENNY", 0])
    }
    if (differ > 0.01) {
        if (differ / 0.01 > cid[0][1] / 0.01) {
            change.push(["PENNY", cid[0][1]])
            differ = differ - cid[0][1]
        } else {
            change.push(["PENNY", Math.trunc(differ / 0.01) * 0.01])
            differ = differ % 0.01
        }
    }
    console.log(differ)
    console.log(change)
    let suitableChange = change.reduce((prev, item) => prev + item[1], 0)

        if(suitableChange<(cash-price)){
           return  {status: "INSUFFICIENT_FUNDS", change: []}
        }
    return {status: "OPEN", change: change.filter(item => item[1] !== 0)}
}*/

//@ мое решение после рефакторинга
function checkCashRegister(price, cash, cid) {
    let change = []
    let differ = cash - price
    let allMoney = cid.reduce((prev, item) => prev + item[1], 0)
    let billDenominations = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100]

    if (allMoney < differ) {
        return {status: "INSUFFICIENT_FUNDS", change: change}
    }
    if (allMoney === differ) {
        return {status: "CLOSED", change: [...cid]}
    }

    for (let i = 8; i >= 0; i--) {
        if (differ < billDenominations[i]) {
            change.push([cid[i][0], 0])
        }
        if (differ > billDenominations[i]) {
            if (differ / billDenominations[i] > cid[i][1] / billDenominations[i]) {
                change.push([cid[i][0], cid[i][1]])
                differ = differ - cid[i][1]
            } else {
                change.push([cid[i][0], Math.trunc(differ / billDenominations[i]) * billDenominations[i]])
                differ = differ % billDenominations[i]
            }
        }
        differ = Math.round(differ * 100) / 100
    }

    let suitableChange = change.reduce((prev, item) => prev + item[1], 0)
    if (suitableChange < (cash - price)) {
        return {status: "INSUFFICIENT_FUNDS", change: []}
    }
    return {status: "OPEN", change: change.filter(item => item[1] !== 0)}
}


const result = checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55],
    ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
console.log(result)

/*
$0.01 (PENNY)
$0.05 (NICKEL)
$0.1 (DIME)
$0.25 (QUARTER)
$1 (ONE)
$5 (FIVE)
$10 (TEN)
$20 (TWENTY)
$100 (ONE HUNDRED)
*/
