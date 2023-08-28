//First  Calss  functions
//can be pass an argument
//scope
/**
 * 
 * @returns string
 */

function ecoin() {
    return this.name
}

function mainFn(argFn, name) {
    console.log(argFn(), name);
}

mainFn(ecoin, "Hiiiii")

//can  be return by another fn
function ecoin2() {
    return ecoin
}

var s = ecoin()
console.log(typeof s);
var t = ecoin2()
console.log(typeof t);
//
var obj = {
    name: "Ahmed",
    age: 25,
    isAdmin: function () {
        if (this.age > 25) return true
        else return false
    },
    sayHii: ecoin
}

console.log(obj.sayHii());

var obj2 = {
    ...obj
}
console.log(obj2.name);

/* 
function ec(...x) {
    console.log(x);
}


ec(5, 36, 99, "sfsf")
 */

var arr = []

arr.push(function () {
    console.log("hiiii");
})

arr[0]()

mydata = [100, 200, 800, 300, 555, 201]

/* mydata.forEach(function (e) {
    console.log(e * 10);
}); */

//console.log(v);


//   [100, 200, 800, 300, 555, 201] =>[100*2, 200*2, 800*2, 300, 555, 201] 

//mydata.ecoin(fsdfsdf)//


function ecoin3(arr, fn) {
    var res = []
    for (var i = 0; i < arr.length; i++) {
        res.push(fn(arr[i], c = i, t = arr))
    }
    return res
}
/* var t1 = [100, 200, 800, 300, 555, 201]

t2 = [100, 200, 800, 300, 555, 201].reverse()*/
var ec = [100, 200, 800, 300, 555, 201]
var s = ecoin3(ec, function (n) {
    return n * 2
})


console.log(s);
