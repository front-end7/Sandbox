// scripts goes here
function c(_m) {
    console.log(_m);
}


// example 1
// var arr = "hello";
// var arr2 = [3,345,45,3,2,23];

// c(arr.indexOf(3));

// var index = arr.indexOf("l");

// c(arr.slice(index, arr.length));


// example 2
// var arr = "hello";
// var current = 0;

// c(current);

// c(arr[++current]);

// c(current);


// example 3
// var arr = "hello";

// for (let index = 0; index < arr.length; index++) {
//     c(arr[index]);
// }

// example 4

var symbol = '*';
var stroke = '';

for(var i = 0; i < 5; i++) {
    c(stroke += i+1 + " ");
}