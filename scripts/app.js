
/**
 * 1º importamos los otros archivos js
 */
/**$(document.querySelector('main')).css('overflow', 'hidden'); /** para cuando inicie */
import {crearNavbar} from './navbar.js';
import {preguntas} from './preguntas.js';

/**
 * 1º banner para que introduzca el usuario
 */
let cuerpo = document.querySelector('#Cuerpo_Principal');
console.log(cuerpo);
let boolean=false;//boolean validador del nombre
/**
 * Replace etiqueta Body por fragmento
 */
let fragmento1=$(document.createDocumentFragment());
let cuerpo2=$('<body>').css({
    "background-image":"url('../Media/fondo1.gif')","background-repeat":"no-repeat","background-size":"cover","color":"azure", "width":"100%","height":"100%", "display":"grid"
});
let formulario=$("<form>").append('<label>').append('<span> Escriba su nombre </span>'); //cambiar esto
let usuario=$('<input>').attr('id',"name").attr("type","text").attr('required');
let btn=$('<input>').attr('id',"btn").attr('value','aceptar').on('click',function(){
    if(document.querySelector('#name').value.trim()===''){ //si está vacío
        
    }else{
        
        boolean=true;

        crearNavbar(document.querySelector('#name'));
        crearLayout();
        Jugar();
    }
})
formulario.append((usuario));
cuerpo2.append(formulario,btn);
fragmento1.append(cuerpo2);
console.log(cuerpo2);
console.log(fragmento1);
document.replaceChild(fragmento1,cuerpo);
/**document.querySelector('#visor').append(fragmento1);
document.querySelector('main').style.visibility='hidden';
**/
function Jugar(){
    document.replaceChild(cuerpo,fragmento1);
   /** document.querySelector('#visor').css('visibility','hidden');
    document.querySelector('main').css('visibility','visible'); */
// 1º) verter la información y una function para saber si el target id es el correcto que lo sabemos con el id
console.log(preguntas);
}
// Funciones de comodines //
function publico(){

}
function mitad(){
//1º) query selector a los 
}
function crearLayout(){
    //Para crear el layout de las preguntas 
}