//  Search Id


let t = document.getElementById("title")

console.log(t);

//t.innerText = "Ecoin"
//t.innerHTML = "<i>Ecoin</i>"
// Search class
// Search element

console.log(t.innerText);

/* var nodeCh = document.createElement('p')
nodeCh.innerText = "Hiiii"

var bx = document.getElementById("box")
bx.appendChild(nodeCh)


bx.removeChild() */

t.setAttribute("ecoin", "Alger")
//t.setAttribute("id", "Alger")

console.log(t.getAttribute('ecoin'));

t.removeAttribute('ecoin')

/* var bx = document.getElementById("box")

bx.style.backgroundColor = "red"
bx.style.width = "200px"
bx.style.height = "200px"
 */

var bx = document.getElementById("box")


bx.onclick = function () {
    this.style.backgroundColor = "red"
    this.style.width = "200px"
    this.style.height = "200px"
}