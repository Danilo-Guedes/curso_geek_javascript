// OPERADORES REST E SPREAD -- (...var)
// parecido com o *args do python


function total(...precos){

    let total = 0

    precos.forEach(p => total += p);

    return total;
}

console.log(total(12, 25, 15, 88, 13, 3));
console.log(total(1, 22, 14));
console.log(total(12, 10));
console.log(total());


/////////////////////

let cesta1 = ['uva', 'morango', 'pêra', 'goiaba', 'abacaxi']; 
let cesta2 = ['limão', 'manga', 'maçã', 'mamão'];

let compras = [...cesta1, ...cesta2];

console.log(compras);

/////////////////////////


let alunos = ['João', 'Maria', 'Kleber'];
let novoAluno = 'Danilo';

let todos = [...alunos, novoAluno];

console.log(todos);