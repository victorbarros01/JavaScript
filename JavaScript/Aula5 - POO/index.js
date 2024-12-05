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
