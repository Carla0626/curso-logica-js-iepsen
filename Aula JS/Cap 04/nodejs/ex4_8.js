/* Uma farmacia necessita de um programa que leia o total de uma compra. Exiba como resposta o numero
maximo de vezes que o cliente pode parcelar essa compra e o valor de cada parcela. Considere as seguintes
informaçõe: a) cada parcela deve ser de, no minimo, 200R$; b) o numero maximo de parcelas permitido é 6 */

const prompt = require("prompt-sync") ()
const valor = Number(prompt("Valor da Compra R$: "))
const aux = Math.floor(valor / 20)
const parcelas = aux == 0 ? 1 : aux > 6 ? 6 : aux //operador ternário
const valorParcelas = valor / parcelas 
console.log(`Pode pagar em ${parcelas} de R$${valorParcelas.toFixed(2)}`)