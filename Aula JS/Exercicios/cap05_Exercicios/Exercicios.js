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
        resposta = resposta + `${fruta}` + "*"
    }
    resp.innerText = resposta
})
