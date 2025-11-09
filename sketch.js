const GOLDEN_ANGLE = 137.508;

const NUM_I = 16; 

const NUM_J = 18; 

let x, y; 

let anguloActual = 0; 

function setup() {

  // Lienzo y configuración inicial

  createCanvas(800, 800); 

  background("#000000"); // Black

  

  // Inicializar posición (ajustada al centro)

  x = width / 2;

  y = height / 2 + 40; 

  

  stroke("#FFA216"); // Color del Girasol

  strokeWeight(1); 

  noFill(); 

  

  // Ejecutar la lógica de los bucles

  for (let i = 0; i < NUM_I; i++) {

    

    let anguloBase = i * GOLDEN_ANGLE;

    

    for (let j = 0; j < NUM_J; j++) {

      

      let radio = 50 * j * 0.2;

      

      // Simulación de rotación acumulada

      let anguloDibujo = anguloBase + (j * 90); 

      

      let rad = radians(anguloDibujo);

      

      // Calcular el nuevo punto (simulando el movimiento de la tortuga)

      let endX = x + radio * cos(rad);

      let endY = y + radio * sin(rad);

      

      // Dibujar la línea

      line(x, y, endX, endY);

      

      // Actualizar la posición para el siguiente segmento

      x = endX;

      y = endY;

    }

    

    // Resetear la posición para el siguiente 'i'

    x = width / 2;

    y = height / 2 + 40; 

  }

  

  noLoop(); // Detener el dibujo

}

function draw() {

  // No se ejecuta

}
