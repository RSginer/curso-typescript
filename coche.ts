interface CocheBase{
    getColor():string;
    getVelocidad():number;
}

class Coche implements CocheBase{
    public color: string;
    public modelo: string;
    public velocidad: number;

    constructor(){
        this.color = "Blanco";
        this.velocidad = 0;
        this.modelo = "BMW Serie 1";
    }
    /**
     * getColor
     */
    public getColor():string {
        return this.color;
    }

    /**
     * setColor
     */
    public setColor(color:string) {
        this.color = color;
    }

    public acelerar(){
        this.velocidad++;
    }

    public frenar(){
        this.velocidad--;
    }

    public getVelocidad():number{
        return this.velocidad;
    }
}

var coche = new Coche();
var cocheDos = new Coche();
var cocheTres = new Coche();

coche.setColor("ROJO");
cocheDos.setColor("AZUL");
cocheTres.setColor("VERDE")
console.log("El color del coche 1 es : " + coche.getColor());
console.log("El color del coche 2 es : " + cocheDos.getColor());
console.log("El color del coche 3 es : " + cocheTres.getColor());