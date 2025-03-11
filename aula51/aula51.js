function Produto(nome, price) {
  this.nome = nome;
  this.price = price;
}

Produto.prototype.desconto = function (percentual) {
  this.price = this.price - this.price * (percentual / 100);
};

Produto.prototype.aumento = function (percentual) {
  this.price = this.price + this.price * (percentual / 100);
};

const p1 = new Produto("Camiseta", 50);

// Literal
const p2 = {
  nome: "Caneca",
  price: 15,
};

Object.setPrototypeOf(p2, Produto.prototype);
p2.aumento(10);

const p3 = Object.create(Produto.prototype, {
  price: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 99,
  },
  size: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 42,
  },
});
p3.aumento(10);
console.log(p3);
