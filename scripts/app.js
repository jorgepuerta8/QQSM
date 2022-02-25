
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

let barra;
let nombre;
let contadorPreguntas = 0; //contador de preguntas acertadas que nos servirá como indice en el array de preguntas
let contMostrar = contadorPreguntas+1; //contador de preguntas acertadas que nos servirá como indice en el array de preguntas
let contenedor = $('<div>').attr('id', 'contenedor');

let cuerpo = $('#visor');

/**
 * Replace etiqueta Body por fragmento
 */
let fragmento1 = $(document.createDocumentFragment());

let formulario = $('<form>').append('<label>').html('Escriba su nombre').append('<br>');
formulario.css("width", "80%").css("margin", "auto").css("height", "auto").css("background-color", "#1D0177").css("border-radius", "5em").css("border", "gold 1px solid").css("color", "cornsilk");
let usuario = $('<input>').attr('id', "name").attr("type", "text").attr('required', 'true').css("width", "50%").css("margin", "auto");
let btn = $('<input>').attr("type", "button").attr("value","Jugar").attr('id', "btn").on('click', validarUser);
formulario.append(usuario);
fragmento1.append(formulario, btn);

cuerpo.append(fragmento1);


function validarUser() {
  if (document.querySelector('#name').value.trim() === '') { //si está vacío
    usuario.html("ERROR ESCRIBA SU NOMBRE");
  } else {
    nombre = document.getElementById('name').value;

    boolean = true;
    barra = crearNavbar();
    cuerpo.replaceWith(contenedor);
    contenedor.append(barra);
        console.log(barra);
    Jugar();
  }
}

/**
 * 
 */
function Jugar() {
  
    $("#comodin1, #comodin2, #comodin3").on("click", mitad);
  generarPregunta(contadorPreguntas);
  
  
  $("#Respuesta1, #Respuesta2, #Respuesta3, #Respuesta4").click(validarRespuestas);

  
}
function mezclarRespuestas(correcta, incorrectas) {
  let Narray=[]; 
   Narray.push(correcta);
  let arr=Narray.concat(incorrectas);
  console.log(Narray);
  console.log(arr);
  console.log(shuffle(arr));
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
// Funciones de comodines //

function mitad(e) {
  console.log($(e.target));
  let P=preguntas[contadorPreguntas];
  console.log(P.incorrectas);
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
  if(contadorPreguntas===4){
   
    let nB=$('<input>').attr("type", "button").attr("value","¿Quieres Rendirte?").attr('id', "btnPlantarse").on('click',finJuego);
  
    $(`[name="PregAcertadas"]`).append(nB);
  }

$('#dinero').html(`${nombre}:  ${dinero[contadorPreguntas]} €`);
let P = preguntas[contadorPreguntas]; //esta es la preguntas
let resCorrecta = P.correcta;

$('#pregunta').first().html(P.titulo).css("font-size", "1.6em");
let NuevoArray = mezclarRespuestas(P.correcta, P.incorrectas); //este array tiene las respuestas a imprimir 
console.log(resCorrecta); //para saber la correcta
//imprimir las nuevas respuestas
$('#Respuesta1').first().html(`${NuevoArray[0]}`).css("font-size", "1.6em").attr("name", NuevoArray[0]);
$('#Respuesta2').first().html(`${NuevoArray[1]}`).css("font-size", "1.6em").attr("name", NuevoArray[1]);
$('#Respuesta3').first().html(`${NuevoArray[2]}`).css("font-size", "1.6em").attr("name", NuevoArray[2]);
$('#Respuesta4').first().html(`${NuevoArray[3]}`).css("font-size", "1.6em").attr("name", NuevoArray[3]);
    
}

function validarRespuestas(e) {
  let resCorrecta = preguntas[contadorPreguntas].correcta; //esta es la preguntas
  console.log(resCorrecta);
  //Hay que buscar dentro de los divs la respuesta correcta
  let respMarcada = ($(e.target).text()); //la que se marca
  console.log(respMarcada);
  let divcorrecto = $(`[name="${resCorrecta}"]`);
  //  let divcorrecto=$('#respuestas').find() //Mirar esto
  console.log(divcorrecto);
  console.log(divcorrecto.children('div'));
  console.log(resCorrecta === respMarcada);
  if (resCorrecta === respMarcada) {
    console.log(contadorPreguntas);
    divcorrecto.css("background-color", "#099726");
    contadorPreguntas++; //se suma la preguntas

    console.log(contadorPreguntas);
    $('#dineroDiv').html(`${nombre}:  ${dinero[contadorPreguntas]} €`);
    generarPregunta(contadorPreguntas);
  } else {
    $(e.target).css("background-color", "orange");
    divcorrecto.css("background-color", "#099726");
    finJuego();
    
  }

}

function finJuego(){
/**
 * Hacer el refresh
 */
 setTimeout(function () { location.reload(1); }, 1000);

}