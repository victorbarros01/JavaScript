// Exercicio 01 - Orientação a Objetos

class Conta {
  constructor(saldo) {
    this._saldo = saldo;
  }

  sacar(valor) {
    if (this._saldo > 0) {
      if (this._saldo - valor >= 0) {
        this._saldo -= valor;
        console.log(
          `Saque efetuado com sucesso \n\nSeu saldo atual é de ${this._saldo}`
        );
      } else {
        console.log("Saldo insuficiente");
      }
    }
  }

  depositar(valor) {
    if (valor > 0) {
      this._saldo += valor;
      console.log(
        `Deposito efetuado com sucesso \n\nSeu saldo atual é de ${this._saldo}`
      );
    }
  }
}

let Victor = new Conta(400);

Victor.sacar(200);

Victor.depositar(300);

let Maria = new Conta(250);

Maria.depositar(1000000);

Maria.sacar(900000);

Maria.sacar(200000);

//Exercicio 02 - Carrinho de compras

// class Carrinho {
//   constructor(itens, qntTotal, valorTotal) {
//     this._itens = itens;
//     this._qntTotal = qntTotal;
//     this._valorTotal = valorTotal;
//   }

//   adicionarItens(item) {
//     this._itens.push(item);
//     this._qntTotal++;
//     this._valorTotal += 40;
//     console.log(`O item ${item} foi adicionado ao carrinho`);
//     console.log(this._valorTotal);
//   }

//   removerItens(item) {
//     const index = this._itens.indexOf(item);
//     this._itens.splice(index, 1);
//     this._qntTotal--;
//     this._valorTotal -= 40;
//     console.log(`Seu item ${item} foi removido do carrinho`);
//     console.log(this._valorTotal);
//   }
// }

// const itensPedro = ["relogio", "sapato", "camiseta", "camisa", "shorts"];

// let Pedro = new Carrinho(itensPedro, itensPedro.length, 200);

// Pedro.removerItens("sapato");

// Pedro.adicionarItens("tenis");

// Pedro.adicionarItens("blusa");

//Exercicio 02

class Carrinho {
  constructor(itens, totalItens = 0, valorTotal = 0) {
    this._itens = itens;
    for (let item in this._itens) {
      totalItens += this._itens[item].qnt;
      valorTotal += this._itens[item].preco * this._itens[item].qnt;
    }
    this._totalItens = totalItens;
    this._valorTotal = valorTotal;
  }

  adicionarItem(itens) {
    let contador = 0;
    for (let item in this._itens) {
      if (this._itens[item].id === itens.id) {
        this._itens[item].qnt += itens.qnt;
        contador++;
      }
    }
    if (contador === 0) {
      this._itens.push(itens);
    }

    this._totalItens += itens.qnt;
    this._valorTotal += itens.preco * itens.qnt;
  }

  removerItem(itens) {
    const index = this._itens.findIndex((item) => item.id === itens);

    if (index !== -1) {
      this._totalItens -= this._itens[index].qnt;
      this._valorTotal -= this._itens[index].preco * this._itens[index].qnt;
      this._itens.splice(index, 1);
    } else {
      console.log("Valor indisponivel");
    }
  }
}

let carrinho = new Carrinho([
  {
    nome: "Camiseta",
    id: 1,
    qnt: 1,
    preco: 35,
  },
  {
    nome: "Bermuda",
    id: 2,
    qnt: 1,
    preco: 25,
  },
  {
    nome: "Tenis",
    id: 3,
    qnt: 2,
    preco: 45,
  },
]);

console.log(carrinho);

carrinho.adicionarItem({ nome: "Sapato", id: 4, qnt: 3, preco: 50 });

console.log(carrinho);

carrinho.removerItem(2);

console.log(carrinho);

// Exercicio 03

class Endereco {
  constructor(rua, bairro, cidade, estado) {
    this._rua = rua;
    this._bairro = bairro;
    this._cidade = cidade;
    this._estado = estado;
  }

  novaRua(rua) {
    if (rua !== this._rua) {
      this._rua = rua;
    }
  }

  novoBairro(bairro) {
    if (bairro !== this._bairro) {
      this._rua = bairro;
    }
  }

  novaCidade(cidade) {
    if (cidade !== this._cidade) {
      this._cidade = cidade;
    }
  }

  novoEstado(estado) {
    if (estado !== this._estado) {
      this._estado = estado;
    }
  }
}

let cliente = new Endereco(
  "Av, Denise cristina rocha",
  "Guadalajara",
  "Ribeirão das Neves",
  "Minas Gerais"
);

console.log(cliente);

cliente.novaRua("Rua, João Paulo");

console.log(cliente);

// Exercicio 04

class Carro {
  constructor(marca, cor, galosinaRest) {
    this._marca = marca;
    this._cor = cor;
    this._gasolinaRest = galosinaRest;
  }

  dirigir(km) {
    for (let i = 0; i < km; i += 10) {
      this._gasolinaRest--;

      if (this._gasolinaRest < 20) {
        console.log("Você entrou na reserva");
      }

      if (this._gasolinaRest < 5) {
        console.log("Seu tanque está vazio");
        break;
      }
    }
  }

  abastecer(litros) {
    let limite = this._gasolinaRest + litros;
    if (this._galosinaRest >= 100) {
      console.log("Seu tanque está cheio");
    } else {
      if (litros > 100 || limite > 100) {
        this._gasolinaRest = 100;
      } else {
        this._gasolinaRest += litros;
      }
    }
  }
}

let carro = new Carro("Ford", "Azul", 80);

carro.dirigir(100);

console.log(carro);

carro.abastecer(40);

console.log(carro);

carro.abastecer(70);

console.log(carro);

// Exercicio 05

class ContaBancaria {
  constructor(saldoCorrente, saldoPoupanca = 0, jurosPoupanca = 0.03) {
    this._saldoCorrente = saldoCorrente;
    this._saldoPoupanca = saldoPoupanca;
    this._jurosPoupanca = jurosPoupanca;
  }

  saque(qnt) {
    if (this._saldoCorrente > 0) {
      this._saldoCorrente -= qnt;
    } else {
      console.log("Saldo insuficiente");
    }
  }

  depositar(qnt) {
    if (qnt > 0) {
      this._saldoCorrente += qnt;
    }
  }

  contaPoupanca() {
    if (this._saldoPoupanca > 0) {
      return (this._saldoPoupanca += 10 - this._jurosPoupanca);
    } else {
      return;
    }
  }

  transfPoupanca(qnt) {
    if (this._saldoCorrente > 10) {
      this._jurosPoupanca += qnt;
      this._saldoCorrente -= qnt;
    } else {
      console.log(
        "Só é possivel transferir para a poupança à partir de R$10.00"
      );
    }
  }

  transfCorrente(qnt) {
    if (this._jurosPoupanca > 0) {
      this._jurosPoupanca -= qnt;
      this._saldoCorrente += qnt;
    } else {
      console.log(
        "Só é possivel transferir para a corrente após a transferência para a poupança"
      );
    }
  }
}

let conta = new ContaBancaria(1000, 0);

class ContaEspecial extends ContaBancaria {
  constructor(saldoCorrente, saldoPoupanca) {
    super(saldoCorrente, saldoPoupanca);
    this._jurosPoupanca += this._jurosPoupanca * 2;
  }
}

let contaEspecial = new ContaEspecial(2000, 2);

let data = new Date();

const span = document.createElement("span");
document.body.appendChild(span);
let time = data.toLocaleTimeString();
setInterval(tempo, 1000);
function tempo() {
  let data = new Date();

  span.innerHTML = data.toLocaleTimeString();
}
