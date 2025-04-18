import Aluno from "../models/Aluno";

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: "Felipe",
      sobrenome: "Alves",
      email: "felipe@gmail.com",
      idade: "20",
      peso: "68",
      altura: "1,69",
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
