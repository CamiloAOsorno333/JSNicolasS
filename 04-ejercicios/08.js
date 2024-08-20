/*crear un algoritmo que va a tomar un array 
de objetos y devuelva un array de pares*/

let array = [
    {
        id: 1,
        name: 'Nicolas',
    },{
        id:2,
        name: 'Camilo',
    },{
        id:3,
        name: 'Juan',
    },{
        id: 4,
        name: 'Felipe',
    }];

let pares= [
    [1,{id: 1, name: "Nicolas"}],
    [2,{id: 2, name: "Camilo"}],
    [3,{id: 3, name: "Juan"}],
    [4,{id: 4, name: "Felipe"}],
];

function toPairs(arr){
    let pairs= [];
    for(idx in arr){
        let elemento = arr[idx];
        pairs[idx] =[elemento.id,elemento];
    }
    return pairs;
};

let resultado= toPairs(array);
console.log(resultado);