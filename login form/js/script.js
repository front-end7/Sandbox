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
    
}