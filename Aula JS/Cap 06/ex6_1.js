const frm = document.querySelector("form")
const respNome = document.querySelector("span")
const respLista = document.querySelector("pre")

const pacientes = []

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const nome = frm.inPaciente.value
    pacientes.push(nome)  // Adiciona o nome no final do vetor
    let lista = ""   // String para concatenar os pacientes

    // for "tradicional" (inicia em 0, enquanto for menor que tamanho do array)
    for (let i = 0; i < pacientes.length; i++) {
        lista += `${i + 1}. ${pacientes[i]}\n`
    }

    respLista.innerText = lista
    frm.inPaciente.value = ""
    frm.inPaciente.focus()
})

//Adiciona um ouvinte para o evento do click no btUrgencia
frm.btUrgencia.addEventListener("click", () => {
    //verifica se as validações do frm estão okay (pacinete required)
    if (!frm.checkValidity()) {
        alert("Informe o nome do paciente a ser atendido em caráter de urgência")
        frm.inPaciente.focus()
        return
    }
    const nome = frm.inPaciente.value
    pacientes.unshift(nome)  //adiciona paciente no inicio do vetor
    let lista = ""
    //forEach aplicado sobre o array pacientes
    pacientes.forEach((paciente, i) => (lista += `${i+1}. ${paciente}\n`))
    respLista.innerText = lista
    frm.inPaciente.value = ""
    frm.inPaciente.focus
})

frm.btAtender.addEventListener("click", () => {
    // se o tamanho do vetor for == 0
    if (pacientes.length == 0) {
        alert("Não há pacientes na linha de espera")
        frm.inPaciente.focus
        return
    }
    const atender = pacientes.shift() // remove do ínicio da fila (e obtem nome)
    respNome.innerText = atender
    let lista = ""
    pacientes.forEach((paciente, i) => (lista += `${i+1}. ${paciente}\n`))
    respLista.innerText = lista
})
