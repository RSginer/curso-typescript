class Programa {
    public nombre: string;
    public version: number;

    setNombre(nombre: string) {
        this.nombre = nombre;
    }

    setVersion(version: number) {
        this.version = version;
    }

    getNombre(): string {
        return this.nombre;
    }

    getVersion(): number {
        return this.version;
    }


}

class EditorVideo extends Programa {
    public timeline: number;

    setTimeline(timeline: number) {
        this.timeline = timeline;
    }

    getTimeline() {
        return this.timeline;
    }

    getAllData(): string {
        return this.getNombre() + " - " + this.getVersion() + " - " + this.getTimeline();
    }
}

var editor = new EditorVideo();

editor.setVersion(1);
editor.setNombre("Camtasia studio");
editor.setTimeline(4000);
console.log(editor.getAllData());

// Logica del formulario

var programas:Array<Programa> = [];

function guardar(){
    var nombre = (<HTMLInputElement> document.getElementById("nombre")).value.toString();
    var programa = new Programa();
    programa.setNombre(nombre);
    programas.push(programa);

    var list = "";

    for(var i = 0; i< programas.length;i++){
        list = list + "<li>"+ programas[i].getNombre() + "</li>";
    }

    var listado = <HTMLElement> document.getElementById("listado");
    listado.innerHTML = list;
    (<HTMLInputElement> document.getElementById("nombre")).value = "";
}
