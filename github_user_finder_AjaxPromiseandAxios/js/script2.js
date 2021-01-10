// PROMISE

let btn = document.querySelector('#btn');
let div = document.querySelector('#app');
// console.log(btn);
// console.log(div);

let promise = function(){

    return new Promise(function(resolve, reject){
        let github_user = document.querySelector('input[name=github_user]').value;
        let ajax = new XMLHttpRequest();
        ajax.open('GET', `https://api.github.com/users/${github_user}`);
        ajax.send(null);

        ajax.onreadystatechange = function(){
            if(ajax.readyState === 4){
                if(ajax.status === 200){
                    resolve(JSON.parse(ajax.responseText));
                }else{
                    reject('Não foi possível encontrar o usuário com este nome');
                }
            }
        }
    });

}   

btn.onclick = function(){
    // limpar a div
    div.innerHTML = '';
    // criar o span
    let spanNome = document.createElement('span');
    //criar a variável nome
    let txtNome = '';
    //Executando a PROMISSE
    promise()
        //resolce = SUCESSO
        .then(function(dados){
            ///verificar se o usuário tem nome
            if(dados['name'] !== null){
                txtNome = document.createTextNode(dados['name']);

                let img = document.createElement('img');
                img.setAttribute('src',dados['avatar_url']);
                img.setAttribute('alt', dados['name']);
                img.setAttribute('width','150px');
                img.setAttribute('height','150px');

                div.appendChild(img);

            }else{
                txtNome = document.createTextNode('O usuário encontrado não possuí nome');
            }
            //Adiciona o texto no span e o span na div
            spanNome.appendChild(txtNome);
            div.appendChild(spanNome);
        })
        .catch(function(error){
            txtNome = document.createTextNode(error)
            
            //Adiciona o texto no span e o span na div
            spanNome.appendChild(txtNome);
            div.appendChild(spanNome);

        })
        input = document.querySelector('input[name=github_user');
        input.value = '';
        input.select();
}
