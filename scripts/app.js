
/**
 * 1º importamos los otros archivos js
 */
import {crearNavbar} from 'navbar.js';
import {preguntas} from 'navbar.js';
/**
 * 1º banner para que introduzca el usuario
 */

let boolean=false;

let fragmento1=$(document.createDocumentFragment());
let enunciado=$('<label>').innerHTML='escriba su nombre';
let usuario=$('<input>').attr('id',"name").attr("type","text");
let btn=$('<input>').attr('id',"btn").attr(value,'aceptar').addEventListener('click',function(){
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