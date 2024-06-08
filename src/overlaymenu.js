// src/overlayMenu.js
export function toggleOverlayMenu() {
    const overlayMenu = document.getElementById('overlay-menu');
    if (overlayMenu) {
      overlayMenu.classList.toggle('show');
    }
  }
  