/**
 * @author Jorge
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
function crearNavbar() {


    let nav = $(document.createDocumentFragment());
    let PreguntasAcertadas = $('<div>').attr('id', 'PregAcertadas').attr("name", "PregAcertadas").css("width", "20%").css("height", "100%").css("margin", "auto");

    nav.append(PreguntasAcertadas);
    let Comodin1 = $("<button>").attr('id', `comodin1`).attr("class", "comodin").append('<img>').css({
        "background-image": "url('/Media/50.jpg')",
        "background-repeat": "no-repeat",
        "background-size": " cover",
        "background-position": " center"
    });
    let Comodin2 = $("<button>").attr('id', `comodin2`).attr("class", "comodin").append('<img>').css({
        "background-image": "url('/Media/50.jpg')",
        "background-repeat": "no-repeat",
        "background-size": " cover",
        "background-position": " center"
    });
    let Comodin3 = $("<button>").attr('id', `comodin3`).attr("class", "comodin").append('<img>').css({
        "background-image": "url('/Media/50.jpg')",
        "background-repeat": "no-repeat",
        "background-size": " cover",
        "background-position": " center"
    });

    let Comodines = $("<div>").attr('id', 'Comodines').css("width", "30%").css("height", "20%").css("margin", "auto");
    Comodines.append(Comodin1, Comodin2, Comodin3);

    nav.append(Comodines);
    //dinero
    let dineroDiv = $('<div>').attr('id', 'dinero').css("width", "20%").css("height", "100%").css("margin", "auto");
    nav.append(dineroDiv);

    return nav;
}


export { crearNavbar };
