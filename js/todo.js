let btn = document.querySelector("button")
let lang = document.querySelector("#lang")
let vul = document.querySelector("ul")
var data = []
loadList()
btn.addEventListener("click", function () {
    data.push(lang.value)
    localStorage.setItem("ecoin", data)
    loadList()
    lang.value = ""
})
function loadList() {
    vul.innerHTML = ""
    var list = (localStorage.key('ecoin')) ? localStorage.getItem("ecoin").split(",") : []
    console.log(list);
    list.forEach(function (e) {
        let vli = document.createElement("li")
        vli.innerText = e
        vul.appendChild(vli)
    })
}

//window.open('cart.html')
//location.href = "dfgdsf.html"