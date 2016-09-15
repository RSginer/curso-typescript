function holaMundo(nombre) {
    return "Hola mundo!! Soy " + nombre;
}
var nom = "Rubén";
var etiqueta = document.getElementById("container");
etiqueta.innerHTML = holaMundo(nom);
// variables
var edad = 55;
var programador = true;
var langs = ["PHP", "Javascript", "CSS"];
var a = 7;
var b = 12;
// diferencias let y var
if (a === 7) {
    var a_1 = 4;
    var b = 1;
    console.log("Dentro del if:" + a_1 + " - " + b);
}
console.log("Fuera del if:" + a + " - " + b);
// funciones y tipado
function devuelveNumero(num) {
    return "" + num;
}
alert(devuelveNumero(4));
