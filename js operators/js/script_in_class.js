/**
 * @returns {number}
 * @description ask user to ented number
 */
function askNum(_msg) {
    var num;
    num = prompt("Введите " + _msg + " число ");
    return num;
}

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

var first, second;

do {
    first = askNum("первое");
} while (!isNumeric(first));

do {
    second = askNum("второе");
} while (!isNumeric(second));

first = parseInt(first);
second = parseInt(second);


var result = first + second;

alert("Сумма чисел равна: " + result)