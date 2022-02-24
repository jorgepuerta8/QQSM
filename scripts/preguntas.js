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



//se pueden meter en un array de  strings con los archivos php
    $.ajax({
url: 'https://opentdb.com/api.php?amount=15&type=multiple',
type: "GET",
dataType: "json",

success: CrearPregunta
    });
 
function CrearPregunta(datos){
  
    console.log(datos);
    let resultados=datos.results;
    resultados.forEach(element => {
  
    let Pregunta = {
        titulo: element.question,
        correcta:element.correct_answer,
        incorrectas: element.incorrect_answers
    }
    console.log(Pregunta);
    preguntas.push(Pregunta);
    });
//aqui se meten los datos en el array de preguntas
}

export {preguntas}; //exportamos preguntas