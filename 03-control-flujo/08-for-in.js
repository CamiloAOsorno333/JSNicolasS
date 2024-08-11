let user= {
    id:1,
    name: 'Chanchito infeliz',
    age:25,
};

for(let propiedad in user){
    console.log(propiedad, user[propiedad]);

}

console.log('Recorre una Array con for in');

let animales= ['Chanquito feliz','Dragón','Canguro'];

for(let indice in animales){
    console.log(indice, animales[indice]);
}