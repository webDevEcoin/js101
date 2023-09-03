//var wilaya = 

const communes = {
    "9": ["boufarik", "Soumaa", "oueld iiech"],
    "16": ["Alger Center", "Kouba", "bir khadem"],
    "31": ["seina", "oran", "bir eldjir"]
}

var w = document.getElementById("w")
var com = document.getElementById("com")

w.onchange = function () {
    var wId = w.value
    var comList = communes[wId]
    console.log(comList);

    // to Do
    com.innerHTML = ""
    for (let i = 0; i < comList.length; i++) {
        var opt = document.createElement('option')
        //  opt.value = 
        opt.textContent = comList[i]
        com.appendChild(opt)

    }


}