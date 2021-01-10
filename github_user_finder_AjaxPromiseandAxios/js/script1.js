// AJAX Assinchronous JavaScript and XML  && XMLHttpRequest

let input = document.querySelector('input[name=github_user]');
let btn = document.querySelector('#btn');
let div = document.querySelector('#app');
// console.log(input);
// console.log(btn);
// console.log(div);

btn.onclick = function(){
 
    //limpando a div de buscas anteriores
    div.innerHTML = "";

    //instanciando um objeto AJAX
    let ajax = new XMLHttpRequest();

    //Abrindo uma conexão (GET, POST, PUT, DELETE ...)
    ajax.open('GET', `https://api.github.com/users/${input.value}`);
    
    //Enviando a requisição
    ajax.send(null);

    ajax.onreadystatechange = function(){
        //Criando elemento span e a variável nome
        let spanNome = document.createElement('span');
        let txtNome = '';

        /*
        TABELA DE STATUS DO AJAX READY STATE
        ajax.readystate -> 0 => Antes de abrir a conexão
        ajax.readystate -> 1 => Após abrir a conexão
        ajax.readystate -> 2 => Headers (cabeçalhos) foram recebidos
        ajax.readystate -> 3 => Carregando o cordo da requisição (conteúdo/dados)
        ajax.readystate -> 4 => Os dados estão pronto para uso 
        */

        if(ajax.readyState === 4){
            if(ajax.status === 200){
                //Transformando os dados JSON para Array
                let usuario = JSON.parse(ajax.responseText);

                //Veridficando se o usuário buscado tem um nome cadastrado

                if(usuario['name'] !== null){
                    txtNome = document.createTextNode(usuario['name']);

                    //resgatando a imagem do github
                    let img = document.createElement('img');
                    img.setAttribute('src', usuario['avatar_url']);
                    img.setAttribute('alt', usuario['name']);
                    img.setAttribute('width', '150px');
                    img.setAttribute('height', '150px');

                    //colocando a imagem na div
                    div.appendChild(img)
                    
                }else{
                    txtNome = document.createTextNode('O usuário procurado não tem nome cadastrado');
                }
                //adicionando otexto do nome no span e incluindo na div app
                spanNome.appendChild(txtNome);
                div.appendChild(spanNome);

                //Limpando o input apos o pressionamento do botão
                input.value = ''
            }else{
                txtNome = document.createTextNode(`O usuário ${input.value} não foi encontrado`);
                spanNome.appendChild(txtNome);
                div.appendChild(spanNome);
            }
        }   
    }
    input.value = '';
    input.select();
}