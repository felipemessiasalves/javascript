import Aluno from "../models/Aluno.js";

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: "Felipe",
      sobrenome: "Alves",
      email: "g5a0U@example.com",
      idade: 20,
      peso: 68,
      altura: 1.75,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
