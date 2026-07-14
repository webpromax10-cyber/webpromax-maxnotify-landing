(function () {
  const modal = document.querySelector("#image-modal");
  const modalImage = modal ? modal.querySelector("img") : null;
  const closeButton = modal ? modal.querySelector(".modal-close") : null;

  function openModal(src, alt) {
    if (!modal || !modalImage) return;
    modalImage.src = src;
    modalImage.alt = alt || "Скриншот инструкции";
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    closeButton && closeButton.focus();
  }

  function closeModal() {
    if (!modal || !modalImage) return;
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
    modalImage.src = "";
  }

  document.querySelectorAll("[data-fullscreen]").forEach((button) => {
    button.addEventListener("click", () => {
      const img = button.querySelector("img");
      openModal(button.dataset.fullscreen, img ? img.alt : "");
    });
  });

  closeButton && closeButton.addEventListener("click", closeModal);

  modal &&
    modal.addEventListener("click", (event) => {
      if (event.target === modal) closeModal();
    });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeModal();
  });

  const form = document.querySelector("#request-form");
  const status = document.querySelector("#form-status");

  form &&
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const name = String(data.get("name") || "").trim();
      const contact = String(data.get("contact") || "").trim();
      const site = String(data.get("site") || "").trim();
      const notifications = String(data.get("notifications") || "").trim();
      const comment = String(data.get("comment") || "").trim();

      const message = [
        "Здравствуйте. Хочу подключить модуль Оповещение в MAX.",
        name ? `Имя: ${name}` : "",
        contact ? `Контакт: ${contact}` : "",
        site ? `Сайт: ${site}` : "",
        notifications ? `Уведомления: ${notifications}` : "",
        comment ? `Комментарий: ${comment}` : "",
      ]
        .filter(Boolean)
        .join("\n");

      const url = `https://wa.me/79883885444?text=${encodeURIComponent(message)}`;
      if (status) {
        status.textContent = "Откроем WhatsApp с подготовленным сообщением. Токен сюда вставлять не нужно.";
      }
      window.open(url, "_blank", "noopener");
    });
})();
