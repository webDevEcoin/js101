// First Class Functions
// can be passed as an arguments
function ecoin() {
    return "Welcom To ecoin"
}
function mainFunction(argFn, name) {
    console.log(argFn(), name);
}
mainFunction(ecoin, "hiiiii")
//can be return by another function
function ecoin2() {
    return function () {
        console.log("welcom To return Fn");
    }
}
//can be assigned as a value to variable , object or array

const x = function () {
    return "This is a test only"
}

const ec = {
    getName: function (name) { return "my Name is " + name }
}

let arr = []
arr.push(function () {
    console.log(" thi is only fn from Array");
})
