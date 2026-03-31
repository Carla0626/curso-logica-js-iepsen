const frm = document.querySelector("form")
const resp = document.querySelector("pre")

// a) Elaborar um programa para gravar uma tabela com os jogos de uma fase eliminatória de um campeonato. 
//O programa deve conter três funções (a serem executadas no evento click de cada botão) para: 
//1) validar o preenchimento, adicionar um clube ao vetor e listar os clubes; 2) listar os clubes (se houver); 
//3) montar a tabela de jogos, no formato primeiro x último, segundo x penúltimo e assim por diante. 
//Exibir mensagem e não listar a tabela de jogos, caso o número de clubes informados seja ímpar.

const clubes = []

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    nomeClube = frm.inClube.value
    clubes.push({ nomeClube })

    frm.inClube.value = ""
    frm.inClube.focus()

    frm.btListar.dispatchEvent(new Event("click"))
})

frm.btListar.addEventListener("click", () => {
    if (clubes.length == 0) {
        alert("Não há clubes na lista")
        return
    }
    let lista = ""
    for (const clube of clubes) {
        const { nomeClube } = clube
        lista += nomeClube + "\n"
    }

    resp.innerText = lista
})

frm.btMontar.addEventListener("click", () => {
    if (clubes.length == 0) {
        alert("Não há clubes na lista")
        return
    }

    const copia = [...clubes]
    const numClubes = clubes.length
    const numPares = numClubes / 2
    if (numClubes % 2 == 1) {
        alert("Numero de Clubes insuficiente para a tabela de jogos.")
        return
    }
    let resposta = ""

    copia.reverse()
    for (let i = 0; i < numPares; i++) {

        resposta += `${clubes[i].nomeClube}` + " X " + `${copia[i].nomeClube}\n` 
    }

    resp.innerText = resposta
}) 
// b) Elaborar um programa que adicione números a um vetor. O programa deve impedir a inclusão de números 
// repetidos. Exibir a lista de números a cada inclusão. Ao clicar no botão Verificar Ordem, o programa deve 
// analisar o conteúdo do vetor e informar se os números estão ou não em ordem crescente.

// const resp1 = document.querySelector("h3")
// const numeros = []
// let lista = ""
// frm.addEventListener("submit", (e) => {
//     e.preventDefault()

//     const num = Number(frm.inNumero.value)

//     if (numeros.includes(num)) {
//         alert("Você já inseriu este numero, tente outro.")
//         return
//     } else {
//     numeros.push(num)
//     }


//     resp1.innerText = `Números: ${numeros.join(", ")}`
//     frm.inNumero.value = ""
//     frm.inNumero.focus()
// })

// frm.btOrdem.addEventListener("click", () => {
//     if (numeros.length == 0) {
//         alert("Não há números na lista")
//         return
//     }
//     let copia = [...numeros]
//     copia.sort((a, b) => a - b)
//     let crescente = 0
//     const vetor = numeros.length
//     for (let i = 0; i < vetor; i++)
//         if (numeros[i] == copia[i])
//             crescente += 1

//     if (crescente == (vetor)){
//         resp.innerText = "Números em ordem crescente"
//     } else {
//         resp.innerText = "Atenção... Números não estão em ordem crescente"
//     }
// }
// )
