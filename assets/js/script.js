// Este es el archivo JavaScript
let element = document.getElementById('miElemento'); // Asegúrate de tener un elemento con este id en tu HTML
let start = null;
let position = 0;

function animate(timestamp) {
  if (!start) {
    start = timestamp;
  }
  const elapsed = timestamp - start; // Tiempo transcurrido

  // Cambia la posición del elemento (por ejemplo, 1 píxel por cada 16ms que pasa, aproximadamente)
  position += 1; // 1 píxel por cuadro

  // Asegúrate de que el elemento existe
  if (element) {
    element.style.transform = `translateX(${position}px)`;
  }


  // Limita la duración de la animación (ejemplo: 5 segundos)
  if (elapsed < 5000) {
    requestAnimationFrame(animate); // Llama a la función de nuevo en el siguiente frame
  }
}

// Iniciar la animación
requestAnimationFrame(animate);