const frm = document.querySelector("form")
// a) Elaborar um programa leia um numero. Informe se é par ou impar. Faça com o if... else...
// tradicional e, após, tente criar a condição com o operador ternário.

// const resp = document.querySelector("h3")
// frm.addEventListener("submit", (e) => {
//     e.preventDefault()
//     const numero = Number(frm.inNumero.value)
//     // //Forma tradicional
//     // if (numero % 2 == 0 ) {
//     //     resp.innerText = `${numero} é par`
//     // } else {
//     //     resp.innerText = `${numero} é ímpar`
//     // }

//     //Operador ternario
//     const resto = numero % 2 == 0 ? resp.innerText = `${numero} é par` : resp.innerText = `${numero} é ímpar`
// })

/*b) Elaborar um programa que leia a velocidade permitida de uma estrada e a velocidade de um condutor.
    Se a velocidade for inferior ou igual à permitida, exiba sem multa.
    Se a velocidade for de até 20% maior que a permitida, exiba multa leve.
    E se a velocidade for superior a 20% da velocidade permitida, exiba multa grave.*/

// const resp = document.querySelector("h3")
// frm.addEventListener("submit", (e) => {
//     e.preventDefault()
//     const velPerm = Number(frm.inVelocidade.value)
//     const velCondutor = Number(frm.inVelCondutor.value)
//     const porcento = velPerm * 1.20       // 20%
//     velCondutor <= velPerm ? resp.innerText = `Sem Multa.` : velCondutor <= porcento ? resp.innerText = `Multa Leve.` : resp.innerText = `Multa Grave`
// })

// c) Elaborar um programa para simular um parquímetro, o qual leia o valor de moedas depositado 
//     em um terminal de estacionamento rotativo. O programa deve informar o tempo de permanência do veículo 
//     no local e o troco, se existir. Se o valor for inferior ao tempo mínimo, exiba a mensagem valor 
//     insuficiente.
//     Considerar os valores tempo da tabela.
//     Um real é equivalente a 30min, 1.75 a 60min; três reais a 120min.

// const resp1 = document.querySelector("#outResp1")
// const resp2 = document.querySelector("#outResp2")
// frm.addEventListener("submit", (e) => {
//     e.preventDefault()
//     const valor = Number(frm.inValor.value)
//     let tempo
//     let preco
//     let troco
//     if (valor >= 3.00){
//         tempo = 120
//         preco = 3.00
//     } else if (valor >= 1.75) {
//         tempo = 60
//         preco = 1.75
//     } else if (valor >= 1.00) {
//         tempo = 30
//         preco = 1.00
//     }
    
//     troco = valor - preco
    
//     if (valor > 1.00) {
//         resp1.innerText = `Tempo: ${tempo} min`
//         if (troco > 0) {
//             resp2.innerText = `Troco R$: ${troco.toFixed(2)}`
//         } else {
//             resp2.innerText = ""
//         }
//     } else {
//         resp1.innerText = `Valor Insuficiente`
//     }
// })

// d) Elaborar um programa que leia três lados e verifique se eles podem ou não formar um triângulo.
//     Para formar um triângulo, um dos lados não pode ser maior que a soma dos outros dois.
//     Caso possam formar um triângulo, exiba também qual tipo de triângulo.
//     Equilátero, equilátero, três lados iguais.
//     Isósceles, dois lados iguais.
//     Escáleno, três lados iguais.

// const resp1 = document.querySelector("#outResp1")
// const resp2 = document.querySelector("#outResp2")
// frm.addEventListener("submit", (e) => {
//     e.preventDefault()
//     const ladoA = Number(frm.inLadoA.value)
//     const ladoB = Number(frm.inLadoB.value)
//     const ladoC = Number(frm.inLadoC.value)

//     if (ladoA > (ladoB + ladoC) || ladoB > (ladoA + ladoC) || ladoC > (ladoA + ladoB)) {
//         resp1.innerText = `Lados não podem formar um triângulo.`
//         resp2.innerText = ""
//     } else {
//         resp1.innerText = `Lados podem formar um triângulo`
//         if ((ladoA == ladoB) && (ladoB == ladoC)) {
//             resp2.innerText = `Tipo: Equilátero`
//         } else if ((ladoA == ladoB) || (ladoB == ladoC) || (ladoC == ladoA) ){
//             resp2.innerText = "Tipo: Isósceles"
//         } else {
//             resp2.innerText = "Tipo: Escaleno"
//         }
//     }

// })