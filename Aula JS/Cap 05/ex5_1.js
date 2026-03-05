const frm = document.querySelector("form")
const resp = document.querySelector("pre")
frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const numero = Number(frm.inNumero.value)
    let resposta = ""
    //cria um laço de repetição (i começa em 1 e é incrementado até o 10)
    for (let i = 1; i <= 10; i++) {
        //a variavel da resposta vai acumulando os novos conteudos (nos dois formatos)
        resposta = resposta + numero + " x " + i + " = " + (numero * i) + "\n"
        // resposta = ${resposta}${numero} x ${i} = ${numero * i}\n
    }
    resp.innerText = `${resposta}`
})