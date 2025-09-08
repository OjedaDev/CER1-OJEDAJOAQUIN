document.addEventListener("DOMContentLoaded", () => {

  const eventos = [
    { id: "countdownDestacado", fecha: "2025-09-08T15:40:00" },
    { id: "countdownEventoBM", fecha: "2026-11-28T21:30:00" },
    { id: "countdownEventoKV", fecha: "2025-10-11T20:00:00" },
    { id: "countdownEventoCertamen", fecha: "2025-09-08T15:40:00" }
  ];


  eventos.forEach(evento => {
    const contenedor = document.getElementById(evento.id);
    if (!contenedor) return;

    const fechaEvento = new Date(evento.fecha).getTime();

    const intervalo = setInterval(() => {
      const ahora = new Date().getTime();
      const diferencia = fechaEvento - ahora;

      if (diferencia <= 0) {
        clearInterval(intervalo);
        contenedor.textContent = "¡El evento ya comenzó! 🎉";
        return;
      }

      const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
      const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
      const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

      contenedor.textContent = `${dias}D: ${horas}H: ${minutos}M: ${segundos}S`;
    }, 1000);
  });
});


document.addEventListener("DOMContentLoaded", function() {

  iniciarCountdown("countdownDestacado", new Date("Sep 8, 2025 15:40:00").getTime());
  iniciarCountdown("countdownEventoBM", new Date("Nov 28, 2026 21:30:00").getTime());
  iniciarCountdown("countdownEventoKV", new Date("Oct 11, 2025 20:00:00").getTime());
  iniciarCountdown("countdownEventoCertamen", new Date("Sep 8, 2025 15:40:00").getTime());
});



document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form-comentario");
  const comentariosDiv = document.getElementById("comentarios");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); 

    const nombre = document.getElementById("nombre").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (nombre && mensaje) {
      const fecha = new Date().toISOString().replace("T", " ").slice(0, 16).replace("-", "/").replace("-", "/");

      const nuevoComentario = document.createElement("div");
      nuevoComentario.className = "card mb-3";
      nuevoComentario.innerHTML = `
        <div class="card-body">
          <h5 class="card-title">${nombre} [${fecha}]</h5>
          <p class="card-text">${mensaje}</p>
        </div>
      `;

      comentariosDiv.appendChild(nuevoComentario);
      form.reset();
    }
  });
});

