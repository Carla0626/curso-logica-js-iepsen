/* Elaborar um programa que leia um número - que deve ser uma centena. Calcule e exiba a centena invertida.
Caso o numero não seja uma centena, exiba mensagem. */

const prompt = require("prompt-sync") ()
const numero = Number(prompt("Numero (centena): "))
if (numero < 100 || numero >= 1000){
    console.log("Erro... deve ser uma centena.")
    return
}

const num1 = Math.floor(numero / 100) // obtem o primeiro numero
const sobra = numero % 100      // o que sobra (Dezena)
const num2 = Math.floor(sobra / 10)  //Obtem segundo numero
const num3 = sobra % 10      // obtem terceiro numero
console.log(`Ivertido: ${num3}${num2}${num1}`)