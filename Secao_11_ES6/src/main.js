// importando a função soma do arquivo helper.js

import { soma } from './helper' //importando um export normal
import sub from './helper'  // importando um export DEFAULT

console.log(soma(5, 2));
console.log(sub(10, 3));

import * as mat from './functions_exports'; // importando todas as funções de outro módulo (TEM QUE SER EXPORT NORMAL - sem defautl)

console.log(mat.quadrado(3));
console.log(mat.metade(10));

// Declarando uma Classe com método construtor

class Pessoa{  

    constructor (name) {
        this.nome = name;
    }
    
    apresentar(){
        console.log(`Olá meu nome é ${this.nome}.`)
    };

    falar(){
        console.log("estou falando...");
    };
    comer(){
        console.log("Agora eu estou comendo...");
    };
        
};

// instanciando uma classe e chamando três metodos

const daniloGuedes = new Pessoa('Danilo');
daniloGuedes.apresentar();
setTimeout(daniloGuedes.falar, 2000);
setTimeout(daniloGuedes.comer, 4000);

// altere a cor abaixo para ver o webpack-dev-server rodando live

document.querySelector('body').style.backgroundColor = 'blue';