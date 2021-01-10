// 1) temos que resgatar o input

let input = document.querySelector('input[name=tarefa]');
// console.log(input);


// 2) temos que resgatar o button

let btn = document.querySelector('#botao');
// console.log(btn);


// 3) temos que resgatar o lista

let lista = document.querySelector('#lista');
// console.log(lista);

let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];


// dando acesso a div do card

let card = document.querySelector('.card');

// Criando função para renderizar o array de tarefas na tela usando o DOM

function renderizarTarefas(){

    // Limpando o conteúdo da lista antes e renderizar (para não dar duplicidade de listas)

    lista.innerHTML = '';    

    for(tarefa of tarefas){
        // criar o item da lista
        let itemLista = document.createElement('li');

        // Adicionar classes nos itens da lista
        itemLista.setAttribute('class', "list-group-item list-group-item-action")

        //Adicionando um evento de click para chamar a função de deletar
        itemLista.onclick = function(){
            deletarTarefas(this);
        }
    
        // Criando um texto
        let itemTexto = document.createTextNode(tarefa);

        //Adicionando o texo no item da lista
        itemLista.appendChild(itemTexto);

        //Adicionando o item da lista na lista
        lista.appendChild(itemLista)

        // Salvando no LocalStorage
        salvandoTarefasNoLocalStorage();
       
    }
}

renderizarTarefas();

// 3) Precisamos "escutar" o evento de clique no botão ou o pressionamento do botão ENTER para chamar a função de adicionar tarefas

btn.onclick = function(){
    adicionarTarefa();
}

input.addEventListener('keydown', function(e){
    let key = e.which || e.keycode || e.key || 0;

    if(key === 13){
    adicionarTarefa()
    }
});

// 4) Criando a função de adicionar tarefas

function adicionarTarefa(){
    
    // 5) Precisamos capiturar o valor digitado no input

    let novaTarefa = input.value;



    if(novaTarefa !== ""){

            // 6) Precisamos atualizar nova tarefa na lista (array) de tarefas na tela
            tarefas.push(novaTarefa);
            renderizarTarefas();

            //limpando o input após o pressionamento do botão, colocando o cursor no input novamente e removendo os spans de alerta
            input.value = ''
            input.select();
            removerSpans();

    }else{
        // alert('digite uma tarefa antes de adicionar')

        removerSpans(); // para evitar de ficar criando vários spans

        let span = document.createElement('span');
        span.setAttribute('class', 'alert alert-warning')

        let msg = document.createTextNode('Digite uma tarefa antes de adicionar!');

        span.appendChild(msg);

        card.appendChild(span);

        input.select();
        
    }    
}

function removerSpans(){
    spans = document.querySelectorAll('span');

    for(let i = 0; i < spans.length; i++){
        card.removeChild(spans[i]);
    
    }

}
function deletarTarefas(taref){

    tarefas.splice(tarefas.indexOf(taref.textContent), 1);

    // renderizando as tarefas novamente após a deleção
    renderizarTarefas()

    // Salvando no LocalStorage
    salvandoTarefasNoLocalStorage();
}

function salvandoTarefasNoLocalStorage(){
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}

