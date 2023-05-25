//let nombre; ->undefined, un valor no controlado, que no existe
//let nombre=null; no se deja especificado el tipo de variable
let nombre = "";
console.log("El valor de nombre antes del prompt:" + nombre +".");
console.log(`El valor de nombre antes del prompt: ${nombre}`);//mejor y mas profesional, mas optimo
nombre = prompt("ingresa tu nombre")
console.log(`El valor de nombre despues del prompt: ${nombre}`);