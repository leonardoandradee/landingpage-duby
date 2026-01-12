document.addEventListener("DOMContentLoaded", () => {
  let isScrolling = false;

  function smoothScrollTo(target, duration = 1200) {
    if (isScrolling) return;
    isScrolling = true;

    const start = window.scrollY;
    const headerOffset = 0; // ajuste se tiver header fixo
    const end = target.getBoundingClientRect().top + start - headerOffset;
    const distance = end - start;
    const startTime = performance.now();

    function easeInOut(t) {
      return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
    }

    function animation(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      window.scrollTo(0, start + distance * easeInOut(progress));

      if (progress < 1) {
        requestAnimationFrame(animation);
      } else {
        isScrolling = false;
      }
    }

    requestAnimationFrame(animation);
  }

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault(); // impede scroll nativo imediatamente

      const targetId = link.getAttribute("href");
      if (targetId === "#") return;

      const target = document.querySelector(targetId);
      if (!target) return;

      smoothScrollTo(target, 1400);
    });
  });
});
