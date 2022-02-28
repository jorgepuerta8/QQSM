
/**
 * 1º importamos los otros archivos js
 */
/**$(document.querySelector('main')).css('overflow', 'hidden'); /** para cuando inicie */
import { crearNavbar } from './navbar.js';
import { preguntas } from './preguntas.js';

/**
 * 1º banner para que introduzca el usuario
 */
let dinero = [0, 500, 1000, 1500, 2000, 2500, 3000, 5000, 10000, 20000, 50000, 80000, 100000, 500000, 1000000]; //se colocará el id en función del contador
let boolean=false;
let barra;
let nombre;
let contadorPreguntas = 0; //contador de preguntas acertadas que nos servirá como indice en el array de preguntas
let contMostrar = contadorPreguntas+1; //contador de preguntas acertadas que nos servirá como indice en el array de preguntas
let contenedor = $('<div>').attr('id', 'contenedor');
let cuerpo = $('#visor');

/**
 * Creamos el mensaje de introducción de usuario
 */
let fragmento1 = $(document.createDocumentFragment());
let formulario = $('<form>').append('<label>').html('Escriba su nombre').append('<br>');
formulario.css("width", "80%").css("margin", "auto").css("height", "auto").css("background-color", "#1D0177").css("border-radius", "5em").css("border", "gold 1px solid").css("color", "cornsilk");
let usuario = $('<input>').attr('id', "name").attr("type", "text").attr('required', 'true').css("width", "50%").css("margin", "auto");
let btn = $('<input>').attr("type", "button").attr("value","Jugar").attr('id', "btn").on('click', validarUser);
formulario.append(usuario);
fragmento1.append(formulario, btn);

cuerpo.append(fragmento1);

/**
 * @author Jorge
 * Validacion del input text para que arranque el juego
 * 
 */
function validarUser() {
  if (document.querySelector('#name').value.trim() === '') { //si está vacío
    usuario.html("ERROR ESCRIBA SU NOMBRE");
  } else {
    nombre = document.getElementById('name').value;
    boolean = true;
    barra = crearNavbar();
    cuerpo.replaceWith(contenedor);
    contenedor.append(barra);
       
    Jugar();
  }
}

/**
 * @author Jorge
*  funcion principal que se activa con cada pregunta Acertada
 * 
 */
function Jugar() {
  
    $("#comodin1, #comodin2, #comodin3").on("click", mitad);
  generarPregunta(contadorPreguntas);
  
  
  $("#Respuesta1, #Respuesta2, #Respuesta3, #Respuesta4").click(validarRespuestas);

  
}
/**
 * 
 * @author Jorge
 * Funcion para mezclar las preguntas
 * @param {Respuesta} correcta 
 * @param {Respuesta[]} incorrectas 
 * @returns array con las respuestas mezlcadas
 */
function mezclarRespuestas(correcta, incorrectas) {
  let Narray=[]; 
   Narray.push(correcta);
  let arr=Narray.concat(incorrectas);
  return shuffle(arr);
  function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    // While there remain elements to shuffle...
    while (currentIndex != 0) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
  }
}
/**
 * @author Jorge
 * Función del comodin que nos despeja 2 respuestas incorrectas
 * 
 * @param {evento} e 
 * 
 */
function mitad(e) {
  
  let P=preguntas[contadorPreguntas];
 
 $(`[name="${P.incorrectas[0]}"]`).html(" ");
  $(`[name="${P.incorrectas[2]}"]`).html(" ");
  $(e.target).attr("disabled","disabled");
}
function generarPregunta(contadorPreguntas) {
  $(".Res").css("background-color", "#1D0177").css("border-radius", "5em").css("border", "gold 1px solid").css({ "color": "cornsilk" }).hover(function () {
    $(this).css({
      "background-color": "orange",
      "color": "black"
    })
  }, function () {
    $(this).css({
      "background-color": "#1D0177",
      "color": "cornsilk"
    })
  })
  $('#PregAcertadas').html(`Pregunta: ${contMostrar++}/15`);
  //Si llega a la 5 pregunta, se genera una  boton para retirarse
  if(contadorPreguntas===4){
   
    let nB=$('<input>').attr("type", "button").attr("value","¿Quieres retirarte?").attr('id', "btnPlantarse").on('click',finJuego);
  
    $(`[name="PregAcertadas"]`).append(nB);
  }

$('#dinero').html(`${nombre}:  ${dinero[contadorPreguntas]} €`);
let P = preguntas[contadorPreguntas]; //esta es la preguntas


$('#pregunta').first().html(P.titulo).css("font-size", "1.6em");
let NuevoArray = mezclarRespuestas(P.correcta, P.incorrectas); //este array tiene las respuestas a imprimir 

//imprimir las nuevas respuestas
$('#Respuesta1').first().html(`${NuevoArray[0]}`).css("font-size", "1.6em").attr("name", NuevoArray[0]);
$('#Respuesta2').first().html(`${NuevoArray[1]}`).css("font-size", "1.6em").attr("name", NuevoArray[1]);
$('#Respuesta3').first().html(`${NuevoArray[2]}`).css("font-size", "1.6em").attr("name", NuevoArray[2]);
$('#Respuesta4').first().html(`${NuevoArray[3]}`).css("font-size", "1.6em").attr("name", NuevoArray[3]);
    
}
/**
 * @author Jorge
 * 
 * Funcion para validar la opcion del usuario
 * 
 * 
 * @param {evento} e 
 */
function validarRespuestas(e) {
  let resCorrecta = preguntas[contadorPreguntas].correcta; //esta es la preguntas
  console.log(`La respuesta correcta es : ${resCorrecta}`);
  let respMarcada = ($(e.target).text()); //la que se marca
  console.log(respMarcada);
  let divcorrecto = $(`[name="${resCorrecta}"]`);
  if (resCorrecta === respMarcada) { //si acierta
    console.log(contadorPreguntas);
    divcorrecto.css("background-color", "#099726");
    contadorPreguntas++; //se suma la preguntas
    $('#dineroDiv').html(`${nombre}:  ${dinero[contadorPreguntas]} €`);
    generarPregunta(contadorPreguntas);
  } else { //si falla
    $(e.target).css("background-color", "orange");
    divcorrecto.css("background-color", "#099726");
    finJuego();
    
  }

}
/**
 * @author Jorge
 * funcion que refresca la pagina en caso de haber perdido o haberse retirado
 * 
 */
function finJuego(){

 setTimeout(function () { location.reload(1); }, 1000);

}