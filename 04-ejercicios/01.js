//Crer una función que reciba como parametro dos numeros y se debe imprimir en consola el número mayor

function cualEsMayor(a,b){
    if (a > b){
       return a;
    }else{
        return b;
    }
}

let mayor = cualEsMayor(25,35);

console.log(mayor);

console.log('Otra opción mas corta es con un operador ternario y utilizar la palabra return');

function cualEsMayor2(a,b){
    return (a > b) ? a : b;
}

let mayor2 = cualEsMayor(50,75);

console.log(mayor2);