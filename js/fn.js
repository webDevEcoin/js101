// function


function ecoin() {
    console.log("Welcom To ecoin");
}

//ecoin2()
// scope
function ecoindz(a = 8, b = 6) {
    console.log(a + b);
}

//ecoindz()
var s = 6
function ecoin2(a, b) {
    return a + b
}

ecoin2(s, 3)


var z = function () {
    return "Welcom to ecoin"
}
//var x = welcom

console.log(z());

(function () {
    console.log("Welcom to T");
})()


var t = [25, 36, 10]
console.log(t);
t.push(45)
console.log(t);


function myReverse(arr = [20, 36, 1, 88, 9]) {
    var rev = []
    for (e of arr) {
        rev.unshift(e)
    }
    console.log(rev);
}
//10
t1 = [11, 25, 5, 44, 99, 77, 100, 25, 200, 36]
function myReverse2(arr = [20, 36, 1, 88, 9]) {
    var rev = []
    for (var i = arr.length - 1; i >= 0; i--) {
        rev.push(arr[i])
    }
    console.log(rev);
}


myReverse2(t1)


var fn = function (x, y, z, t) {
    return x * y * z
}


console.log(fn.length);


