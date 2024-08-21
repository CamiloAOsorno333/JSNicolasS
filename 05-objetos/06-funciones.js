/*las funciones son considerdas objetos de primera clase y pueden 
//estar contenidas en una variable, puedes ser un argumento dentro 
de otra función y retornadas de otras funciones y tienen propiedades*/

function Usuario(nombre){
    this.nombre= nombre;
}

console.log(Usuario.name);
console.log(Usuario.length); //cantidad de argumentos que recibe una función

const U= Usuario;

let user= new U('Nicolas'); 

console.log(user);


//funciones como argumentos de las funciones 
function of(Fn, arg){
    return new Fn(arg);
}

let user1= of(Usuario, 'Chanchito');
console.log(user1);


//podemos retornar funciones
function returned(){
    return function() {
        console.log('Hola Mundo');
    }
}

let saludo= returned();
saludo();