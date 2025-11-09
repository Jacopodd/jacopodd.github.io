// === Selettore lingua (placeholder) ===
const langSelect = document.getElementById("language-selector");
if (langSelect) {
  langSelect.addEventListener("change", () => {
    const lang = langSelect.value;
    if (lang === "en") {
      alert("English version coming soon!");
      // Qui in futuro: carica le traduzioni da un JSON e sostituisci i testi.
    }
  });
}

// === Tab Progetti (Università / Personale) ===
const tabButtons = document.querySelectorAll(".tab-btn");
const panels = document.querySelectorAll(".tab-panel");

tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const targetId = btn.dataset.target;

    // Aggiorna stato visuale pulsanti
    tabButtons.forEach(b => {
      b.classList.remove("active");
      b.setAttribute("aria-selected", "false");
    });
    btn.classList.add("active");
    btn.setAttribute("aria-selected", "true");

    // Mostra il pannello target, nasconde gli altri
    panels.forEach(panel => {
      if (panel.id === targetId) {
        panel.hidden = false;
        panel.classList.add("show");
      } else {
        panel.hidden = true;
        panel.classList.remove("show");
      }
    });
  });
});

// Imposta default: Università visibile (già nel markup), ma forzo per sicurezza
document.getElementById("tab-universita")?.click();
document.getElementById("tab-personali")?.classList.remove("active");
document.getElementById("tab-universita")?.classList.add("active");
