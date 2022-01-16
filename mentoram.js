/*§1.*/
function zeroArray(m, n) {
    // Creates a 2-D array with m rows and n columns of zeroes
    let newArray = [];
    let row = [];
    for (let i = 0; i < m; i++) {
        // Adds the m-th row into newArray

        for (let j = 0; j < n; j++) {
            // Pushes n zeroes into the current row to create the columns
            row.push(0);
        }
        // Pushes the current row, which now has n zeroes in it, to the array
        newArray.push(row);
    }
    return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);

/*
почему этот код выводит в консоль это
[[0, 0, 0, 0, 0, 0],
 [0, 0, 0, 0, 0, 0],
 [0, 0, 0, 0, 0, 0]]

 а не это
 [[0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0]]*/

/*§2. а это как работает?*/
/*при нестрогом сравнении у объекта будет вызван toString и valueOf,
чтобы сравнить его с числом. А мы переопределяли этот метод.*/

const a = {
    i: 1,
    toString: function () { //можно вместо toString использовать valueOf
        return a.i++;
    }
}

if(a == 1 && a == 2 && a == 3) {
    console.log('Hello World!');
}

/*§3. а это как работает? (как вообще понять и не бояться рекурсии)*/
const arr = [1, 2, [3, 4, [5, 6]]];

function flatDeep(arr, d = 1) {
    return d > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val), [])
        : arr.slice();
};

const result = flatDeep(arr, Infinity);
console.log(result)