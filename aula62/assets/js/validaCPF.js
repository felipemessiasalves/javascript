// 705.484.450-52 070.987.720-03
class ValidaCPF {
  constructor(cpfEnviado) {
    Object.defineProperty(this, "cpfLimpo", {
      writable: false,
      enumerable: false,
      configurable: false,
      value: cpfEnviado.replace(/\D+/g, ""),
    });
  }

  éSequencia() {
    return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
  }

  geraNovoCpf() {
    const cpfSemDigits = this.cpfLimpo.slice(0, -2);
    const digit1 = ValidaCPF.gerarDigit(cpfSemDigits);
    const digit2 = ValidaCPF.gerarDigit(cpfSemDigits + digit1);
    this.novoCPF = cpfSemDigits + digit1 + digit2;
  }

  static gerarDigit(cpfSemDigits) {
    let total = 0;
    let reverso = cpfSemDigits.length + 1;

    for (let stringNumerical of cpfSemDigits) {
      total += reverso * Number(stringNumerical);
      reverso--;
    }

    const digit = 11 - (total % 11);
    return digit <= 9 ? String(digit) : "0";
  }

  valida() {
    if (!this.cpfLimpo) return false;
    if (typeof this.cpfLimpo !== "string") return false;
    if (this.cpfLimpo.length !== 11) return false;
    if (this.éSequencia()) return false;
    this.geraNovoCpf();

    return this.novoCPF === this.cpfLimpo;
  }
}

let validaCpf = new ValidaCPF("070.987.720-03");
// validaCpf = new ValidaCPF("999.999.999-99");

if (validaCpf.valida()) {
  console.log("CPF válido");
} else {
  console.log("CPF inválido");
}
