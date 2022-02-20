
/**
 * 1º importamos los otros archivos js
 */
$(document.querySelector('main')).css('overflow', 'hidden'); /** para cuando inicie */
import {crearNavbar} from './navbar.js';
import {preguntas} from './preguntas.js';
console.log(preguntas);
/**
 * 1º banner para que introduzca el usuario
 */

let boolean=false;

let fragmento1=$(document.createDocumentFragment());
$(fragmento1).css({
    "background-image":"url('../Media/fondo1.gif')","background-repeat":"no-repeat","background-size":"cover","color":"azure",
})
let enunciado=$('<label>').innerHTML='escriba su nombre';
let usuario=$('<input>').attr('id',"name").attr("type","text");
let btn=$('<input>').attr('id',"btn").attr('value','aceptar').addEventListener('click',function(){
    if(document.querySelector('#name').value.trim()===''){ //si está vacío
        
    }else{
        
        boolean=true;

        crearNavbar(document.querySelector('#name'));
        crearLayout();
        Jugar();
    }
})
enunciado.appendChild(usuario);
fragmento1.append(enunciado,btn);
document.querySelector('#visor').appendChild(fragmento1);
function Jugar(){
    document.querySelector('#visor').css('overflow','hidden');
    document.querySelector('main').css('overflow','visible');
// 1º) verter la información y una function para saber si el target id es el correcto que lo sabemos con el id
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