//crar una funcion nombreResolucion(ancho, alto), debe devolver el nombre de la resolución
/*
Nombre: ancho x alto
8k 7680 x 4320
4k 3840 x 2160
WQHD 2560 x 1440
FHD 1920 X 1080

*/

function nombreResolucion(ancho,alto){
    
    if(ancho>=7680 && alto>=4320){
        return 'El monitor tiene una Resolución que corresponde a un 8K';
    }else if(ancho>=3840 && alto>=2160){
        return 'El monitor tiene una Resolución que corresponde a un 4K';
    }else if(ancho>=3840 && alto>=2160){
        return 'El monitor tiene una Resolución que corresponde a un WQHD';
    }else if(ancho>=2560 && alto>=1440){
        return 'El monitor tiene una Resolución que corresponde a un WQHD';
    }else {
        return 'El monitor tiene una Resolución que corresponde a un mionitor';
    }      
       
}  

let nombre= nombreResolucion(8000,5000);

console.log(nombre);