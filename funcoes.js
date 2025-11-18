//Exercicios para entrega A10 - 18/11/2025

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
  return console.log(`O IMC é ${peso} kg e ${altura} metro é ${(peso / (altura * altura)).toFixed(2)}`)
}

//calcularIMC(70,1.70)

//Exe 3

let sumSomatorio = 0;
function somatorio(n){
  for(let e = 0; e <= n; e++){
    sumSomatorio+=n;
    return somatorio (n-1);
  }
console.log(sumSomatorio)
}


//somatorio(7)