
/**
 * 1º importamos los otros archivos js
 */
/**$(document.querySelector('main')).css('overflow', 'hidden'); /** para cuando inicie */
import {crearNavbar} from './navbar.js';
import {preguntas} from './preguntas.js';

/**
 * 1º banner para que introduzca el usuario
 */
let cuerpo =$('#visor').css(["width:80%",
   " margin:auto",
    "height:auto",
    "background-color: #1D0177",
    "border-radius: 5em",
    "border: gold 1px solid",
    "color:cornsilk"]);
let boolean=false;//boolean validador del nombre
/**
 * Replace etiqueta Body por fragmento
 */
let fragmento1=$(document.createDocumentFragment());

let formulario=$("<form>").append('<label>').html('Escriba su nombre'); //cambiar esto
let usuario=$('<input>').attr('id',"name").attr("type","text").attr('required');
let btn=$('<input>').attr('id',"btn").attr('value','submit').on('click',function(){
    if(document.querySelector('#name').value.trim()===''){ //si está vacío
        usuario.html("ERROR ESCRIBA SU NOMBRE");
    }else{
        
        boolean=true;

        crearNavbar(document.querySelector('#name'));
       
        Jugar();
    }
})
formulario.append((usuario));
fragmento1.append(formulario,btn);

console.log(cuerpo);
console.log(fragmento1);
cuerpo.append(fragmento1);
/**document.querySelector('#visor').append(fragmento1);
document.querySelector('main').style.visibility='hidden';
**/
function Jugar(){
    document.replaceChild(cuerpo,fragmento1);
   /** document.querySelector('#visor').css('visibility','hidden');
    document.querySelector('main').css('visibility','visible'); */
// verter la información y una function para saber si el target id es el correcto que lo sabemos con el id

/** IMPORTANTE
 * 
 * const arr = [1, 2, 3, 4, 5]

var mixer = array => {
    for (let i = 0; i < array.length; i++) {
        let randomized = Math.round(Math.random() * array.length)
        [array[randomized], array[i]] = [array[i], array[randomized]]
    }
    return array
}

mixer(arr)
 * PARA LAS PREGUNTAS BUSCRA ARRAY QUE DESCOLOQUE Y METR
 * 
*/
console.log(preguntas);
}
// Funciones de comodines //
function publico(){

}
function mitad(){
//1º) query selector a los 
}
