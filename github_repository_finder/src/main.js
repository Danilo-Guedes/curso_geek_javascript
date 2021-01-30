import api from "./api";

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

    async adicionarListaRepo(dadosRepo){

        //preventDefaul função que evita que a página seja carrega quando um form é submetido
        dadosRepo.preventDefault();

        //recuperando o input do form
        let input = this.formulario.querySelector('input[id=repositorio]').value;  //console.log(input);
        

        //se o input vire vazio sair da função
        if(input.length === 0){
            return;//sai da função
        }

        //Ativa a msg de buscando/carregando
        this.mostraCarregando();

        try{
            //consumindo a api do fit hub + repo do input
            let response = await api.get(`repos/${input}`);   //console.log(response);

            //desempacotando os dados do responde que vamos utilizar
            let {name, description, html_url, owner: {avatar_url}} = response.data;

            //Adicionando o repositório na lista

            this.listaRepositorios.push({

                nome: name,
                descricao: description,
                imagem: avatar_url,
                link: html_url

            });
 
            //Rendenrizar a tela
            this.renderizarLista();
            // console.log(this.listaRepositorios);

        }catch(erro){
            
            //limpando o <li> com a msg de carregando...
            this.listaHtml.removeChild(document.querySelector('.list-group-item-warning'));

            //limpa msg de erro antiga antes de apresentar a nova
            let err = this.listaHtml.querySelector('.list-group-item-danger');
            if(err !== null){
                this.listaHtml.removeChild(err);
            }

            //criando <li> para exibir msg de erro de busca
            let li = document.createElement('li');
            li.setAttribute('class', 'list-group-item list-group-item-danger');
            let txtErro = document.createTextNode(`O repositório ${input} não existe`);
            li.appendChild(txtErro);
            this.listaHtml.appendChild(li);
        }
    }

    mostraCarregando(){

            let li = document.createElement('li');
            li.setAttribute('class', 'list-group-item list-group-item-warning');
            let txtCarregando = document.createTextNode("Aguarde ... O repositório digitado está sendo pesquisado...");
            li.appendChild(txtCarregando);
            this.listaHtml.appendChild(li);          


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
            let txtDescricao = document.createTextNode(repo.descricao);
            p.appendChild(txtDescricao);            
            
            //<img>
            let img = document.createElement('img');
            img.setAttribute('src', repo.imagem);
            img.setAttribute('alt', 'imagem do repositório');            

            //<a>
            let a = document.createElement('a');
            a.setAttribute('href', repo.link);
            a.setAttribute('target', '_blank');
            let txtLink = document.createTextNode("Acessar")
            a.appendChild(txtLink);            

        //adicionando os itens criados na lista <li>
        li.appendChild(strong);
        li.appendChild(img);
        li.appendChild(p);
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