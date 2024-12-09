var leo1 = window.document.getElementById('leo1')

var leo2 = window.document.getElementById('leo2')

var leo3 = window.document.getElementById('leo3')

var setaesquerda = window.document.getElementById("setaesquerda")

var setadireita = window.document.getElementById('setadireita')

function deslizarparadireita() {
    leo1.style = "display:none"
    leo3.style = "display:flex"
    setadireita.style = "display:none"
    setaesquerda.style = "display:flex"
}
function deslizarparaesquerda() {
    leo1.style = "display:flex"
    leo3.style = "display:none"
    setaesquerda.style = "display:none"
    setadireita.style = "display:flex"
}
