const joinBtn = document.getElementById("joinBtn");
const confettiContainer = document.getElementById("confetti-container");

joinBtn.addEventListener("click", () => {
  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");

    // Colores aleatorios
    const colors = ["#FF9800", "#FF5722", "#FFC107", "#4CAF50", "#2196F3", "#9C27B0"];
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

    // Posición inicial aleatoria
    confetti.style.left = Math.random() * 100 + "vw";

    // Tamaños aleatorios
    confetti.style.width = Math.random() * 8 + 6 + "px";
    confetti.style.height = Math.random() * 12 + 8 + "px";

    // Duración aleatoria
    confetti.style.animationDuration = (Math.random() * 2 + 2) + "s";

    confettiContainer.appendChild(confetti);

    // Remover confeti después de animarse
    setTimeout(() => {
      confetti.remove();
    }, 4000);
  }
});
