const verde = document.getElementById("verde");
const azul = document.getElementById("azul");
const rojo = document.getElementById("rojo");
const amarillo = document.getElementById("amarillo");
const boton = document.getElementById("boton");
boton.addEventListener("click", empezarJuego);
const NIVEL_FINAL = 10;

class Juego{
  constructor(){
    this.nivel = 1;
    this.secuencia = new Array(NIVEL_FINAL).fill(0).map(() => Math.floor(Math.random() * 4));
    this.colores = [verde, azul, rojo, amarillo];
    this.iluminarSecuencia();
  }

  iluminarSecuencia(){
    for(let i = 0; i < this.nivel; i++){
    const color = this.convertirNumeroAColor(this.secuencia[i]);
    setTimeout(() => this.iluminarColor(color), 1000 * i);
  }
}

  convertirNumeroAColor(numero){
    switch (numero) {
      case 0: return verde
      case 1: return azul
      case 2: return rojo
      case 3: return amarillo
    }
  }

  iluminarColor(color){
    color.classList.add("hide");
    setTimeout(() => this.apagarColor(color), 350);
  }

  apagarColor(color){
    color.classList.remove("hide");
  }


}

function empezarJuego(){
  boton.style.display = "none";
  window.juego = new Juego();
}
