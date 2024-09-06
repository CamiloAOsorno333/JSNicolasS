let punto= {
    x:10,
    y:15,
};

let referencia= Object.assign(punto, {z:20}, {t:25}, {r:84});
let clonePunto= Object.assign({}, punto, {z:20}, {t:25});
console.log(punto, clonePunto, referencia);

//para copiar exactamente 
let copiaPunto = Object.assign({},punto);
console.log(copiaPunto, clonePunto,referencia,punto);

//otra forma moderna para copiar objetos
let copia3= {...punto};
console.log(copia3);


//es muy antigua pero puede servir cuando encontramos codigo 
let copia4={};
for(let llave in punto){
    copia4[llave] = punto[llave];
}
console.log(copia4);