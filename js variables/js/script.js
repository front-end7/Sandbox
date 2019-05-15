// scripts goes here
let b;
// const c;

function CoinUp() {
    alert( Math.round( Math.random() ) ? "Орел" : "Решка" );
}

function PrintDate() {
    alert( new Date().toString() );
}

function Pow(base, exponent) {
    var temp = base;
    for (let i = 1; i < exponent; i++) {
        temp *= base;
    }
    return temp;
}

alert(Pow(2,8));

/**
 * @param {number} a
 * @type {number}
 */
var a = 5;
b = 'hello'; // "hello"
// c = `const`;

/**
 * @type {string}
 */
var c = 7 * a;
c = b + a;

var bool = true; // false

// alert( c );

var num = prompt("Введите число");

alert(num);

