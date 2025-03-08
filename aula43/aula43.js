// Some todos os números (reduce)
// Retorne um array com os pares (Filter)
// Retorne um array com o dobro dos valores (Map)
//               0  1   2   3  4 ....
const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const total = numbers.reduce((acc, value) => {
    acc += value
    return acc
}, 0)
console.log(total)

const pares = numbers.filter(value => value % 2 === 0)
console.log(pares)

const dobro = numbers.map(value => value * 2)
console.log(dobro)


// Retorne a pessoa mais velha
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 105 },
    { nome: 'Letícia', idade: 10 },
    { nome: 'Rosana', idade: 64 },
    { nome: 'Wallace', idade: 1000 }
]
const maisVelha = pessoas.reduce((acc, value) => {
    if(acc.idade > value.idade) return acc
    return value
})
console.log(maisVelha)