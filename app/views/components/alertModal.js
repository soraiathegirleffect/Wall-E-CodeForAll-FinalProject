export function renderAlertModal(title, message, timeout = 2000) {
  const modalHtml = `
      <div id="alert-modal" class="modal">
        <div class="modal-content">
          <span class="close-button" id="close-alert-modal">&times;</span>
          <h2>${title}</h2>
          <p>${message}</p>
        </div>
      </div>
    `;
  document.body.insertAdjacentHTML("beforeend", modalHtml);

  const modal = document.getElementById("alert-modal");
  modal.style.display = "block";

  function closeModal() {
    modal.style.opacity = "0";
    setTimeout(() => modal.remove(), 200); // Wait for the fade-out transition to complete
  }

  document
    .getElementById("close-alert-modal")
    .addEventListener("click", closeModal);

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      closeModal();
    }
  });

  setTimeout(closeModal, timeout); // Automatically close the modal after the specified timeout
}
