const produto = { nome: "Produto", price: 1.8, material: "porcelana" };

for (let valor of Object.entries(produto)) {
  console.log(valor[0], valor[1]);
}
