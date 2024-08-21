let user={
    id: 1,
    email: 'camilo@gmail.com',
    name: 'Camilo',
    activo: true,
    recuperarClave: function () {
        console.log('Recuperando contraseña...');
    },

};

function crearUsuario (id,name,email){
    return  {
        id,
        email,
        name,
        activo: true,
        recuperarClave: function () {
            console.log('Recuperando contraseña...');
        },
};
}

let user1= crearUsuario(1,'Nicolas', 'nico@holammundo.io');
let user2= crearUsuario(2,'Felipe', 'felipe@holammundo.io');
let user3= crearUsuario(3,'Juan', 'juan@holammundo.io');

console.log(user1,user2,user3);