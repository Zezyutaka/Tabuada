function gerar(){
let numero = document.getElementById('txtn')
let tabuada = document.getElementById('seltab')
if (numero.value.length == 0) {
  window.alert('Por favor, digite um numero!')
} else {
  let n = Number(numero.value)
  let c = 1 
  tabuada.innerHTML=''
  while (c<=10){
    let item = document.createElement('option')
    item.text = `${n} x ${c} = ${n*c}`
    item.value =`tab${c}`
    tabuada.appendChild(item)
    c++
  }
}

  
}