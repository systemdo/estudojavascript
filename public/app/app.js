import { log } from './utils/promise-helpers.js';
import  './utils/array-helpers.js';
import { NotasService as service} from './nota/service.js'

const getItensFromNotas = notas => notas.$flatMap(notas.itens);
const filterItemsByCode = code => getItensFromNotas.filters(item => item.codigo === code);
//const filterItemsByCode = (code, itens) => itens.filters(item => item.codigo === code);
const sumItensValue = itens => itens.reduce((total, item) => total += item.valor, 0);
document.querySelector('#myButton')
.onclick = () => service.sumItens('2143')
.then(log)
.catch(log);


/*const sumItens = notas => notas.$flatMap(nota => nota.itens)
.filter( item => item.codigo == '2143')
.reduce( (total, item) => total + item.valor, 0);*/

/*
#code é o parametro da função e nota é o retorno referente ao  then 
const sumItens = code  => notas => notas.$flatMap(nota => nota.itens)
.filter( item => item.codigo == code)
.reduce( (total, item) => total + item.valor, 0);*/

/*document.querySelector('#myButton')
.onclick = () => fetch('http://localhost:3000/notas')
.then(handleStatus)
.then(sumItens('2143'))
.then(log)
.catch(log);*/

/*document.querySelector('#myButton')
.onclick = () => fetch('http://localhost:3000/notas')
.then(handleStatus)
.then( notas => notas.$flatMap( notas => log(notas.itens)))
//.then(notas => notas.reduce((array, notas)=> array.concat(notas.itens), []))
//.then(notas => notas.map(nota => nota.itens))
.then(itens => itens.filter( item => item.codigo == '2143'))
.then(itens => itens.reduce((total, item)=> total += item.valor, 0))// o zero refere-se ao valor inicial da variavel 
.then(log)
.catch(log);

const idades = [26,18,42];
const totals  = idades.reduce( (total, idade) => total += idade, 0);
*/

const funcaExterna = nome => {
    const hoje = new Date();
    return () => console.log(nome, hoje);
};