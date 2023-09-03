let cart = document.getElementById("cart")
let mycart = document.getElementById("mycart")
mycart.innerText = (localStorage.key(0)) ? localStorage.getItem("cpt") : 0
cart.addEventListener("change", function () {
    let num = this.value
    localStorage.setItem("cpt", num)
    mycart.innerText = num

})


var t = "10,20,30,40"