const frm = document.querySelector("form")
const resp = document.querySelector("pre")

const criancas = []

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const nome = frm.inNome.value
    const idade = Number(frm.inIdade.value)
    criancas.push({ nome, idade })
    frm.reset()
    frm.inNome.focus()
    frm.btListar.dispatchEvent(new Event("click"))  // dispara click em btListar
})

frm.btListar.addEventListener("click", () => {
    if (criancas.length ==  0) {
        alert("Não ha crianças na Lista")
        return
    }
    let lista = ""
    for (const crianca of criancas) {
        const { nome, idade } = crianca  //desestrutura do objeto
        lista += nome + " - " + idade + " anos\n"
    }
    resp.innerText = lista
})

frm.btResumir.addEventListener("click", () => {
    if (criancas.length == 0) {
        alert("Não há crianças na lista")
        return
    }
    const copia = [...criancas] // cria copia do vetor criancas
    copia.sort((a,b) => a.idade - b.idade) // ordena pela idade
    let resumo = ""
    let aux = copia[0].idade  //menor idade do vetor ordenado
    let nomes = [] //para inserir nomes de cada idade
    for (const crianca of copia) {
        const { nome, idade } = crianca
        if (idade == aux) {   // se é da mesma idade auxiliar
            nomes.push(nome) // adciona ao vetor nomes
        }
        else {
            resumo += aux + " ano(s): " + nomes.length + " criança(s) - "
            resumo += ((nomes.length / copia.length) * 100).toFixed(2) + "%\n"
            resumo += "(" + nomes.join(", ") + ")\n\n"
            aux = idade
            nomes = []
            nomes.push(nome) // adiciona o primeiro da nova idade
        }
    }
    //adiciona a útima criança
    resumo += aux + " ano(s): " + nomes.length + " criança(s) - "
    resumo += ((nomes.length / copia.length) * 100).toFixed(2) + "%\n"
    resumo += "(" + nomes.join(", ") + ")\n\n"
    resp.innerText = resumo
})
