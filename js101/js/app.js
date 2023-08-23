/* 
var  
const
type of var
operation
comparation 
condition 
boucle 
function 
*/

var x
x = 45
x = "ecoin"
y = 12.2332

isAdmin = true
var m = "messenger with chess"
console.log(typeof (m));
// azAZ_$09

// var _ecoin = 45

const NOM = "ECOIN"

//
/*  
type simple  Number  45  2.6  100.6666  -25 -69
             String "A" "Ecoin"  'Hiii' "54545"
             Boolean  true  false
           
type complex
  Array  (object) 
*/

t = [25, 41, 8, 9, "ecoin", true]

t2 = new Array(25, 8, 9)

console.log(typeof t2);

var student = { "nom": "ecoin", "year": 2004, "mobile": ["06666666", "07777777"] }

console.log(student);

/*
NULL
Undifiend
Function
Symbole


*/

/* 
if(x == 3){
  y = 100
}else {
  y =  300
}

y  = (x==3)?100:300
 */



var a = 25, b = 7, c
/* if (a > 20) c = a * b
else c = a / b */
/* 
c = (a > 20) ? a * b : a / b

console.log(c); */

var lang = "es"
/* if (lang == "ar") console.log("Arabic")
else if (lang == "fr") console.log("Franch")
else if (lang == "en") console.log("English")
else console.log("No lang"); */

/* switch (lang) {
  case "ar":
    console.log("Arabic")
    break;
  case "fr":
    console.log("Franch")
    break;
  case "en":
    console.log("English")
    break;
  default:
    console.log("No lang");
    break;
}
 */

var x = 25

/* console.log(x);
console.log(++x);
console.log(++x);
console.log(++x);
console.log(++x);
 */

/* while  for  do ...while */



/* var i = 0
var statut = true
while (i <= 20) {
  if (statut) {
    document.write("<h1 class='red'>Ecoin</h1>")
  } else {
    document.write("<h1 class='green'>Ecoin</h1>")
  }
  statut = !statut
  i++
}
 */

/*   1-20 */


/* var i = 1

while (i <= 20) {
  if (i % 2 == 0) {
    document.write("<h1 class='red'>" + i + "</h1>")
  } else {
    document.write("<h1 class='green'>" + i + "</h1>")

  }
  i++
} */

tab = [15, 36, 58, 5, 2, 88, 2, 99, 33, 14]
tab1 = []
tab2 = []
var i = 0
var k = 0
var m = 0
console.log(tab.length);

while (i < tab.length) {
  //console.log(tab[i]);
  if (tab[i] % 2 == 0) {
    tab1[k] = tab[i]
    k++
  } else {
    tab2[m] = tab[i]
    m++
  }
  i++
}


console.log(tab1, tab2);