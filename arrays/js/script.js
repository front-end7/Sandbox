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
// var symbol = '*';
// var stroke = '';

// for(var i = 0; i < 5; i++) {
//     console.log(stroke += i+1 + " ");
// }

// example 5
// var cols = 4;
// var rows = 4;

// var buffer = '';
// var current = 1;

// for (let i = 0; i < rows; i++) {
    
//     for (let j = 0; j < cols; j++) {
        
//         buffer += current++ + " ";
    
//     }
    
//     console.log(buffer);
//     buffer = '';

// }

// example 6
// var cols = 15;
// var rows = 13;

// var inner = "+";
// var outer = "-";

// var buffer = '';
// var stroke = "";

// for (let i = 0; i < rows; i++) {
    
//     for (let j = 0; j < cols; j++) {
        
//         if (0 == i || i == rows - 1 || j == 0 || j == cols - 1) {

//             buffer += outer + " ";

//         }
//         else {

//             buffer += inner + " ";

//         }
    
//     }

//     stroke += buffer + "\n";
//     buffer = '';
    
// }

// console.log(stroke);

// example 7
// var arr = "hello";
// var arr2 = [234,23423,42,323,45];
// var arr3 = {
//     "name": "vasya",
//     "lastName": "pypkin",
//     "age": 15,
//     "skills": [
//         "html",
//         "js",
//         "css"
//     ]
// }

// 1)
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// 2)
// arr2.forEach(element => {
//     console.log(element);
// });

// 3)
// for (const key in arr3) {
//     if (arr3.hasOwnProperty(key)) {
//         console.log(key, arr3[key]);
//     }
// }

// 4)
// for (const iterator of arr2) {
//     console.log(iterator);
// }