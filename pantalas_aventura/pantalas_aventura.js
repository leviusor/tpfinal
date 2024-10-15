let juego;

function setup() {
  createCanvas(600, 400);
  textSize(20);
  juego = new Juego();
}

function draw() {
  background(200);
  juego.mostrar();
}

function mousePressed() {
  juego.manejarClic(mouseX, mouseY);
}

class Juego {
  constructor() {
    this.misTextos = {
      "pantalla1": "Pantalla 1: Elige tu camino.",
      "pantalla2": "Pantalla 2: Continúa tu aventura.",
      "pantalla3": "Pantalla 3: Estás avanzando.",
      "pantalla4": "Pantalla 4: Aquí solo hay una flecha.",
      "pantalla5": "Pantalla 5: ¿Qué harás a continuación?",
      "pantalla6": "Pantalla 6: Elige tu destino.",
      "pantalla7": "Pantalla 7: Avanza hacia el siguiente paso.",
      "pantalla8": "Pantalla 8: Toma una decisión.",
      "pantalla9": "Pantalla 9: Un paso más cerca.",
      "pantalla10": "Pantalla 10: Solo hay una salida.",
      "pantalla11": "Pantalla 11: Casi llegas.",
      "pantalla12": "Pantalla 12: Escoge sabiamente.",
      "pantalla13": "Pantalla 13: Un último esfuerzo.",
      "pantalla14": "Pantalla 14: Final cercano.",
      "pantalla15": "Pantalla 15: ¡Felicidades, has llegado al final!"
    };
    this.pantallaActiva = "pantalla1";
    this.botones = [];
    this.pantallas = {
      "pantalla1": {
        opciones: ["pantalla2", "pantalla3"],
        posiciones: [{x: 50, y: 200}, {x: 50, y: 250}]
      },
      "pantalla2": {
        opciones: ["pantalla4"],
        posiciones: [{x: 250, y: 300}]
      },
      "pantalla3": {
        opciones: ["pantalla5"],
        posiciones: [{x: 250, y: 300}]
      },
      "pantalla4": {
        opciones: ["pantalla6"],
        posiciones: [{x: 250, y: 300}]
      },
      "pantalla5": {
        opciones: ["pantalla7", "pantalla8"],
        posiciones: [{x: 50, y: 200}, {x: 50, y: 250}]
      },
      "pantalla6": {
        opciones: ["pantalla9"],
        posiciones: [{x: 250, y: 300}]
      },
      "pantalla7": {
        opciones: ["pantalla10"],
        posiciones: [{x: 250, y: 300}]
      },
      "pantalla8": {
        opciones: ["pantalla11"],
        posiciones: [{x: 250, y: 300}]
      },
      "pantalla9": {
        opciones: ["pantalla12", "pantalla13"],
        posiciones: [{x: 50, y: 200}, {x: 50, y: 250}]
      },
      "pantalla10": {
        opciones: ["pantalla14"],
        posiciones: [{x: 250, y: 300}]
      },
      "pantalla11": {
        opciones: ["pantalla15"],
        posiciones: [{x: 250, y: 300}]
      },
      "pantalla12": {
        opciones: ["pantalla15"],
        posiciones: [{x: 250, y: 300}]
      },
      "pantalla13": {
        opciones: ["pantalla15"],
        posiciones: [{x: 250, y: 300}]
      },
      "pantalla14": {
        opciones: ["pantalla15"],
        posiciones: [{x: 250, y: 300}]
      },
      "pantalla15": {
        opciones: ["pantalla1"],
        posiciones: [{x: 250, y: 300}]
      }
    };
    this.crearBotones();
  }

  mostrar() {
    this.mostrarTexto();
    this.mostrarBotones();
  }

  mostrarTexto() {
    fill(0);
    textAlign(CENTER, CENTER);
    text(this.misTextos[this.pantallaActiva], width / 2, 100);
  }

  crearBotones() {
    this.botones = [];
    const pantallaInfo = this.pantallas[this.pantallaActiva];
    const opciones = pantallaInfo.opciones;
    const posiciones = pantallaInfo.posiciones;
    
    for (let i = 0; i < opciones.length; i++) {
      const pos = posiciones[i];
      const texto = opciones.length === 1 ? "→" : `Opción ${i + 1}`;
      const boton = new Boton(pos.x, pos.y, 100, 40, texto, opciones[i]);
      this.botones.push(boton);
    }
  }

  mostrarBotones() {
    for (let boton of this.botones) {
      boton.mostrar();
    }
  }

  manejarClic(x, y) {
    for (let boton of this.botones) {
      if (boton.dentro(x, y)) {
        this.pantallaActiva = boton.destino;
        this.crearBotones();
        break;
      }
    }
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