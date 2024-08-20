//construir una función que nos permita obtener un elemento por su indice, donde el valor que le 
// pasemos como indice no puede ser menor que cero y elemento debe existir en el array

function getByIdx(arr, idx){
    if(idx <0 || arr.length <= idx) {
        return 'Elemento no existe';
    }
    return arr[idx];
}

let resultado= getByIdx([1,3,5,7,9,11],5);
console.log(resultado);