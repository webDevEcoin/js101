var vmtb = document.getElementById("mtb")
var vmtc = document.getElementById("mtc")
var vhideall = document.getElementById("hideall")


vmtb.onclick = function () {
    let va = document.getElementsByClassName("a")[0]
    va.classList.add("moveToB")
}

vhideall.onclick = function () {
    let va = document.getElementsByClassName("c")[0]
    va.style.transition = "3s"
    va.style.height = "0"
}