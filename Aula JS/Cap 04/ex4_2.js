const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const nome = frm.inNome.value
    const masculino = frm.inMasculino.checked
    const altura = Number(frm.inAltura.value)

    let peso // declara a variavel do peso
    if (masculino) {
        peso = 22 * Math.pow(altura,2)  // MathPow eleva ao quadrado
    } else {
        peso = 21 * Math.pow(altura,2)
    }

    resp.innerText = `${nome}: Se peso ideal é ${peso.toFixed(3)} kg`
})