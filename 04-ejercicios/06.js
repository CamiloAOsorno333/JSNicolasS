//crear un algoritmo que devuelva la cantidad de número positivos en un array

let array = [2,4,6,-8,-10,-22,97,-6,15,78,26,58];

function cuantosPositivos(arr){
    let cantidad= 0;
    for (elemento of arr){
        if(elemento > 0){
            cantidad++;

            }
       
    }
    return cantidad;
}

let resultado = cuantosPositivos(array);
console.log(resultado);