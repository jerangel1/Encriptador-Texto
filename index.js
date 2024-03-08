// Variables globales
let exploding = true;


// Función para mostrar la animación de carga (lottie)
function showLottie() {
  var lottie = document.getElementById("lottie");
  lottie.style.display = "block";
  setTimeout(function () {
    lottie.style.display = "none";
  }, 3000);
}

// Función para mostrar el mensaje de error
function showError() {
  var error = document.getElementById("error");
  var mensaje = document.getElementById("Mensaje");
  var cards = document.querySelectorAll(".card");

  // Ocultar los cards
  cards.forEach((card) => {
    card.style.display = "none";
  });

  // Mostrar el mensaje de error
  error.style.display = "block";
  mensaje.style.display = "block";

  // Aplicar animación ease-in-out al mensaje de error y centrarlo
  mensaje.style.transition = "ease-in-out";
  mensaje.style.position = "absolute";
  mensaje.style.left = "50%";
  mensaje.style.top = "50%";
  mensaje.style.transform = "translate(-50%, -50%)";

  setTimeout(function () {
    error.style.display = "none";
    mensaje.style.display = "none";

    // Mostrar nuevamente los cards
    cards.forEach((card) => {
      card.style.display = "block";
    });
  }, 3000);
}


// Evento al hacer clic en el botón de encriptar
document.getElementById("encryptButton").addEventListener("click", function () {
  var inputText = document.getElementById("inputText");
  if (inputText.value.trim() === "") {
    showError();
    return;
  }
  var encryptedText = btoa(inputText.value);
  showLottie();
  setTimeout(function () {
    document.getElementById("outputText").value = encryptedText;
    inputText.value = "";
  }, 3000);
});

// Evento al hacer clic en el botón de desencriptar
document.getElementById("decryptButton").addEventListener("click", function () {
  var outputText = document.getElementById("outputText");
  if (outputText.value.trim() === "") {
    showError();
    return;
  }
  var decryptedText = atob(outputText.value); // This is a simple base64 decryption
  showLottie();
  setTimeout(function () {
    document.getElementById("inputText").value = decryptedText;
  }, 3000);
});

// Evento al hacer clic en el botón de copiar
document.getElementById("copyButton").addEventListener("click", function () {
  var encryptedText = document.getElementById("outputText").value;
  navigator.clipboard.writeText(encryptedText).then(function () {
    alert("Texto copiado al portapapeles");
  });
});
document.addEventListener("DOMContentLoaded", function() {
  // Función para activar el efecto de confeti
  function activateConfetti() {
    var end = Date.now() + (15 * 1000);
    var colors = ['#bb0000', '#ffffff'];

    (function frame() {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  }

  // Evento al hacer clic en el botón de agradecimiento
  document.getElementById("thankYouButton").addEventListener("click", function () {
    // Activar el efecto de confeti cuando se hace clic en el botón de agradecimiento
    activateConfetti();
  });
});
window.onload = function() {
  setTimeout(function() {
    document.getElementById('thankYouButton').style.display = 'block';
  }, 10000); 
};