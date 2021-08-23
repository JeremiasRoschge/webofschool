class SO {
    constructor(so, car) {
        this.so = so;
        this.car = car;
    }
about() {
return `El nombre de este sistema operativo es ${this.so} las caracteristicas principales son: 
${this.car}
    `
}
}
function printWin () {
    alert(windows.about())

}

function printLin () { 
    alert(linux.about())
 }

function uwu() {
    let id2 = document.getElementById("input").value;
    if(id2 == "windows" || id2 == "Windows") {
        printWin();
    } else if(id2 == "linux" || id2 == "Linux") {
        printLin();
} else if(id2 != "windows" || id2 != "Windows" || id2 != "linux" || id2 != "Linux") {
    alert("No ingresaste correctamente el nombre del sistema operativo... Nombres correctos: Linux o Windows")
} 
  }

var windows = new SO("Windows", "Sistema operativo dirigido al hogar, con algunas vulernabilidades")
var linux = new SO("Linux", "Sistema operativo dirigdo a equipos de bajos recursos o algunas distribuciones de la misma al hacking.")

