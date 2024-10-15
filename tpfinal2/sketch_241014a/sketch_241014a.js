let misTextos = {
  "pantalla1": "Texto 1.",
  "pantalla2": "Texto 2",
  "pantalla3": "Texto 3",
  "pantalla4": "Tecto 4",
  "pantalla5": "Texto 5",
  "pantalla6": "Texto 6",
  "pantalla7": "Texto 7",
  "pantalla8": "Texto 8",
  "pantalla9": "Texto 9",
  "pantalla10": "Texto 10",
  "pantalla11": "Texto 11",
  "pantalla12": "Texto 12",
  "pantalla13": "Texto 13",
  "pantalla14": "Final 1.",
  "pantalla15": "Final 2."
};

let pantallaActiva = "pantalla1";
let botones = [];

let pantallas = {
  "pantalla1": ["pantalla2", "pantalla3"],
  "pantalla2": ["pantalla4"],
  "pantalla3": ["pantalla5"],
  "pantalla4": ["pantalla6"],
  "pantalla5": ["pantalla7", "pantalla8"],
  "pantalla6": ["pantalla9"],
  "pantalla7": ["pantalla10"],
  "pantalla8": ["pantalla11"],
  "pantalla9": ["pantalla12", "pantalla13"],
  "pantalla10": ["pantalla14"],
  "pantalla11": ["pantalla15"],
  "pantalla12": ["pantalla15"],
  "pantalla13": ["pantalla15"],
  "pantalla14": ["pantalla1"],
  "pantalla15": ["pantalla1"] 
};

function setup() {
  createCanvas(600, 400);
  textSize(20);
  crearBotones();
}

function draw() {
  background(200);
  text(misTextos[pantallaActiva], 300, 100);
  mostrarBotones();
}

function mousePressed() {
  for (let boton of botones) {
    if (boton.dentro(mouseX, mouseY)) {
      pantallaActiva = boton.destino;
      crearBotones();
    }
  }
}

function crearBotones() {
  botones = [];
  let opciones = pantallas[pantallaActiva];
  
  // Si tiene dos opciones, se crean dos botones
  if (opciones.length === 2) {
    for (let i = 0; i < opciones.length; i++) {
      let boton = new Boton(50, 200 + i * 50, 500, 40, "Opción " + (i + 1), opciones[i]);
      botones.push(boton);
    }
  } 
  // Si solo tiene una opción, muestra la flecha
  else if (opciones.length === 1) {
    let boton = new Boton(250, 300, 100, 40, "→", opciones[0]);
    botones.push(boton);
  }
}

function mostrarBotones() {
  for (let boton of botones) {
    boton.mostrar();
  }
}

class Boton {
  constructor(x, y, w, h, texto, destino) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.texto = texto;
    this.destino = destino;
  }

  mostrar() {
    fill(255);
    rect(this.x, this.y, this.w, this.h);
    fill(0);
    textAlign(CENTER, CENTER);
    text(this.texto, this.x + this.w / 2, this.y + this.h / 2);
  }

  dentro(px, py) {
    return px > this.x && px < this.x + this.w && py > this.y && py < this.y + this.h;
  }
}
