// AXIOS

let btn = document.querySelector('#btn');
let div = document.querySelector('#app');

btn.onclick = function(){
    // limpando a div
    div.innerHTML = '';
    let spanNome = document.createElement('span');
    let txtNome = '';
    let github_user = document.querySelector('input[name=github_user]').value;

    axios.get(`https://api.github.com/users/${github_user}`)
        .then(function(response){
            if(response.data.name !== null){
                txtNome = document.createTextNode(response.data.name)

        
                let img = document.createElement('img');
                img.setAttribute('src', response.data.avatar_url);
                img.setAttribute('alt', response.data.name);
                img.setAttribute('width', '200px');
                img.setAttribute('height', '200px');
                
                div.appendChild(img);
            }else{
                txtNome = document.createTextNode("O usuário encontrado não tem nome cadastrado")
            }

            spanNome.appendChild(txtNome);
            div.appendChild(spanNome);

        })
        .catch(function(error){
            txtNome = document.createTextNode('Não foi possível realizar a pesquisa');
            spanNome.appendChild(txtNome);
            div.appendChild(spanNome);


        });
        
    input = document.querySelector('input[name=github_user]');
    input.value = '';
    input.select();
}