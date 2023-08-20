class Pessoa {
  constructor(nome, sobrenome, idade) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }
}

class Trabalho extends Pessoa {
  constructor(nome, sobrenome, idade, empresa) {
    super(nome, sobrenome, idade);
    this.empresa = empresa;
    this.salario = 1200;
  }
}

class Funcionario extends Trabalho {
  constructor(nome, sobrenome, idade, empresa, cargo, tempo) {
    super(nome, sobrenome, idade, empresa);
    this.cargo = cargo;
    this.salario = 1200;
    this.tempo = tempo;
  }

  aumento() {
    if (this.tempo >= 2) {
      this.salario *= 1.5;
    } else {
      this.salario *= 1.2;
    }
  }
}


const pessoa1 = new Pessoa("João", "Silva", 30);
const trabalho1 = new Trabalho("Maria", "Souza", 28, "ABC Inc.");
const funcionario1 = new Funcionario(
  "Pedro",
  "Gomes",
  35,
  "XYZ Corp.",
  "Desenvolvedor",
  3
);
funcionario1.aumento();

console.log(funcionario1);
