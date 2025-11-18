//Exercicios para entrega 18/11/2025

//Exe 1

function verificarParOuImpar(n){
  if(n % 2 === 0){
    return console.log("Par");
  }else {
    return console.log("Impar");
  }
}

//verificarParOuImpar(20);

//Exe 2

function calcularIMC(peso, altura){
  return console.log(`O IMC é ${peso} kg e ${altura} metro é ${peso / (altura * altura)}`)
}
