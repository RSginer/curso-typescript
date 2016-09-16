var Coche = (function () {
    function Coche() {
        this.velocidad = 0;
    }
    /**
     * getColor
     */
    Coche.prototype.getColor = function () {
        return this.color;
    };
    /**
     * setColor
     */
    Coche.prototype.setColor = function (color) {
        this.color = color;
    };
    Coche.prototype.acelerar = function () {
        this.velocidad++;
    };
    Coche.prototype.frenar = function () {
        this.velocidad--;
    };
    Coche.prototype.getVelocidad = function () {
        return this.velocidad;
    };
    return Coche;
}());
var coche = new Coche();
var cocheDos = new Coche();
var cocheTres = new Coche();
coche.setColor("ROJO");
cocheDos.setColor("AZUL");
cocheTres.setColor("VERDE");
console.log("El color del coche 1 es : " + coche.getColor());
console.log("El color del coche 2 es : " + cocheDos.getColor());
console.log("El color del coche 3 es : " + cocheTres.getColor());
