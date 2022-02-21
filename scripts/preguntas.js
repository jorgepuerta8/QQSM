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
let preguntas_preseleccionadas=[];

//1º)   Hacer la busqueda en JSON en los 5 ficheros
//2º)   Son 2 preguntas por cada JSON

//se pueden meter en un array de  strings con los archivos php
let arrayPHP=["../CORS/historia.php",'./../CORS/deportes.php','./../CORS/ciencia.php','./../CORS/geografia.php',"./../CORS/entretenimiento.php"];

$.ajax({
    url: "../CORS/historia.php",
    type: "GET",
    dataType: "json",
    
    success: CrearPregunta
        });
  /**  
arrayPHP.forEach(enlace => {
    console.log(enlace);
    $.ajax({
url: enlace,
type: "GET",
dataType: "json",

success: CrearPregunta
    });
 */
function CrearPregunta(datos){
  
    console.log(datos)
    datos.forEach(element => {
        preguntas_preseleccionadas.push(element);
    });
//aqui se meten los datos en el array de preguntas
console.log(preguntas_preseleccionadas);
let aleatorio1= Math.floor(Math.random()*(45-1));
let aleatorio2= Math.floor(Math.random()*(45-1));
let pregunta1=preguntas_preseleccionadas[aleatorio1];
console.log(pregunta1);
let pregunta2=preguntas_preseleccionadas[aleatorio2];
preguntas.push(pregunta1,pregunta2);
}


console.log(preguntas);
//}); //fin del foreach
console.log(preguntas);
export {preguntas}; //exportamos preguntas