//promessa =    objeto que encapsula o resultado de uma operação assíncrona 
//              permite que métodos assíncronos retornem valores como métodos síncronos
//              "Prometo retornar algo no futuro"

//              O estado é 'pendente' então: 'cumprido' ou 'rejeitado' [pending, then: fulfilled, rejected]
 //             o resultado é o que pode ser retornado 2 partes produzindo e consumindo [producing , consuming]


 //EX1
 const promise = new Promise((resolve, reject) => {
   let fileLoaded = true; 

   if (fileLoaded){
    resolve("File loaded");
   }
   else{
    reject("file not loaded");
   }
});

promise.then(value => console.log(value))
        .catch(error => console.log(error));

//Ex2

const promise1 = new Promise (resolve => {
    setTimeout(resolve,5000);
});

promomise1.then(()=> console.log('Thanks for waiting!'));

//OU

const wait = time => new Promise(resolve =>{
    setTimeout(resolve,time);
});
wait(3000).then(()=> console.log('Thanks for waiting !'));

//async 
// cópia do ex 1 sendo feito com um função async

/* const promise = new Promise((resolve, reject) => {
   let fileLoaded = true;*/

async function loadFile(){
     let fileLoaded = true; 
 
     /*if (fileLoaded){
    resolve("File loaded");
   }
   else{
    reject("file not loaded");
   }
});*/
    if (fileLoaded){
     return"File loaded";
    }
    else{
     throw "file not loaded";
    }
}
/*promise.then(value => console.log(value))
        .catch(error => console.log(error)); */
loadFile().then(value => console.log(value)) // ao invés de chamar a variavel se chama o método
            .catch(err => console.log(err));

//Ex 3 AWAIT-//
                /* O operador await é utilizado para esperar por uma Promise.
                Ele pode ser usado apenas dentro de uma async function.
                Descrição
                A expressão await faz a execução de uma função async pausar,
                para esperar pelo retorno da Promise, e resume a execução da função async
                quando o valor da Promise é resolvido. Ele então retorna o valor final da Promise.
                Se esse valor não for uma Promise, ele é convertido para uma Promise resolvida.
                Se a Promise for rejeitada, a expressão await invoca uma Exception com o valor rejeitado.
 */

async function loadFile(){
    let fileLoaded = false;

    if(fileLoaded){
        return 'File loaded';
    }
    else{
        throw 'File not loaded';
    }
}
   async function startProcess(){
    try{
        let message = await locateFile();
        console.log(message);
        message = await loadFile();
        console.log(message);
        message = await closeFile();
        console.log(message);
    }
    catch(err){
        console.log(err);
    }
   }
startProcess();