// Factory function (Função fábrica)
// Constructor function (Função construtora)
function criaPessoa(nome, sobrenome, a, p) {
  return {
    nome,
    sobrenome,

    // Getter
    get nomeComleto() {
      return `${this.nome} ${this.sobrenome}`
    },

    // Setter
    set nomeComleto(valor) {
      valor = valor.split(' ')
      this.nome = valor.shift()
      this.sobrenome = valor.join(' ')
    },

    fala(assunto = 'falando sobre NADA.') {
      return `${this.nome} está ${assunto}.`
    },

    altura: a,
    peso: p,

    // Getter
    get imc() {
      const indice = this.peso / (this.altura ** 2)
      return indice.toFixed(2)
    }
  }
}

const p1 = criaPessoa('Felipe', 'Messias', 1.75, 75)
const p2 = criaPessoa('Luiz', 'Messias', 1.90, 57)
const p3 = criaPessoa('João', 'Messias', 1.5, 110)

console.log(p1.imc)
console.log(p2.imc)
console.log(p3.imc)