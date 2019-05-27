// scripts goes here
var log = document.getElementById('log');

var login = document.getElementById('login');
var pass = document.getElementById('pass');
// var submit = document.getElementById('submit');

// var users = [
//     {
//         login: "admin",
//         pass: "123"
//     },
//     {
//         login: "vasya",
//         pass: "qwe123"
//     },
//     {
//         login: "user",
//         pass: "398kPr0Z"
//     }
// ];

// submit.addEventListener('click', Check);

// function Check() {
//     log.innerText = "";
//     var loginCorrect = false;
//     var passwordCorrect = false;
//     for (let i = 0; i < users.length; i++) {
//         const element = users[i];
//         if (element.login == login.value) {
//             loginCorrect = true;
//             if (element.pass == pass.value) {
//                 passwordCorrect = true;
//                 break;
//             }
//             else {
//                 log.innerText += "password incorrect";
//                 continue;
//             }
//         }
//     }
//     log.innerText += loginCorrect && passwordCorrect ? "wellcome" : "";
// }

var admin = 'admin';

login.addEventListener('keypress', Validate);

function Validate(event) {
    console.log(event);
    if (event.ctrlKey && event.keyCode == 69) {
        e.preventDefault();     
        e.stopPropagation();
    }
    if ( (login.value.length > 2) && admin == login.value) {
        log.innerText = 'wellcome';
    }
    else {
        log.innerText = "login is incorrect";
    }
    
}

// document.onkeydown = function (e) {
//     e = e || window.event;//Get event
//     if (e.ctrlKey) {
//         var c = e.which || e.keyCode;//Get key code
//         switch (c) {
//             case 69://Block Ctrl+S
//                 e.preventDefault();     
//                 e.stopPropagation();
//             break;
//         }
//     }
// };

window.addEventListener('scroll', Fixed);

var hr = document.getElementsByTagName('hr')[0];

var offsetHr = hr.offsetTop - window.outerHeight + 50;

function Fixed() {

    if (window.pageYOffset < offsetHr) {
        hr.classList.add('fixed');
    }
    else {
        hr.classList.remove('fixed');
    }

}