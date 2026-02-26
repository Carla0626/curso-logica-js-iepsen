// A) Uma farmacia está com uma promoção - Na compra de duas unidades de um mesmo medicamento, o
//     cliente recebe como desconto os centavos do valor total. Elabore um programa que leia a descrição
//     e o preço de um medicamento. Informe o valor do produto na promoção.

/*const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

frm.addEventListener("submit", (e) => {
    const medicamento = frm.inMedicamento.value
    const preco = Number(frm.inPreco.value)

    const total = preco * 2
    const promo = Math.floor(total)

    resp1.innerHTML = `Promoção de ${medicamento}`
    resp2.innerHTML = `Leve 2 por apenas R$: ${promo.toFixed(2)}`

    e.preventDefault()
})*/


// B) Elaborar um programa para uma lan House de um aeroporto - O programa deve ler o valor de cada
//     15 minutos de uso de um computador e o tempo de uso por um cliente em minutos. Informe o valor a 
//     ser pago pelo cliente, sabendo que as frações extras de 15 minutos devem ser cobradas de forma
//     integral.

/*const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    const valor = Number(frm.inValor.value)
    const tempo = Number(frm.inTempo.value)

    const fracao = Math.ceil(tempo / 15) 
    const preco = fracao * valor

    resp.innerText = `Valor a pagar R$: ${preco.toFixed(2)}`

    e.preventDefault()
}) */

// C) Um supermercado está com uma promoção - Para aumentar suas vendas no  setor de higiene, cada
//     entiqueta de produto deve exibir uma mensagem anunciando 50% de desconto (para um item) na compra de 
//     3 unidades do produto. Após, apresente as mensagens indicando a promoção.

// const frm = document.querySelector("form")
// const resp1 = document.querySelector("#outResp1")
// const resp2 = document.querySelector("#outResp2")

// frm.addEventListener("submit", (e) => {
//     const produto = frm.inProduto.value
//     const preco = Number(frm.inPreco.value)

//     const promo = preco / 2
//     const valor = (preco * 2) + promo

//     resp1.innerHTML = `${produto} - Promoção: Leve 3 por R$: ${valor}`
//     resp2.innerHTML = `O 3° produto custa apenas R$: ${promo.toFixed(2)}`

//     e.preventDefault()
// })
