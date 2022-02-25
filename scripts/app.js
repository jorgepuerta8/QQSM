
/**
 * 1º importamos los otros archivos js
 */
/**$(document.querySelector('main')).css('overflow', 'hidden'); /** para cuando inicie */
import {crearNavbar} from './navbar.js';
import {preguntas} from './preguntas.js';

/**
 * 1º banner para que introduzca el usuario
 */
let barra;
let contadorPreguntas =0; //contador de preguntas acertadas que nos servirá como indice en el array de preguntas
let contenedor=$('<div>').attr('id','contenedor');
console.log(barra);
let cuerpo=$('#visor');
    console.log(cuerpo);
let boolean=false;//boolean validador del nombre
let error=false; //boolean de control del array de jugar
/**
 * Replace etiqueta Body por fragmento
 */
let fragmento1=$(document.createDocumentFragment());

let formulario=$('<form>').append('<label>').html('Escriba su nombre').append('<br>');
formulario.css("width","80%").css("margin","auto").css("height","auto").css("background-color","#1D0177").css("border-radius","5em").css("border","gold 1px solid").css("color","cornsilk");
let usuario=$('<input>').attr('id',"name").attr("type","text").attr('required','true').css("width","50%").css("margin","auto");
let btn=$('<input>').attr("type","button").attr('id',"btn").attr('value','submit').on('click',validarUser);
formulario.append(usuario);
fragmento1.append(formulario,btn);
console.log(cuerpo);
console.log(fragmento1);
cuerpo.append(fragmento1);


function validarUser() {
    if(document.querySelector('#name').value.trim()===''){ //si está vacío
        usuario.html("ERROR ESCRIBA SU NOMBRE");
    }else{
        let nombre=document.getElementById('name').value;
     
        boolean=true;
          barra=crearNavbar(nombre);
       cuerpo.replaceWith(contenedor);
       contenedor.append(barra).css("width","100%").css("height","40%").css("display","flex").css("flex-direction","column").css("background-color","#1D0177").css("border-radius","5em").css("border","gold 1px solid").css("color","cornsilk");;
      console.log(barra);
         Jugar();
    }
}

/**document.querySelector('#visor').append(fragmento1);
document.querySelector('main').style.visibility='hidden';
**/
function Jugar(){
    //do{
    $('#PregAcertadas').html(`Preguntas acertadas: ${contadorPreguntas}`);
  generarPregunta(contadorPreguntas);
    $("#Respuesta1, #Respuesta2, #Respuesta3, #Respuesta4").click(validarRespuestas);
   
   //contadorPreguntas++; <--- Al final
 //   }while(error == false); //mientras no falle que se ejecute el bucle
/** IMPORTANTE
 * 
 * 

mixer(arr)
 * PARA LAS PREGUNTAS BUSCRA ARRAY QUE DESCOLOQUE Y METR
 * 
*/

}
function mezclarRespuestas(correcta, incorrectas){
   incorrectas.push(correcta);
    console.log(incorrectas);
    console.log(shuffle(incorrectas));
    return shuffle(incorrectas);
    function shuffle(array) {
        let currentIndex = array.length,  randomIndex;
        
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
function publico(){

}
function mitad(){
//1º) query selector a los 
}
function generarPregunta(contadorPreguntas){
   let P=preguntas[contadorPreguntas]; //esta es la preguntas
   let resCorrecta =P.correcta;
  
    $('#pregunta').first().html(P.titulo).css("font-size","1.6em");
    let NuevoArray=mezclarRespuestas(P.correcta, P.incorrectas); //este array tiene las respuestas a imprimir 
    console.log(resCorrecta); //para saber la correcta
    //imprimir las nuevas respuestas
    $('#Respuesta1').first().html(`A) ${NuevoArray[0]}`).css("font-size","1.6em").attr("name", NuevoArray[0]);
    $('#Respuesta2').first().html(`B) ${NuevoArray[1]}`).css("font-size","1.6em").attr("name", NuevoArray[1]);
    $('#Respuesta3').first().html(`C) ${NuevoArray[2]}`).css("font-size","1.6em").attr("name", NuevoArray[2]);
    $('#Respuesta4').first().html(`D) ${NuevoArray[3]}`).css("font-size","1.6em").attr("name", NuevoArray[3]);
    
}

function validarRespuestas(e){
    let resCorrecta=preguntas[contadorPreguntas].correcta; //esta es la preguntas
    //Hay que buscar dentro de los divs la respuesta correcta
   let respMarcada=($(e.target).text()); //la que se marca
   let divcorrecto=$(`[name="${resCorrecta}"]`);
 //  let divcorrecto=$('#respuestas').find() //Mirar esto
   console.log(divcorrecto);
   console.log(divcorrecto.children('div'));
   if(resCorrecta===respMarcada){
       divcorrecto.css("background-color","#099726");
    contadorPreguntas++; //se suma la preguntas
    $('#dineroDiv').html(`${nombre}:  ${dinero[contadorPreguntas]} €`);
   }else{
    divcorrecto.css("background-color","#099726");
   }
  
}