//document.querySelector('body').style.background = 'orange';

class App{

    //método construtor
    constructor(){
        //criando a lista de repositórios
        this.listaRepositorios = [];

        //recuperando o formulário do html
        this.formulario = document.querySelector('form');

        //recuperando o elemento de lista do HTML <ul>
        this.listaHtml = document.querySelector('.list-group');

        //chamando o método que recupera os dados do formulário
        this.registrarDados(); 
    }

    registrarDados(){

        this.formulario.onsubmit = dadosRepo => this.adicionarListaRepo(dadosRepo);
    }

    adicionarListaRepo(dadosRepo){

        //preventDefaul função que evita que a página seja carrega quando um form é submetido
        dadosRepo.preventDefault();

        //Adicionando o repositório na lista

        this.listaRepositorios.push({

            nome: "Nerd Fonts",
            descricao: "Iconic font aggregator, collection, and patcher",
            imagem: "https://avatars0.githubusercontent.com/u/8083459?v=4",
            link: "http://github.com/ryanoasis/nerd-fonts"

        });

        //Rendenrizar a tela
        this.renderizarLista();
        // console.log(this.listaRepositorios);

    }

    renderizarLista(){        

        //limpando a tela <ul>
        this.listaHtml.innerHTML = ""

        //Percorrer toda a lista de repositórios e criar os elementos
        this.listaRepositorios.forEach(repo => {

        //<li>
        let li = document.createElement('li');
        li.setAttribute('class', 'list-group-item list-group-item-action');

            //<strong>
            let strong = document.createElement('strong');
            let txtNome = document.createTextNode(repo.nome);
            strong.appendChild(txtNome);

            //<p>
            let p = document.createElement('p');
            txtDescricao = document.createTextNode(repo.descricao);
            p.appendChild(txtDescricao);
            
            //<img>
            let img = document.createElement('img');
            img.setAttribute('src', repo.imagem);
            img.setAttribute('alt', 'imagem do repositório');

            //<a>
            let a = document.createElement('a');
            a.setAttribute('href', repo.link);
            a.setAttribute('target', '_blank');
            txtLink = document.createTextNode("Acessar")
            a.appendChild(txtLink);
        
        //adicionando todos os elementos no <li>
        li.appendChild(strong);
        li.appendChild(p);
        li.appendChild(img);
        li.appendChild(a);

        //adicionando o <li> no <ul>
        this.listaHtml.appendChild(li);

        /*  MODELO DA LISTA DO HTML

            <li class="list-group-item list-group-item-action">
            <strong>Nerd Fonts</strong>
            <p>Iconic font aggregator, collection, and patcher</p>
            <img src="https://avatars0.githubusercontent.com/u/8083459?v=4" alt="imagem do repositório">
            <a href="http://github.com/ryanoasis/nerd-fonts" target="_blank">Acessar</a>
            </li> 
        */

        //limpando o formulário após submeter
        this.formulario.querySelector('input[id=repositorio]').value = "";

        //colocando foco no form novamente
        this.formulario.querySelector('input[id=repositorio]').focus();

        });
        
    }

        
}

new App();