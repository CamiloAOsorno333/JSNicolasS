let user= {
    email: 'nico@holamundo.io',
    name: 'Nicolas',
    direccion: {
        calle: 'Queen st',
        numero: 15,
    },
    activo: true,
    recuperacionClave: function(){
        console.log('Recuperando clave...');
    },
};

//un objeto puede tener variables y funciones