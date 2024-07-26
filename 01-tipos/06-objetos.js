//los objetos son una agrupación que hacen sentido tenerlos juntos, ej del lapiz o una persona

//Personaje de Tv
let nombre= "Tanjiro";
let anime= "Demon slayer";
let edad= 16;

let personaje= {
    nombre: "Tanjiro", //llave - valor o propiedad (en otros lenguajes atributos)
    anime: "Demon slyer",
    edad: 16,

}; //este so un objeto literal

console.log(personaje);
console.log(personaje.nombre);
console.log(personaje['anime']); //esta es la otra forma de ver otra propiedad


personaje.edad=13;//forma de modificar una propiedad

let llave= 'edad';
personaje[llave]=16;//forma de modificar una propiedad, recomendable cuando vamos a iterear las propiedade

delete personaje.anime;

console.log(personaje);