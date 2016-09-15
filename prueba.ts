function holaMundo(nombre: string) {
	return "Hola mundo!! Soy " + nombre;
}

var nom: string = "Rubén";
var etiqueta = <HTMLElement>document.getElementById("container");
etiqueta.innerHTML = holaMundo(nom);

// variables
var edad: number = 55;
var programador: boolean = true;
var langs: Array<string> = ["PHP", "Javascript", "CSS"];

var a = 7;
var b = 12;
// diferencias let y var
if (a === 7) {
	let a = 4;
	var b = 1;
	console.log("Dentro del if:" + a + " - " + b);
}
console.log("Fuera del if:" + a + " - " + b);
// funciones y tipado
function devuelveNumero(num:number):string{
	return ""+ num;
}


alert(devuelveNumero(4));