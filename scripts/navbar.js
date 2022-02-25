
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
    let nav=$(document.createDocumentFragment());
    let dinero=[0,500,1000,1500,2000,2500,3000,5000,10000,20000,50000,80000,100000,500000,1000000]; //se colocará el id en función del contador
    let PreguntasAcertadas=$('<div>').attr('id','PregAcertadas').css("width","20%").css("height","auto").css("margin","auto");
        
    nav.append(PreguntasAcertadas);
        let Comodin1=$("<button>").attr('id',`comodin1`).css("background-image","url('/Media/50.jpg')").css("background-repeat","no-repeat").css("background-size","cover").attr("class","comodin").attr('disabled','false');
        let Comodin2=$("<button>").attr('id',`comodin2`).attr("class","comodin").attr('disabled','false');
        let Comodin3=$("<button>").attr('id',`comodin3`).attr("class","comodin").attr('disabled','false');
        
    let Comodines=$("<div>").attr('id','Comodines').css("width","50%").css("height","auto").css("margin","auto");
    Comodines.append(Comodin1,Comodin2,Comodin3);
    console.log(Comodines);
    nav.append(Comodines);
    //dinero
    let dineroDiv=$('<div>').attr('id','dinero').html(`${nombre}:  ${dinero[contadorPreguntas]} €`).css("width","20%").css("height","auto").css("margin","auto");
    nav.append(dineroDiv);

   return nav;
}


export{crearNavbar};
