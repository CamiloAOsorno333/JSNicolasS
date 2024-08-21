const user= {id: 1};

user.name= 'Nicolas';
user.guardar= function (){
    console.log('Guardando', user.name);

}

user.guardar();

delete user.name;
delete user.guardar;

console.log(user); //una constante no se puede cambiar, pero cuando contiene un objeto
                    //a ese objeto si se le pueden modificar su propiedades

//para no poder modificar el un objeto 

/*const user1= Object.freeze({id:1});
user1.name= 'Nico';
console.log(user1);*/

//para poder modificar las propiedades pero no agregarle o quitarle

const user1= Object.seal({id:1});
user1.id= 2;
console.log(user1);