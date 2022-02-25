
function crearNavbar(){
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
     let PreguntasAcertadas=$('<div>').attr('id','PregAcertadas').css("width","20%").css("height","100%").css("margin","auto");
        
    nav.append(PreguntasAcertadas);
        let Comodin1=$("<div>").attr("type", "button").attr('id',`comodin1`).attr("class","comodin").attr('disabled','false').append('<img>').css({
            "background-image":"url('/Media/50.jpg')",
            "background-repeat":"no-repeat",
            "background-size":" cover",
            "background-position":" center"
        });
        let Comodin2=$("<div>").attr("type", "button").attr('id',`comodin2`).attr("class","comodin").attr('disabled','false').append('<img>').css({
            "background-image":"url('/Media/50.jpg')",
            "background-repeat":"no-repeat",
            "background-size":" cover",
            "background-position":" center"});
        let Comodin3=$("<div>").attr("type", "button").attr('id',`comodin3`).attr("class","comodin").attr('disabled','false').append('<img>').css({
            "background-image":"url('/Media/50.jpg')",
            "background-repeat":"no-repeat",
            "background-size":" cover",
            "background-position":" center"});
        
    let Comodines=$("<div>").attr('id','Comodines').css("width","30%").css("height","100%").css("margin","auto").css("display","inline");
    Comodines.append(Comodin1,Comodin2,Comodin3);
    console.log(Comodines);
    nav.append(Comodines);
    //dinero
    let dineroDiv=$('<div>').attr('id','dinero').css("width","20%").css("height","100%").css("margin","auto");
    nav.append(dineroDiv);

   return nav;
}


export{crearNavbar};
