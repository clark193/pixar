document.addEventListener("DOMContentLoaded", () => {

  const video = document.getElementById("heroVideo");
  const soundBtn = document.getElementById("soundToggle");

  if (video && soundBtn) {
    soundBtn.addEventListener("click", () => {
      if (video.muted) {
        video.muted = false;
        soundBtn.textContent = "🔇 Desativar som";
      } else {
        video.muted = true;
        soundBtn.textContent = "🔊 Ativar som";
      }
    });
  }

});
