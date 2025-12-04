//Tarefa: Introdução a Arrays de Objetos

//Exercício 1 — Class com Array de Objetos

function rand(a){ // gera numeros aleatórios para a idade e notas
    let e = Math.floor(Math.random() * a);
    return e;
};

function mostraAlunos(array){ // a função imprime nome, nota e idade porque os valores nota e idade são randoms
    for(let e in array){
        console.log(`Aluno : ${array[e].nome} - Nota : ${array[e].nota} - Idade : ${array[e].idade}`);
    };
};

function contarAprovados(array, n){ // 1º argumento é o array, o segundo é a nota
        const notaMaiorQue = array.filter(e => e.nota >= n);
        return (notaMaiorQue.length);
};

function notas(arr){
    const somaNotas = arr.reduce((sum, a) => sum + a.nota, 0);
    console.log (`A média de notas é de ${(somaNotas/arr.length).toFixed(2)} valores.`)
}

class Aluno{
    constructor(nome){
        this.nome = nome;
        this.nota = rand(21); 
        this.idade = rand(10)+15;
    }
};


const alunos= [];
alunos.push(new Aluno ("Francisco"), new Aluno ("Cristovão"),new Aluno ("Maria João"),new Aluno ("Filomena"));

const resumoFuncoes = {
    totalAlunos(){
        return alunos.length;
    },
    aprovados : contarAprovados(alunos, 10), //aprovados alunos com mais de 10
    mediaNotas(){
        const somaNotas = alunos.reduce((sum, a) => sum + a.nota, 0);
        return Number((somaNotas/alunos.length).toFixed(2));
    },
    maisVelho (){
        let i = 0;
        let idadeMax = 0;
        for(let e in alunos){
            if (alunos[e].idade > idadeMax){
                idadeMax = alunos[e].idade
                i = e;
            }
        }
        return alunos[i].nome
        }
}

function retornaResumo() {
    return {
        totalAlunos: resumoFuncoes.totalAlunos(),
        aprovados: resumoFuncoes.aprovados, //aprovados alunos com mais de 10
        mediaNotas: resumoFuncoes.mediaNotas(),
        maisVelho: resumoFuncoes.maisVelho()
    };
}



mostraAlunos(alunos);
console.log("Aprovados :", contarAprovados(alunos,14));
notas(alunos);
console.log(retornaResumo());