function Punto(x,y){
    this.x=x;
    this.y=y;
    this.dibujar=function(){console.log('Dibujando...');}
}



// const Point= new Function('x','y',`  
//     this.x=x;
//     this.y=y;
//     this.dibujar=function(){console.log('Dibujando...');}
//     `);

// const p= new Point(1,2);
// console.log(p);

//el profesor dice que no es bueno utilizarla


let punto={z:7};

//Punto.call(punto, 1,2); //nos permite extende objetos antes definidos

Punto.apply(punto, [1,2]);   //nos permite extende objetos antes definidos

console.log(punto);