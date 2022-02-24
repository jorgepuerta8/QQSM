
function crearNavbar(nombre){
    /**
     * Creamos un navbar que tendrá esta disposcicón
     *
     * 
     * Preguntas acertadas                 comodines               nombre y dinero 
     * 
     * 
     * los comodines serán 3 50% o en su defecto uno del publico que generará el gráfico de forma aleatoria entre 4 posibles respuestas
     * 
     * 
     * dinero
     * 100-500-1000-1500-2000-2500-3000-5000-|se puede retirar a partir de aqui, se creará un boton para retirarse|10.000-20.000€-50.000€-80.000€
     */
     let contadorPreguntas=0; //contador de preguntas acertadas
    let nav=document.createDocumentFragment();
    let dinero=[100,500,1000,1500,2000,2500,3000,5000,10000,20000,50000,80000,100000,500000,1000000]; //se colocará el id en función del contador
    let PreguntasAcertadas=$('<div>').attr('id','PregAcertadas').html(`Preguntas acertadas: ${contadorPreguntas}`);
        nav.appendChild(PreguntasAcertadas);
        let Comodin1=$("<button>").attr('id',`comodin1`).css(
            "background-image: url('/Media/50.jpg'), background-repeat: no-repeat, background-size: cover"
        ).attr("class","comodin").attr('disabled','false').on('click',mitad);
        let Comodin2=$("<button>").attr('id',`comodin2`).attr("class","comodin").attr('disabled','false').on('click',mitad);
        let Comodin3=$("<button>").attr('id',`comodin3`).attr("class","comodin").attr('disabled','false').on('click',publico);
        
    let Comodines=$('<div>').attr('id','Comodines').append(Comodin1,Comodin2,Comodin3).css();
    nav.appendChild(Comodines);
    //dinero
    let dineroDiv=$('div').attr('id','dinero').innerHTML(`${nombre}:  ${dinero[contadorPreguntas]} €`).css();
    nav.appendChild(dineroDiv);
    document.querySelector('navbar').appendChild(nav);
}
export{crearNavbar};
