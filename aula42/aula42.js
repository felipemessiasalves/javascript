// Dobre os números
//               0  1   2   3  4 ..... 
const numbers = [5, 50, 80, 1, 2, 3, 4, 8, 7, 11, 15, 22, 27]
const numbersEmDobro = numbers.map(valor => valor * 2)
// console.log(numbersEmDobro)

// Para cada elemento
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave 'nome' do objeto
// Adicione uma chave id em cada objeto
const pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Leticia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 },
]
const nomes = pessoas.map(obj => obj.nome)
const idades = pessoas.map(obj => ({ idade: obj.idade }))

const chaveId = pessoas.map((obj, index) => {
  const newObj = { ...obj }
  newObj.id = index 
  return newObj 
})

// console.log(pessoas)
console.log(chaveId) 