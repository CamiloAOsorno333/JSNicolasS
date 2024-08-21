//atajos constructuros

let obj = {};

let obj2 = new Object();

function Usuario(){
    this.name="Chanchito feliz";
}

let user = new Usuario();
console.log(user.constructor);

const s1= "1+1";
const s2= new Object("1+1");

console.log(s2.valueOf()); //funciona para los otros tipos de datos


