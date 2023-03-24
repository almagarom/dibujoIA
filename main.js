//Indicamos posiciones aleatorias dentro de variables
x = 0;
y = 0;

//declaramos otras variables que cambiará de acuerdo a la figura
dibujo_circulo = "";
dibujo_rectangulo = "";

//Utilizamos la API para cambiar de voz a texto
var SpeechRecognition = window.webkitSpeechRecognition;

//creamos una nueva API web speech para utilizarla en nuestra appa web y guardarla en una variable
var recognition = new SpeechRecognition();




//para inicializar el reconocimiento de voz, definiremos la funcion como start:

//cuando el boton sea presionado, el sistema empezará a reconocer la voz
function start(){
    //justo cuando se presione el botón, saldrá el texto 
    //"el sistema está escuchando"
    document.getElementById("status").innerHTML = "El sistema está escuchando. Por favor, habla";
    //modificamos la etiqueta status con el texto



    //llamamos a la funcion recognition para inicializar el reconocimiento
    //star es la funcion predeterminada de la API 
    recognition.start();

}

//para ver el resultado
//conversion de voz a texto


//onresult contiene todos los valores de la voz convertida a texto
recognition.onresult = function (event){
    console.log(event);

    //esto nos mostrará la transcripcion en la consola
    //dentro de la seccion results--> 0-->0 --> transcript
    var contenido = event.results[0][0].transcript;



    //evaluaremos el texto que se reciba 
    if (contenido == "circle" || contenido == "Circle"){
        //guardamos numeroa aleatorios en las variables x y
        x = Math.floor(Math.random()*900);
        y = Math.floor(Math.random()*600);
        //mostramos en la etiqueta que se dibujo un circulo
        document.getElementById("status").innerHTML = "Se dibujará un circulo";
        
        
        //para poder ocuparlo en la funcion de draw
        dibujo_circulo = "si";
    } else if (contenido == "rectangle"){
        x = Math.floor(Math.random()*900);
        y = Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML = "Se dibujará un rectángulo";
        



        //innecesario
        dibujo_rectangulo = "si"
    } else {
        document.getElementById("status").innerHTML = "Menciona una figura válida"
    }
}


//agregamos el canvas en la pantalla
function setup (){
    canvas = createCanvas (900, 600);
    
}


//para que se dibujen en la pantalla 
function draw () {
    if (dibujo_circulo == "si"){
        radio = Math.floor(Math.random ()*300);
        fill ("blue");
        circle ( x, y, radio);
        dibujo_circulo = ""
    }else if (dibujo_rectangulo == "si"){
        //para rellenarlo de un color
        fill("red");
        //para cambiar el color de la linea
        stroke("orange");
        rect (x, y, 100, 300);
        dibujo_rectangulo= "";
        
    }
}