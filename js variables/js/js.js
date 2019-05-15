function Squere(x) {return x*x};
function Sum(x) {return x+x};
function Plus5(x) {return x+5};

function map(_func, _arr) {
    var temp = [];
    for (let i = 0; i < _arr.length; i++) {
        temp[i] = _func(_arr[i]);
    }
    return temp;
}

var array = [2, 3, 5];

console.log(map(Squere, array));
console.log(map(Sum, array));
console.log(map(Plus5, array));
console.log(array);