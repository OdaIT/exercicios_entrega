let invInicial= 1000;
const TAXA_JURO = 0.05;
let numAnos = 5;
let saldoAtual = invInicial;

for (let i = 0; i <= numAnos-1; i++){
  saldoAtual *=(1+TAXA_JURO)
  console.log(`Fim do Ano ${i} : Saldo = ${saldoAtual.toFixed(2)} €`) // primeiro ano chamado de 0, porque teoricamente é mais correto, para ser ano 1 seria só fazer i+1.
}

for (let a = 100; a >= 0; a-=10){ //para no 0 inclusive, para parar no 10 seria só remover o = da condição.
  console.log(a);
}