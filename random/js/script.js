// scripts goes here

// document.getElementById("btn").addEventListener("click", Random);

// function Random() {
//     var randomNumber = Math.random() * 6; //возвращяет нам число в диапазоне от 0 до 5
//     var randomRound = Math.ceil(randomNumber); //округляет число до запятой
//     console.log( randomRound );
// }

// function Random(min = 21, max = 88) {
//     var randomNumber = Math.random() * (max - min) + min;
//     var randomRound = Math.round(randomNumber);
//     console.log(randomRound);
// }

function Random() {
    var randomNumber = Math.random() * (arguments[1] - arguments[0]) + arguments[0];
    var randomRound = Math.round(randomNumber);
    // console.log(randomRound);
    return randomRound;
}

// // Random(prompt(), prompt());
// Random(2, 5);
// var r = Random(24, 51);
// alert(r);

// var rand = Random(24, 51);

// var number;

// do {
//     number = prompt("Введите число");
//     if (number > rand) {
//         alert("число должно быть меньше");
//     } else if (number == rand) {
//         alert("ПАБЕДА!")
//     } else {
//         alert("число должно быть больше");
//     }
// } while (rand != number);

// function min(_a, _b) {
//     if (_a > _b) {
//         return _a;
//     }
//     if (_b > _a) {
//         return _b;
//     }
//     // return _a > _b ? _a : _b;
// }

// var a = setTimeout(() => {
//     console.log(min(19, 5));
// }, 3000);

// clearTimeout(a);


// setInterval(() => {
//     console.log(min(19, 5));
// }, 1000);

// do {
    
// } while (confirm() != true);

function ucFirst(_str) {
    var первыйСимвол = _str.charAt(0); // берем первый символ
    var первыйСимволВВерхнемРегистре = первыйСимвол.toUpperCase(); // возводим первый символ в верхний регистр
    /**
     * @method replace где мы меняем.(что меняем, на что мы меняем)
     */
    var заменитьПервыйСимвол = _str.replace(первыйСимвол, первыйСимволВВерхнемРегистре); // заменяем первый символ на новый
    return заменитьПервыйСимвол; // отправляем на гитхаб
}

console.log(ucFirst("расилий"));