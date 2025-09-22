document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const successMessage = document.getElementById("successMessage");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let isValid = true;

    document.querySelectorAll(".error").forEach(el => el.style.display = "none");
    document.querySelectorAll("input, textarea").forEach(el => {
      el.classList.remove("error-border", "success-border");
    });

    const nombre = document.getElementById("nombre");
    if (nombre.value.trim() === "") {
      mostrarError(nombre, "El nombre es obligatorio");
      isValid = false;
    } else {
      nombre.classList.add("success-border");
    }

    const email = document.getElementById("email");
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() === "") {
      mostrarError(email, "El correo es obligatorio");
      isValid = false;
    } else if (!regexEmail.test(email.value.trim())) {
      mostrarError(email, "El correo no es válido");
      isValid = false;
    } else {
      email.classList.add("success-border");
    }

    const mensaje = document.getElementById("mensaje");
    if (mensaje.value.trim() === "") {
      mostrarError(mensaje, "El mensaje no puede estar vacío");
      isValid = false;
    } else {
      mensaje.classList.add("success-border");
    }

    if (isValid) {
      successMessage.textContent = "✅ ¡Tu mensaje ha sido enviado con éxito!";
      successMessage.style.display = "block";
      form.reset();

      setTimeout(() => {
        document.querySelectorAll("input, textarea").forEach(el => {
          el.classList.remove("success-border");
        });
      }, 1500);
    }
  });

  function mostrarError(input, mensaje) {
    const error = input.nextElementSibling;
    error.textContent = mensaje;
    error.style.display = "block";
    input.classList.add("error-border");
  }
});

