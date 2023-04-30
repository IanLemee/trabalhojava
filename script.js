var botaoSortear;
var numeroSorteado;

const handlePhone = (event) => {
  let input = event.target
  input.value = phoneMask(input.value)
}

const phoneMask = (value) => {
  if (!value) return ""
  value = value.replace(/\D/g,'')
  value = value.replace(/(\d{2})(\d)/,"($1) $2")
  value = value.replace(/(\d)(\d{4})$/,"$1-$2")
  return value
}

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


