const alumnosMali=["Juan","Jose","Sebastian","Jeffry","Ximena","David","Camilo","Mathias","Felipe",];
const alumnoSpan= document.querySelector('#alumnos');
let index=0;

setInterval(saludar,1500);

function saludar() {
    alumnoSpan.innerHTML = alumnosMali[index % alumnosMali.length];
    index++;
}

function saludar() {
    alert("Hola Mundo")
}