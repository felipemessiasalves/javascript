class ValidaFormulary {
  constructor() {
    this.formulary = document.querySelector(".formulary");
    this.eventos();
  }

  eventos() {
    this.formulary.addEventListener("submit", (e) => {
      this.handleSubmit(e);
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const camposValid = this.isValid();
    const senhasValid = this.senhasAreValid();

    if (camposValid && senhasValid) {
      alert("Formulário enviado");
      this.formulary.submit();
    }
  }

  senhasAreValid() {
    let valid = true;

    const senha = this.formulary.querySelector(".senha");
    const repetirSenha = this.formulary.querySelector(".rsenha");

    if (senha.value !== repetirSenha.value) {
      valid = false;
      this.criaErro(senha, "Campos senha e repetir senha precisam ser iguais.");
      this.criaErro(
        repetirSenha,
        "Campos senha e repetir senha precisam ser iguais."
      );
    }

    if (senha.value.length < 6 || senha.value.length > 12) {
      valid = false;
      this.criaErro(senha, "Senha precisa estar entre 6 e 12 caracteres.");
    }

    return valid;
  }

  isValid() {
    let valid = true;

    for (let errorText of this.formulary.querySelectorAll(".error-text")) {
      errorText.remove();
    }

    for (let campo of this.formulary.querySelectorAll(".validar")) {
      const label = campo.previousElementSibling.innerText;
      if (!campo.value) {
        this.criaErro(campo, `Campo "${label}" não pode estar em branco.`);
        valid = false;
      }

      if (campo.classList.contains("cpf")) {
        if (!this.validaCPF(campo)) valid = false;
      }

      if (campo.classList.contains("user")) {
        if (!this.validaUser(campo)) valid = false;
      }
    }

    return valid;
  }

  validaUser(campo) {
    const user = campo.value;
    let valid = true;

    if (user.length < 3 || user.length > 12) {
      this.criaErro(campo, "Usuário precisa ter entre 3 e 12 caracteres.");
      valid = false;
    }

    if (!user.match(/^[a-zA-Z0-9]+$/g)) {
      this.criaErro(
        campo,
        "Nome de usuário precisa conter apenas letras e/ou números."
      );
      valid = false;
    }

    return valid;
  }

  validaCPF(campo) {
    const cpf = new ValidaCPF(campo.value);

    if (!cpf.valida()) {
      this.criaErro(campo, "CPF inválido.");
      return false;
    }

    return true;
  }

  criaErro(campo, msg) {
    const div = document.createElement("div");
    div.innerHTML = msg;
    div.classList.add("error-text");
    campo.insertAdjacentElement("afterend", div);
  }
}

const valida = new ValidaFormulary();
