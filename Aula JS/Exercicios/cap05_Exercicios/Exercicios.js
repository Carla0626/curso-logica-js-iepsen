const frm = document.querySelector("form")
/*A) Elaborar um programa que leia o nome de uma fruta e um número.
O programa deve repetir a exibição do nome da fruta de acordo com o número informado.
Utilize o asterisco para separar os nomes.*/
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const fruta = frm.inFruta.value
    const num = Number(frm.inNumero.value)

    let resposta = ""
    for (let i = 1; i <= num; i++){
        if ( i != num) {
            resposta = resposta + `${fruta}` + "*"
        } else {
            resposta = resposta + `${fruta}` 
        }
    }
    resp.innerText = resposta
})
/*B) Digamos que o número de chinchilas de uma fazenda triplica a cada ano, após o primeiro ano.
Elaborar um programa que leia o número inicial de chinchilas e anos e informe ano a ano o número médio previsto 
de chinchilas da fazenda. O número inicial de chinchilas deve ser maior ou igual a dois, um casal.*/
// const resp = document.querySelector("pre")

// frm.addEventListener("submit", (e) => {
//     e.preventDefault()

//     const chinchilas = Number(frm.inChinchilas.value)
//     const anos = Number(frm.inAnos.value)

//     let resposta = ""
//     let previsao = chinchilas
//     for (let i = 1; i <= anos; i++) {
//         if (i == 1) {
//             resposta = resposta + `${i}° Ano: ` + `${chinchilas}` + " Chinchilas" + "\n"
//         } else {
//             previsao *= 3
//             resposta = resposta + `${i}° Ano: ` + `${previsao}` + " Chinchilas" + "\n"
//         }
//     }
//     resp.innerText = resposta
// }) 
// C) Elaborar um programa que leia um número, verifique se ele é ou não perfeito.
// O número dito perfeito é aquele que é igual à soma dos seus divisores inteiros, exceto o próprio número.
// O programa deve exibir os divisores do número e a soma dele.

// const resp1 = document.querySelector("#outResp1")
// const resp2 = document.querySelector("#outResp2")

// frm.addEventListener("submit", (e) => {
//     e.preventDefault()
//     const num = Number(frm.inNumero.value)

//     let contador = 0
//     let soma = 0
//     let resposta = ""
//     for (let i = 1; i < num; i++){
//         if ((num % i == 0)){
//             soma += i
//             resposta = resposta + `${i} ` 
//         }
//         if (soma == num){
//             resp2.innerText = `${num} é um Número Perfeito`
//         } else {
//             resp2.innerText = `${num} não é um Número Perfeito`
//         }
//     }

//     resp1.innerText = `Divisores de ${num}: ${resposta} (Soma: ${soma})`
// })
