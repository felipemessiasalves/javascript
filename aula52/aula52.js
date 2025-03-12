// Produto -> aumento, desconto
// Camiseta = Cor, caneca = material
function Produto(nome, price) {
  this.nome = nome;
  this.price = price;
}
Produto.prototype.aumento = function (quantia) {
  this.price += quantia;
};
Produto.prototype.desconto = function (quantia) {
  this.price -= quantia;
};

function Camiseta(nome, price, cor) {
  Produto.call(this, nome, price);
  this.cor = cor;
}
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

Camiseta.prototype.aumento = function (percentual) {
  this.price = this.price + this.price * (percentual / 100);
};

function Caneca(nome, price, material, estoque) {
  Produto.call(this, nome, price);
  this.material = material;

  Object.defineProperty(this, "estoque", {
    enumerable: true,
    configurable: false,
    get: function () {
      return estoque;
    },
    set: function (valor) {
      if (typeof valor !== "number") return;
      estoque = valor;
    },
  });
}
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const produto = new Produto("Gen", 111);
const camiseta = new Camiseta("Regata", 7.5, "Preta");
const caneca = new Caneca("Caneca", 13, "Plástico", 5);
caneca.estoque = 100;

console.log(caneca.estoque);
console.log(caneca);
console.log(camiseta);
console.log(produto);
