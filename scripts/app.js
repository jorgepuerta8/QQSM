
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
let contenedor=$('<div>').attr('id','contenedor');
console.log(barra);
let cuerpo=$('#visor');
    console.log(cuerpo);
let boolean=false;//boolean validador del nombre
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
  
   
   
    
/** IMPORTANTE
 * 
 * 

mixer(arr)
 * PARA LAS PREGUNTAS BUSCRA ARRAY QUE DESCOLOQUE Y METR
 * 
*/
console.log(preguntas);
}
function mezclarRespuestas(correcta, incorrectas){
    let  arr = incorrectas.push(correcta);

    let mixer = array => {
        for (let i = 0; i < array.length; i++) {
            let randomized = Math.round(Math.random() * array.length)
            [array[randomized], array[i]] = [array[i], array[randomized]]
        }
        return array; //nos devuelve el array
    }
}
// Funciones de comodines //
function publico(){

}
function mitad(){
//1º) query selector a los 
}
function generarPregunta(){
    P=preguntas[contadorPreguntas]; //esta es la preguntas
    //buscra metodo para que traduzca al español
    $('#pregunta').html(P.titulo);
    let NuevoArray=mezclarRespuestas(P.correcta, P.incorrectas); //este array tiene las respuestas 
   }