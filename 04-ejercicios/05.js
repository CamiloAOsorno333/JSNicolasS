//crear un algoritmo el numero mayor y el menor de un array


let array= [500,80,26,-45,-800,-800];

function getMenorMayor(arr){
     let menor= arr[0];
     let mayor= arr[0];
     for(numero of arr){
        menor= menor < numero ? menor : numero;
        mayor= mayor > numero ? mayor : numero;
     }
     return [menor, mayor];

}

let numeros= getMenorMayor(array);
console.log(numeros);