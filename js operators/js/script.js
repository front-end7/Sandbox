var a = 1,
    b = 2;

var result;

// if (a + b < 4) {
// result = 'Мало';
// } else {
// result = 'Много';
// }

result = (a + b < 4) ? 'Мало' : 'Много';

document.write(result);



// var name = prompt("Введите логин");

// alert(name);

// if (name == "Админ") {
//     var pass = prompt("Введите пароль");
//     if (pass == 'Чёрный Властелин') {
//         alert('Добро пожаловать!');
//     } else if (pass != 'Чёрный Властелин') {
//         alert("Пароль неверен");
//     }
//     else {
//         alert('Вход отменён');
//     }
// } else if (name != "Админ") {
//     alert('Я вас не знаю');
// }
// else {
//     alert('Вход отменён');
// }

// switch (prompt("Введите логин")) {
//     case "Админ":
//         switch (prompt("Введите пароль")) {
//             case 'Чёрный Властелин':
//                 alert('Добро пожаловать!');
//                 break;
//             case null:
//                 alert('Вход отменён');
//                 break;
//             default:
//                 alert("Пароль неверен");
//                 break;
//         }
//         break;
//     case null:
//         alert('Вход отменён');
//         break;
//     default:
//         alert('Я вас не знаю');
//         break;
// }
