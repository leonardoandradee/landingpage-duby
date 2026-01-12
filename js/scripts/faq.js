const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    const isOpen = faq.classList.contains("active");

    // Fecha todos
    faqs.forEach((item) => item.classList.remove("active"));

    // Abre o clicado (se não estiver aberto)
    if (!isOpen) {
      faq.classList.add("active");
    }
  });
});
