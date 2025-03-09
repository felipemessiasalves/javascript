// defineProperty -> Getter e Setters
function Produto(nome, price, estoque) {
  this.nome = nome;
  this.price = price;

  Object.defineProperty(this, "estoque", {
    enumerable: true, // mostra a chave
    configurable: true, // configurável
    get: function () {
      return estoque;
    },
    set: function (value) {
      if (typeof value !== "number") {
        throw new TypeError("Value must be a number");
      }
      estoque = value;
    },
  });
}

function criaProduto(nome) {
  return {
    get nome() {
      return nome;
    },
    set nome(value) {
      value = value.replace("coisa", "");
      nome = value;
    },
  };
}

// const p1 = new Produto("Camiseta", 20, 3);
// console.log(p1);
// p1.estoque = 500;
// console.log(p1.estoque);
const p2 = criaProduto("Camiseta");
p2.nome = "Qualquer coisa";
console.log(p2.nome);
