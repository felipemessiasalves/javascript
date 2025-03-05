(function (idade, peso, altura) {

  const sobrenome = 'Messias'
  function criaNome(nome) {
    return nome + ' ' + sobrenome
  }

  function falaNome() {
    console.log(criaNome('Felipe'))
  }

  falaNome()
  console.log(idade, peso, altura)

})(20, 70, 1.80)

const nome = 'Qualquer coisa'