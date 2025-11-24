//Aula 14: Exercício de Entrega – Arrays

//Exercício 1 — Somar todos os valores do array

const numeros = [2, 5, 3, 8]; //----------------------------->array exe 1

function somarArray(arr){
    let soma = 0;
    for(let i = 0; i < arr.length; i++){
        soma += arr[i];
    }
    return soma;
}

console.log( somarArray(numeros) );

//Exercício 2 — Contar Números Pares

const nums = [1, 4, 6, 9, 12]; //----------------------------->array exe 2

function contarPares(arr){
    let pares = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i]%2 == 0){
            pares++;
        }
    }
    return pares;
}

console.log( contarPares(nums) );

//Exercício 3 — Encontrar o Maior Número

const lista = [10, 5, 22, 1, 7]; //----------------------------->array exe 3

function maiorNumero(arr){
    let maior = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] > maior){
            maior = arr[i];
        }
    }
    return maior;
}

console.log( maiorNumero(lista) );

//Exercício 4 — Criar um Novo Array com Elementos MAIORES que 10

const dados = [5, 12, 3, 18, 7, 30]; //----------------------------->array exe 4

function filtrarMaioresQue10(arr){
    const maiorDez = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 10){
            maiorDez.push(arr[i]);
        }
    }
    return maiorDez;
}

console.log( filtrarMaioresQue10(dados) );