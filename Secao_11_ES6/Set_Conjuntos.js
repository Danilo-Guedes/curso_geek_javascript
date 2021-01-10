/*
conjuntos não aceitam repetição de valores
conjuntos não são indexados
*/

//Declarando um Conjuto / Set
let cursos = new Set();

//Adicionando valores

cursos.add('python');
cursos.add('django');

//Adicionando valores concatenados

cursos.add('django_REST').add('Javascript').add('react');

console.log(cursos);

//Acessando o tamanho do conjunto
console.log(cursos.size);

//Verificando se tem algum item no array
console.log(cursos.has('python'));


//Deletar Elementos do Conjunto

cursos.delete('django_REST');

console.log(cursos);

/////////// 

let frutas = ['morango', 'uva', 'limão', 'abacaxi', 'uva'];
let frutas_unicas = new Set(frutas);

console.log(frutas_unicas);


