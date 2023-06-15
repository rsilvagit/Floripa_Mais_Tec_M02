const frutas = ['uva','maça','limão','jaca','banana'];
frutas.forEach(element => console.log(element));

//map => passa os elementos do array por uma condição e retorna um novo array com os dados atualizados
const num = [1, 4, 6, 7, 9, 15, 20 ];

const mp1 = num.map(element => element * 2);

console.log = (mp1);



//filter => Usado para filtar dados ou remover de dentro de um array

const palavras =['palito','pedra','cascalho','madeira','arvore','jabuti','barco'];
const resultado = palavras.filter(words => words.length > 5);
console.log(`resultado: ${resultado}`);

//filter ex- 2 => remove dados duplicados chamando o médotdo indexOf

const duplicatedada =['manga','maça','manga','morango','pera','limão'];
const novoArray = duplicatedada.filter((element,index,arr)=> arr.indexOf(element)=== index);
console.log(novoArray);


// Find busca o primeiro elemento que atender a função
const number = [ 1 , 2 , 9, 8 ,3,5, 78]
const jwennNimewo = number.find(element=> element >5)
console.log(jwennNimewo);
 
const number1 = [ 1 , 2 , 9, 8 ,3,5, 78]
const jwennNimewo1 = number.find(element=> element >5)
console.log(jwennNimewo);

const pizzas =['marguerita','calabresa','portuguesa','mussarela']
const resPizzas = pizzas.find(p=> p.startsWith('m'));
console.log(`Pizzas: ${resPizzas}`);

//Find buscando um obj dentro de um array
const pessoa = [
    {nome: 'Rafael', idade: 35},
    {nome: 'Manoel', idade: 55},
    {nome: 'João', idade: 25},
    {nome: 'Kelly', idade: 45},
    {nome: 'Daniela', idade: 65},
]
let busca='Rafael';
const acharPessoa = pessoa.find(p=>p.nome === busca)
console.log(acharPessoa);

//Reduce => Junta os Dados do Array
const foguetes = [
    {pais: 'Brasil', lanc :30},
    {pais: 'EUA', lanc :80},
    {pais: 'Alemanha', lanc :90},
    {pais: 'Uruguai', lanc :40},
    {pais: 'Espanha', lanc :20},
    {pais: 'Cuba', lanc :50},
    {pais: 'França', lanc :130},
    {pais: 'Paraguai', lanc :10},
]
const totalLanc = foguetes.reduce((prevValor, elem)=> prevValor + elem.lanc, 0);
console.log(`resultado da soma ${totalLanc}`);//  retorna a soma dos valores selecionados no array

//every => executa uma função em todo o array e retorna um bool
const limitNum = [100, 30, 34, 78, 90];
const menorLimite=(menorValor) => menorValor < 150;
console.log(limitNum.every(menorLimite));
// verifica se todos os elementos do array vão atender a condição.
//Caso algum valor não atenda a condição ele retorna false.

const turma =[
    {nome: 'Rafael', idade: 35},
    {nome: 'Manoel', idade: 55},
    {nome: 'João', idade: 25},
    {nome: 'Kelly', idade: 45},
    {nome: 'Daniela', idade: 65},
]
console.log(`Maior Idade: ${turma.every((t => t.idade>=18))}`);

//Some => retorna um bool da mesma forma que o every, mas tem a diferença que se algum dos elementos do array atender a condição ele já retorna o true.
let isPrimo = (value) => {
    for (let i = 2; i < value; i++) {
        if (value % i === 0) {
            return false;
        }
        return value > 1;

    }
}
const arrPrimos = [78,36,25,48,79,85,56,25,74,21,47,96,3,55,12,43,78,43,31];
console.log('Quias são os numeros primos dentro do array?', arrPrimos.some(isPrimo));