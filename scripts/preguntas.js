/**
 * En este js  obtendremos las preguntas y las importaremos directamente a la app
 * estructura del json
 * id:
 * string pregunts
 * array strign respuestas
 * int correcta (0,1,2,3);
 * Se meteran en un array y se generarán de forma aleatoria
 */
let preguntas=[];
//1º)   Hacer la busqueda en JSON en los 5 ficheros
//2º)   Son 2 preguntas por cada JSON
let datos;

//se pueden meter en un array de  strings con los archivos php
let arrayPHP=["./../CORS/historia.php",'./../CORS/deportes.php','./../CORS/ciencia.php','./../CORS/geografia.php',"./../CORS/entretenimiento.php"];
console.log(arrayPHP);
arrayPHP.forEach(enlace => {
    console.log(enlace);
let ajax = fetch(enlace)
ajax.then(res=>{
    console.log(res);
    if(res.ok){
        return res.json();
    }
})

ajax.then((res)=>{
    console.log(res);
    datos=res;
console.log(datos);
})
ajax.then(()=>{ //aqui se meten los datos en el array de preguntas
    console.log(datos.children);
    let aleatorio1= Math.floor(Math.random()*(45-1));
    let aleatorio2= Math.floor(Math.random()*(45-1));
    let pregunta1=datos[aleatorio1];
    console.log(pregunta1);
    let pregunta2=datos[aleatorio2];
    preguntas.push(pregunta1,pregunta2);
});
console.log(preguntas);
}); //fin del foreach
console.log(preguntas);
export {preguntas}; //exportamos preguntas