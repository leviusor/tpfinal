let pantallas = [];
let pantallaActual = 0;

function setup() {
  createCanvas(600, 400);
  textAlign(CENTER, CENTER);
  textSize(16);
  
  // Inicializar las pantallas
  for (let i = 0; i < 20; i++) {
    pantallas.push({
      texto: `Pantalla ${i + 1}`,
      opciones: [
        { texto: "Opción 1", siguiente: (i + 1) % 20 },
        { texto: "Opción 2", siguiente: (i + 2) % 20 }
      ]
    });
  }
}

function draw() {
  background(220);
  
  // Mostrar texto de la pantalla actual
  fill(0);
  text(pantallas[pantallaActual].texto, width / 2, height / 3);
  
  // Mostrar opciones
  for (let i = 0; i < pantallas[pantallaActual].opciones.length; i++) {
    let opcion = pantallas[pantallaActual].opciones[i];
    let y = height / 2 + i * 50;
    
    fill(200);
    rect(width / 4, y, width / 2, 40);
    
    fill(0);
    text(opcion.texto, width / 2, y + 20);
  }
}

function mousePressed() {
  for (let i = 0; i < pantallas[pantallaActual].opciones.length; i++) {
    let opcion = pantallas[pantallaActual].opciones[i];
    let y = height / 2 + i * 50;
    
    if (mouseX > width / 4 && mouseX < width * 3 / 4 && 
        mouseY > y && mouseY < y + 40) {
      pantallaActual = opcion.siguiente;
      break;
    }
  }
}

// Función para cambiar el contenido de una pantalla
function cambiarPantalla(numero, texto, opcion1, siguiente1, opcion2, siguiente2) {
  if (numero >= 0 && numero < 20) {
    pantallas[numero] = {
      texto: texto,
      opciones: [
        { texto: opcion1, siguiente: siguiente1 },
        { texto: opcion2, siguiente: siguiente2 }
      ]
    };
  }
}

// Ejemplo de cómo cambiar el contenido de una pantalla:
// cambiarPantalla(0, "Bienvenido a la aventura", "Ir al bosque", 1, "Ir a la montaña", 2);
