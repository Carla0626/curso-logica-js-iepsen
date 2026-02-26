// cria uma referência ao form e ao elemento h3 (onde sera exibido a resposta)
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

// cria um ouvinte de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    const quilo = Number(frm.inQuilo.value)
    const consumo = Number(frm.inConsumo.value)
    
    const valor = (quilo / 1000) * consumo
    resp.innerText = `Valor a pagar R$: ${valor.toFixed(2)}`

    e.preventDefault()
})
