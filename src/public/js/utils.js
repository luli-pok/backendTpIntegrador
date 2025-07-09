const toggleBtn = document.getElementById("modo-toggle");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    // Guardar preferencia en localStorage
    if (document.body.classList.contains("dark")) {
        localStorage.setItem("modo", "oscuro");
    } else {
        localStorage.setItem("modo", "claro");
    }
});

// Al cargar la página, aplicar el modo guardado
window.addEventListener("DOMContentLoaded", () => {
    const modoGuardado = localStorage.getItem("modo");
    if (modoGuardado === "oscuro") {
        document.body.classList.add("dark");
    }
});