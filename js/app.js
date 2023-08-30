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

/* var x
x = 45
x = "ecoin"
y = 12.2332

isAdmin = true
var m = "messenger with chess"
console.log(typeof (m));
// azAZ_$09

// var _ecoin = 45

const NOM = "ECOIN" */

//
/*  
type simple  Number  45  2.6  100.6666  -25 -69
             String "A" "Ecoin"  'Hiii' "54545"
             Boolean  true  false
           
type complex
  Array  (object) 
*/

/* t = [25, 41, 8, 9, "ecoin", true]

t2 = new Array(25, 8, 9)

console.log(typeof t2);

var student = { "nom": "ecoin", "year": 2004, "mobile": ["06666666", "07777777"] }

console.log(student);
 */
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



/* var a = 25, b = 7, c */
/* if (a > 20) c = a * b
else c = a / b */
/* 
c = (a > 20) ? a * b : a / b

console.log(c); */

/* var lang = "es" */
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
/* 
var x = 25 */

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

/* tab = [100, 36, 58, 5, 200, 88, 2, 99, 33, 300]
var max = tab[0]

var i = 0
while (i < tab.length) {
  if (tab[i] >= max) {
    max = tab[i]
  }
  i++
}
console.log(max); */
/* tab1 = []
tab2 = []
var i = 0 ,k = 0 ,m = 0
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
console.log(tab1, tab2); */
/* var n = prompt("please enter your Number")
n = parseInt(n)
var isPrime = true
var i = 2
while (i < n) {
  if (n % i == 0) {
    isPrime = false
    break
  }
  i++
} */

//if (isPrime) console.log("Is Prime")


/* var tab = [15, 3, 66, 99, 11, 13, 17, 8, 9, 15]
var tabP = []  // 3,11,13,17

var m = 0, k = 0
while (m < tab.length) {
  var isPrime = true
  var i = 2
  while (i < tab[m]) {
    if (tab[m] % i == 0) {
      isPrime = false
      break
    }
    i++
  }
  if (isPrime) {
    tabP[k] = tab[m]
    k++
  }
  m++
}
console.log(tabP); */


/* 1 ----- 9 */


/* var i = 1
do {
  console.log(i);
  i++
} while (i < 10) */
/* var j = 0
var t = []
do {
  n = prompt("please enter your number")
  n = parseInt(n)
  t[j] = n
  j++

} while (j < 5)


console.log(t); */
//var i = j = 0
//.log(i, j);
var tab = [15, 3, 66, 99, 11, 13, 17, 8, 9, 15]
/* for (var i = 0; i < tab.length; i++) {
  console.log(tab[i] * 2)
}
 */

/* var i = 0
for (; ;) {
  if (i >= tab.length) break
  console.log(tab[i] * 2)
  i++
} */



/* for (x in tab) {
  console.log(tab[x])
} */


/* student = {
  nom: "Ahmed", age: 25, email: "ahmed@gmail.com"
}



for (x in student) {

  console.log(student[x])
}

 */
/* var cpt = 1

document.write('<table border="2" cellspacing="0" cellpadding="5">')
for (var i = 1; i < 5; i++) {
  document.write('<tr>')
  for (var j = 1; j < 4; j++) {
    document.write('<td>' + cpt + '</td>')
    cpt++
  }
  document.write('</tr>')
}
document.write('</table>')
 */

https://openlibrary.org/works/OL45804W.json



obj['authors']['author']['key']
document.write('<table border="2" cellspacing="0" cellpadding="5">')
for (var i = 1; i <= 3; i++) {
  document.write('<tr>')
  for (var j = 1; j <= i; j++) {
    document.write('<td>' + j + '</td>')
  }
  document.write('</tr>')
}
document.write('</table>')