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

    $.ajax({
url: 'https://opentdb.com/api.php?amount=15&type=multiple',
type: "GET",
dataType: "json",

success: CrearPregunta
    });
 /**
  * Genera un array del objeto Preguntas
  * @author Jorge
  * 
  * @param {any} datos 
  */
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