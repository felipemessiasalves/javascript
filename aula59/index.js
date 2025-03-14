class DispositivoElectronic {
  constructor(nome) {
    this.nome = nome;
    this.ligado = false;
  }

  ligar() {
    if (this.ligado) {
      console.log(this.nome + " já ligado");
      return;
    }

    this.ligado = true;
  }

  desligar() {
    if (!this.ligado) {
      console.log(this.nome + " já desligado");
      return;
    }

    this.ligado = false;
  }
}

class Smartphone extends DispositivoElectronic {
  constructor(nome, cor, modelo) {
    super(nome);

    this.cor = cor;
    this.modelo = modelo;
  }
}

class Tablet extends DispositivoElectronic {
  constructor(nome, temWiFi) {
    super(nome);
    this.temWiFi = temWiFi;
  }

  ligar() {
    console.log("Olha, você alterou o método ligar.");
  }

  falaOi() {
    console.log("Oi");
  }
}

const s1 = new Smartphone("iPhone", "Preto", "iPhone 12 Pro");
console.log(s1);

const t1 = new Tablet("iPad", true);
t1.ligar();
t1.ligar();
t1.falaOi();
