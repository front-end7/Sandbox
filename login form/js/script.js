// scripts goes here
var log = document.getElementById('log');

var login = document.getElementById('login');
var pass = document.getElementById('pass');
var submit = document.getElementById('submit');

var admin = "god";
var correctPass = "123";

submit.addEventListener('click', Check);

function Check() {
    log.innerHTML += "logining...<br>";
    if (login.value == admin) {
        log.innerHTML += "login is correct<Br>";
    }
    if (pass.value == correctPass) {
        log.innerHTML += "password is correct<br>";
    }
}