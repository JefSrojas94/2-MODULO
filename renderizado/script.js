const alumnosMali=["Juan","Jose","Sebastian","Jeffry","Ximena","David","Camilo","Mathias","Felipe",];
const alumnoSpan= document.querySelector('#alumno');
let index=0;

setInterval(saludar,1500);

function saludar() {
    alumnoSpan.innerHTML = alumnosMali[index % alumnosMali.length];
    index++;
}
