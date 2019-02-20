import { handleStatus, log } from '../utils/promise-helpers.js';

const API = 'http://localhost:3000/notas';

export const NotasService = {

    listAll() {
        return fetch(API).then(handleStatus).catch(log);
    },

    sumItens(code) {
        return this.listAll().then(
            notas => notas.$flatMap(nota => nota.itens)
            .filter( item => item.codigo == code)
            .reduce( (total, item) => total + item.valor, 0)
        )
    },
    getItemsFromNota(){
        
    }
}
