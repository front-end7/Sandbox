// scripts goes here
var log = document.getElementById('log');

var login = document.getElementById('login');
var pass = document.getElementById('pass');
var submit = document.getElementById('submit');

var users = [
    {
        login: "admin",
        pass: "123"
    },
    {
        login: "vasya",
        pass: "qwe123"
    },
    {
        login: "user",
        pass: "398kPr0Z"
    }
];

submit.addEventListener('click', Check);

function Check() {
    log.innerText = "";
    var loginCorrect = false;
    var passwordCorrect = false;
    for (let i = 0; i < users.length; i++) {
        const element = users[i];
        if (element.login == login.value) {
            loginCorrect = true;
            if (element.pass == pass.value) {
                passwordCorrect = true;
                break;
            }
            else {
                log.innerText += "password incorrect";
                continue;
            }
        }
    }
    log.innerText += loginCorrect && passwordCorrect ? "wellcome" : "";
}