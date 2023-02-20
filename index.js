const cuurneFIrsEL = document.getElementById("currancyFirst")
const worthFirsEL = document.getElementById("WorthFirst")

const cuurneSecEL = document.getElementById("currancySec")
const worthSecEL = document.getElementById("WorthSec")
const exchaEl = document.getElementById("exchaRa")


function updateRate(){
fetch(`https://v6.exchangerate-api.com/v6/LqtPgGCxUaMb08WSyq65t1NUtcgXHaQd/latest/${cuurneFIrsEL.valur}`).then((res)=>res.json()).then((data)=>console.log(data))
}
cuurneFIrsEL.addEventListener("change",updateRate)
cuurneSecEL.addEventListener("change",updateRate)
worthFirsEL.addEventListener("input",updateRate)


