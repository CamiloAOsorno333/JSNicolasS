//objeto a construir 
//{id:1, recuperarClave: function(){}}

function Usuario(){  ///la primera letra en mayusculas UpperCamelCase
    this.id=1;
    this.recuperarClave= function () {
        console.log('recuperando clave...');
    }
} 

let usuario= new Usuario;

console.log(usuario);