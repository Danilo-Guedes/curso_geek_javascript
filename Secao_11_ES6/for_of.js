let nome = "Danilo Paz Guedes de Freitas";

for(let letra of nome){
    console.log(letra);
}
///////////

let numeros = [1, 2, 3, 4, 5];
for(let num of numeros){
    console.log(num ** 2); // Desta forma não está acessando os indices
}

/////////// desta forma esta acessando o indice

for(let ind in numeros){
    console.log(`Índice : ${ind}, Valor² : ${numeros[ind]**2}`); 
}

let cursos = new Map([
    [1, 'python'],
    [2, 'django'],
    [3, 'javascript'],
    [4, 'Linux'],
    [5, 'React'],
    [6, 'Angular']
]);

console.log(cursos);

for(curso of cursos){
    console.log(`${curso[0]} - ${curso[1]}`);
}
///// Pegando só as chaves
for(let chave of cursos.keys()){
    console.log(chave);
}
////// Pegando somente os valores
for(let valor of cursos.values()){
    console.log(valor);
}
/////// Usando a desestruturação
for(let [chave, valor] of cursos.entries()){
    console.log(`chav-> ${chave}, Val->${valor}`);
}