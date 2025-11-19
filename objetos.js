//Aula 12: Exercício de Entrega – Objetos 19/11/2025

//Exe 1

const contador = {
  valor : 0,
  incremento : 2,
  contar(vezes){
    for(let e = 0; e < vezes; e++){
      this.valor +=this.incremento;
    }
    return console.log(`Valor final : ${this.valor}`);
  }
};

contador.contar(2);

//Exe 2

const termometro = {
  temperatura : 16,
  alterar(valor){
    if(valor >= 0.5){
      this.temperatura += 1;
    }else{
      this.temperatura -= 1;
    }
  },
  simular(vezes){
    for(let i = 0; i < vezes; i++){
      this.alterar(Math.random());
    }
    return console.log(`Temperatura final : ${this.temperatura}`);
  }
}

termometro.simular(4);

// Exe 3

const investimento = {
  capitalInicial : 1000,
  taxaJuros : 0.02,
  simular(anos){
    let capital = this.capitalInicial;
    for(let i = 0; i < anos; i++){
      capital *= (1 + this.taxaJuros)
    }
    return console.log(`Capital inicial : ${this.capitalInicial} €\nCapital final : ${capital.toFixed(2)} €\nAnos : ${anos}`);
  }
}

investimento.simular(4);