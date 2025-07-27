document.addEventListener("DOMContentLoaded", function () {
  const scrollBtn = document.getElementById("scrollTopBtn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  });
});

const frases = [
  "Disparos automáticos via WhatsApp",
  "Reduza a inadimplência com automação",
  "Agilize suas cobranças em poucos cliques",
  "Mensagens personalizadas com nome e valor",
  "Tecnologia para facilitar a recuperação de crédito"
];

let fraseAtual = 0;
const fraseElemento = document.getElementById("frase-rotativa");

function trocarFrase() {
  fraseElemento.style.opacity = 0;

  setTimeout(() => {
    fraseAtual = (fraseAtual + 1) % frases.length;
    fraseElemento.textContent = frases[fraseAtual];
    fraseElemento.style.opacity = 1;
  }, 500);
}

setInterval(trocarFrase, 2000); // Troca a cada 3 segundos
