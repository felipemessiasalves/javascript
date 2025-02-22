const form = document.querySelector('#iform')

form.addEventListener('submit', function(e) {
    e.preventDefault()
    const inputPeso = e.target.querySelector('#peso')
    const inputAltura = e.target.querySelector('#altura')

    const peso = Number(inputPeso.value)
    const altura = Number(inputAltura.value)

    if (!peso) {
        setRes('Peso inválido', false)
        return
    }

    if (!altura) {
        setRes('Altura inválida', false)
        return
    }
})

function criaP() {
    const p = document.createElement('p')
    return p 
}

function setRes(msg, isValid) {
    const res = document.querySelector('#ires')
    res.innerHTML = ''
    const p = criaP() 
}