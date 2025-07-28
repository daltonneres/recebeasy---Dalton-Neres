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
  "Cobrança inteligente, rápida e eficaz",
  "Mensagens com nome, valor e vencimento",
  "Tecnologia que recupera crédito de forma simples",
  "Lembretes e avisos antes do vencimento",
  "Conecte seu CRM e ganhe produtividade",
  "Automatize sua régua de cobrança hoje mesmo",
  "Venda mais com comunicação personalizada",
  "Fale com seus clientes no canal que eles usam"
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

// Mostrar ou ocultar botão de voltar ao topo
window.onscroll = function () {
  const btn = document.getElementById("scrollTopBtn");
  if (window.scrollY > 300) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

// Rolar suavemente até o topo quando o botão for clicado
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("scrollTopBtn");
  if (btn) {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }
});
