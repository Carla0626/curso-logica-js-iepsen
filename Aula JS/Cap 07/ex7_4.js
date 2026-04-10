const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const nome = frm.inFuncionario.value

    if(!nome.includes(" ")) {  // se o nome não possuir espaços
        alert("Informe o nome completo...")
        return
    }
    
    const priEspaco = nome.indexOf(" ")  // Posição do primeiro espaço
    const ultEspaco = nome.lastIndexOf(" ")  // Posição do último espaço
    // copia nome  sobrenome usando paramentros do substr()
    const cracha = nome.substr(0, priEspaco) + nome.substr(ultEspaco)

    resp.innerText = `Crachá: ${cracha}`
})
