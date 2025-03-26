const express = require("express");
const app = express();

//         Criar   ler   atualizar  apagar
// CRUD -> CREATE, READ, UPDATE,    DELETE
//         POST    GET   PUT        DELETE

// http://meusite.com/ <- GET -> Entregue a página
// http://meusite.com/sobre <- GET -> Entregue a página /sobre
// http://meusite.com/contato <- GET -> Entregue a página /contato

app.get("/", (request, response) => {
  return response.send(`
    <form action="/" method="POST">
      Nome: <input type="text" name="nome">
      <button type="submit">Enviar</button>
    </form>
    `);
});

app.post("/", (request, response) => {
  return response.send("Recebi o formulário");
});

app.get("/contato", (request, response) => {
  return response.send("Obrigado por entrar em contato com a gente.");
});

app.listen(3000, () => {
  console.log("Acessar http://localhost:3000");
  console.log("Servidor executando na porta 3000");
});
