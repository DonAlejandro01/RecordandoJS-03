function contarLetras(Palabra){
    let contar =0;

for(let i=0;i<Palabra.length;i++){
    if(Palabra[i].length>=5){
        contar+=1;
    }
}
return contar;
}

const array=contarLetras(["hola", "javascript", "sol", "lunes", "perro"])

console.log(array)