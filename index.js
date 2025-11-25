//Primero tenemos que ingresar por parametro el array de letras que vamos a ocupar
function contarLetras(Palabra){
    let contar =0;
// Ahora tenemos que recorrer el array de datos con for
for(let i=0;i<Palabra.length;i++){
    //Ahora dentro de cada una de estas palabras debemos contar uno por uno.... ¿Como?
    if(Palabra[i].length>=5){
        contar+=1;
    }
}
return contar;
}

const array=contarLetras(["hola", "javascript", "sol", "lunes", "perro"])

console.log(array)