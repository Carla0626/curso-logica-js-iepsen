/* A entrada para um clube de pesca custa R$ 200 por pessoa e cada uma tem direito a levar um peixe.
Peixes extras custam R$12. Elabore um programa que leia o número de pessoas de uma família que foram ao
clube e o numero de peixes obtidos na pescaria. Informe o valor a pagar:*/

const prompt = require("prompt-sync") () // Adiciona pacote prompt-sync
const pessoas = Number(prompt("N° de pesssoas: ")) // le dados de entrada
const peixes = Number(prompt("N° de peixes: "))

let pagar
if (peixes <= pessoas) {
    pagar = pessoas * 20
} else {
    pagar = (pessoas * 20) + ((peixes - pessoas) * 12)
}

console.log(`Pagar R$: ${pagar.toFixed(2)}`)