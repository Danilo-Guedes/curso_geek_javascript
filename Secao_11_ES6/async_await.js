//Async Await, é uma forma de programação asincrona
// a função espera (await) algum processo ser finalizado para dar continuidade, porém libera a thead para fz outras funções

const randomPromise = () => new Promise((resolve, reject) => {
    let valor = Math.floor(Math.random() * 10) // hera um numero de 0 a 10
    setInterval(() => {
        if(valor % 2 == 0){
            resolve(`o numero ${valor} é par...`);
        }else{
            reject(`o numero ${valor} é impar...`)
        }
    }, 5000);

});


async function executarPromise(){
    try{
        const response = await randomPromise();
        console.log(response);
    }catch (error){
        console.log(error);        
    }

};

executarPromise();

