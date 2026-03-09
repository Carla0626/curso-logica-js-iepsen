const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

let resposta = "" // string com a resposta a ser exibida
let numContas = 0  // inicializar o contador
let valTotal = 0  // e acumulador 

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    
    const descricao = frm.inDescricao.value
    const valor = Number(frm.inValor.value)

    numContas++ // adiciona valores ao contador e acumulador
    valTotal += valor
    resposta = resposta + descricao + " - R$: " + valor.toFixed(2) + "\n"
    resp1.innerText = `${resposta}`
    resp2.innerText = `${numContas} Conta(s) - Total R$: ${valTotal.toFixed(2)}`

    frm.inDescricao.value = "" //limpa campos do form
    frm.inValor.value = ""
    frm.inDescricao.focus()  //posiciona no campo inDescricao do form
})