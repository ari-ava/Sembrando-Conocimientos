const toggleBtn = document.getElementById("menu-toggle");
const navMobile = document.getElementById("nav-mobile");

toggleBtn.addEventListener("click", () => {
  navMobile.style.display = navMobile.style.display === "flex" ? "none" : "flex";
});

// Botón confeti
document.getElementById("joinBtn").addEventListener("click", () => {
  // 🎉 Explosión principal
  confetti({
    particleCount: 120,
    spread: 80,
    origin: { y: 0.6 }
  });

  // ✨ Chispas laterales
  setTimeout(() => {
    confetti({
      particleCount: 80,
      angle: 60,
      spread: 55,
      origin: { x: 0 }
    });
    confetti({
      particleCount: 80,
      angle: 120,
      spread: 55,
      origin: { x: 1 }
    });
  }, 200);
});

document.querySelectorAll(".leerBtn").forEach(btn => {
  btn.addEventListener("click", () => {
    let extraText = document.createElement("p");
    extraText.classList.add("hidden-text");
    extraText.innerText = "✨ Aquí puedes descubrir más de nuestra historia y sueños a futuro. ¡Pronto añadiremos más sorpresas!";
    btn.parentElement.appendChild(extraText);
    extraText.style.display = "block";
    btn.remove(); // se quita el botón después
  });
});

function revealOnScroll() {
  const reveals = document.querySelectorAll(".timeline-item, .plan-card");
  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

