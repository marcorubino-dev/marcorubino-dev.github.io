(function () {
  "use strict";

  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".main-nav");
  const form = document.querySelector("#inquiry-form");
  const status = document.querySelector("#form-status");
  const year = document.querySelector("[data-current-year]");

  if (year) year.textContent = String(new Date().getFullYear());

  if (menuButton && navigation) {
    menuButton.addEventListener("click", function () {
      const isOpen = navigation.classList.toggle("is-open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
      const label = menuButton.querySelector(".sr-only");
      if (label) {
        const isEnglish = document.documentElement.lang === "en";
        label.textContent = isOpen
          ? (isEnglish ? "Close menu" : "Cerrar menú")
          : (isEnglish ? "Open menu" : "Abrir menú");
      }
    });

    navigation.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navigation.classList.remove("is-open");
        menuButton.setAttribute("aria-expanded", "false");
      });
    });
  }

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      if (status) {
        status.classList.remove("is-error");
        status.textContent = "";
      }

      if (!form.reportValidity()) return;

      const config = window.TT_CONFIG || {};
      const phone = String(config.whatsappNumber || "").replace(/\D/g, "");
      if (!phone) {
        if (status) {
          status.classList.add("is-error");
          status.textContent = document.documentElement.lang === "en"
            ? "The contact channel is not configured yet. Add the WhatsApp number in assets/js/config.js before publishing this inquiry form."
            : "El canal de contacto todavía no está configurado. Antes de publicar el formulario, agregá el número de WhatsApp en assets/js/config.js.";
        }
        return;
      }

      const data = new FormData(form);
      const isEnglish = document.documentElement.lang === "en";
      const labels = isEnglish
        ? { title: "Hello, I'd like to ask about a possible tango experience in Traslasierra.", name: "Name", language: "Preferred language", dates: "Travel dates", location: "Town", interest: "Interest", message: "Additional details" }
        : { title: "Hola, quisiera consultar por una posible experiencia de tango en Traslasierra.", name: "Nombre", language: "Idioma preferido", dates: "Fechas del viaje", location: "Localidad", interest: "Interés", message: "Detalles adicionales" };

      const rows = [labels.title];
      [
        ["name", labels.name],
        ["language", labels.language],
        ["dates", labels.dates],
        ["location", labels.location],
        ["interest", labels.interest],
        ["message", labels.message]
      ].forEach(function (item) {
        const value = String(data.get(item[0]) || "").trim();
        if (value) rows.push(item[1] + ": " + value);
      });

      rows.push("");
      rows.push(isEnglish
        ? "I understand this is an inquiry, not a confirmed booking."
        : "Entiendo que esta es una consulta, no una reserva confirmada.");

      const url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(rows.join("\n"));
      const opened = window.open(url, "_blank");
      if (opened) opened.opener = null;
      if (!opened && status) {
        status.classList.add("is-error");
        status.textContent = isEnglish
          ? "Your browser blocked the WhatsApp window. Allow pop-ups for this page and try again."
          : "El navegador bloqueó la ventana de WhatsApp. Permití las ventanas emergentes para este sitio e intentá nuevamente.";
      } else if (status) {
        status.textContent = isEnglish
          ? "WhatsApp opened with your draft. Review it there and press Send when you're ready."
          : "WhatsApp se abrió con tu mensaje preparado. Revisalo y presioná Enviar cuando quieras.";
      }
    });
  }
})();
