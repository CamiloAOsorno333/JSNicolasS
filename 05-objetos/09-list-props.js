const punto= {
    x:10,
    y:15,
    dibujar(){
        console.log('dibujando');
    }
};

//delete punto.dibujar;
if('dibujar' in punto){
punto.dibujar();
}

//con esto podemos acceder a listar los valores de las propiedades de un objeto
console.log(Object.keys(punto));

for (let llave of Object.keys(punto)){
    console.log(llave, punto[llave]);
}

//para acceder a la llave junto con el valor 
for (let entry of Object.entries(punto)){
    console.log(entry);
}

//Funcionalidad nueva y preferible
for (let llave in punto){
    console.log(llave, punto[llave]);
}
