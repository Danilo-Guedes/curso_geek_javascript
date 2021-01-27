//document.querySelector('body').style.background = 'orange';

class App{

    //método construtor
    constructor(){
        //criando a lista de repositórios
        this.listaRepositorios = [];

        //recuperando o formulário do html
        this.formulario = document.querySelector('form');

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
            resumo: "Iconic font aggregator, collection, and patcher",
            imagem: "https://avatars0.githubusercontent.com/u/8083459?v=4",
            link: "http://github.com/ryanoasis/nerd-fonts"

        });

        //Renderizar a tela
        console.log(this.listaRepositorios);

    }
}

new App();