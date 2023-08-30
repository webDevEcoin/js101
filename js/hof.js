// Higher Order Functions

// 1. fn takes one or more arguments 

function ecoin1() {
    return "Welcom To ecoin from Ecoin1 fn"
}


function hof(ecoinCallback, name) {
    console.log(ecoinCallback(), name);

}


hof(ecoin1)


//arrow function 
var y = () => {
    console.log("Welcom To arrow fn");
}

map filter reduce  some setTimeout setInterval