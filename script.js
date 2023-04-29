var botaoSortear;
var numeroSorteado;

function sortearNumero(n){
  return Math.ceil(Math.random()*n)
}

window.onload = function () {
  botaoSortear = document.getElementById('btnSortear')
  botaoSortear.onclick = function () {
    numeroSorteado = sortearNumero(100)
    document.getElementById("sorteioNumero").insertAdjacentText("afterbegin",numeroSorteado.toString())
  }
}


