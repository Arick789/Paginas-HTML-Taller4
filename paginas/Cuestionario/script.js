const contenedor = document.getElementById("test");
const BotonRes = document.getElementById("boton");
const resultadoTest = document.getElementById("resultado");

const preguntas = [
    {
        pregunta: "1. ¿Que auto tiene un motor V10?",
        respuestas: {
            a: "Jeep Gran Cherokee TrackHawk",
            b: "Lamborghini Huracan EVO",
            c: "McLaren Senna"
        },
        respuestaCorrecta: "b"
    }, 
    {
        pregunta: "2. ¿Que camioneta del 2021 tiene mas HP?",
        respuestas: {
            a: "Ford Raptor 2021",
            b: "Chevrolet Silverado 2021",
            c: "Dodge RAM 1500 TRX"
        },
        respuestaCorrecta: "c"
    }, 
    {
        pregunta: "3. ¿Cual es el modelo de Tesla mas economico?",
        respuestas: {
            a: "Model 3",
            b: "Model S",
            c: "Model X"
        },
        respuestaCorrecta: "a"
    }, 
    {
        pregunta: "4. ¿Que hypercar es el mas costoso?",
        respuestas: {
            a: "Bugatti Chiron",
            b: "Koenigsegg ONE",
            c: "Lamborghini Veneno Roadster"
        },
        respuestaCorrecta: "c"
    }
];

function mostrarTest(){
    const preguntasYrespuestas = [];

    preguntas.forEach((preguntaActual, numeroDePregunta) => {
        const respuestas = [];
        for(letraRespuesta in preguntaActual.respuestas){
            respuestas.push(
                `<label>
                    <input type="radio" name="${numeroDePregunta}" value="${letraRespuesta}">
                    ${letraRespuesta} : ${preguntaActual.respuestas[letraRespuesta]}
                </label> `
            );
        }
        preguntasYrespuestas.push(
            `<div class="cuestion"> ${preguntaActual.pregunta} </div>
            <div class="respuestas"> ${respuestas.join('')} </div>
            `
        );
    });

    contenedor.innerHTML = preguntasYrespuestas.join('');
}

mostrarTest();

function mostrarResultado(){
    const respuestas = contenedor.querySelectorAll(".respuestas");
    let respuestasCorrectas = 0;

    preguntas.forEach((preguntaActual, numeroDePregunta) =>{
        const todasLasRespuestas = respuestas[numeroDePregunta];
        const checkboxRespuestas = `input [name='${numeroDePregunta}']:checked`;
        respuestaElegida = (todasLasRespuestas.querySelector(checkboxRespuestas) || {}).value;

        if(respuestaElegida === preguntaActual.respuestaCorrecta){
            respuestasCorrectas++;
        }
    });

    resultadoTest.innerHTML = 'Usted ha acertado '+ respuestasCorrectas + ' preguntas de un total de '+ preguntas.length;
}


BotonRes.addEventListener('click', mostrarResultado);