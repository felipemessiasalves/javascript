// defineProperty -> Getter e Setters
function Produto(nome, price, estoque) {
  this.nome = nome;
  this.price = price;

  Object.defineProperty(this, "estoque", {
    enumerable: true, // mostra a chave
    value: estoque, // valor
    writable: false, // pode alterar
    configurable: true, // configurável
  });
}

const p1 = new Produto("Camiseta", 20, 3);
console.log(Object.keys(p1));

for (let chave in p1) {
  console.log(chave);
}
