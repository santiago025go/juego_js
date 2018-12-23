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
    this.subnivel = 0;
    this.secuencia = new Array(NIVEL_FINAL).fill(0).map(() => Math.floor(Math.random() * 4));
    this.colores = [verde, azul, rojo, amarillo];
    this.iluminarSecuencia();
  }

  iluminarSecuencia(){
    for(let i = 0; i < this.nivel; i++){
    const color = this.convertirNumeroAColor(this.secuencia[i]);
    setTimeout(() => this.iluminarColor(color), 1000 * i);
  }
  verde.addEventListener("click", this.verificar.bind(this));
  azul.addEventListener("click", this.verificar.bind(this));
  rojo.addEventListener("click", this.verificar.bind(this));
  amarillo.addEventListener("click", this.verificar.bind(this));

}

  convertirNumeroAColor(numero){
    switch (numero) {
      case 0: return verde
      case 1: return azul
      case 2: return rojo
      case 3: return amarillo
    }
  }

  convertirColorANumero(color){
    switch (color) {
      case "verde": return 0
      case "azul": return 1
      case "rojo": return 2
      case "amarillo": return 3
    }
  }

  iluminarColor(color, callback){
    color.classList.add("hide");
    setTimeout(() => this.apagarColor(color), 350);
  }

  apagarColor(color){
    color.classList.remove("hide");
  }

  verificar(evento){
    const col = this.convertirColorANumero(evento.target.id);
      if(col == this.secuencia[this.subnivel]){
        this.iluminarColor(evento.target);
      }
      else{
        alert("has perdido");
        this.removerEventos();
        normalidad();
      }

    }

    removerEventos(){
      verde.removeEventListener("click", this.verificar);
      azul.removeEventListener("click", this.verificar);
      rojo.removeEventListener("click", this.verificar);
      amarillo.removeEventListener("click", this.verificar);
    }


  }



function empezarJuego(){
  boton.classList.add("hide");
  window.juego = new Juego();
}

function normalidad(){
  boton.classList.remove("hide");
}
