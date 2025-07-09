const respostasValidas = {
  1: ["cuidado", "proteção", "zelo"],
  2: ["carinho", "atenção"],
  3: ["conexão", "sintonia"],
  4: ["confiança", "entrega", "lealdade"],
  5: ["admiração", "reconhecimento"],
  6: ["segurança", "paz", "refúgio", "porto seguro"],
  7: ["sintonia", "sincronia"]
};

function verificar(fase) {
  const input = document.getElementById(`resposta${fase}`);
  const resposta = input.value.trim().toLowerCase();

  if (respostasValidas[fase].includes(resposta)) {
    document.getElementById(`fase${fase}`).classList.remove("show");
    const proximaFase = document.getElementById(`fase${fase + 1}`);
    
    if (proximaFase) {
      proximaFase.classList.add("show");
      document.getElementById("progressoTexto").innerText = `Etapa ${fase + 1} de 7`;
    } else {
      mostrarCreditos();
    }
  } else {
    alert("Resposta incorreta. Tenta de novo meu bem 💌");
  }
}

function mostrarCreditos() {
  const creditos = document.getElementById("creditos");
  const conteudo = document.querySelector(".creditos-conteudo");

  creditos.style.display = "block";

  // Reiniciar a animação
  conteudo.style.animation = "none";
  void conteudo.offsetWidth;
  conteudo.style.animation = "subirComPausa 140s linear forwards";

  // Scroll
  creditos.scrollIntoView({ behavior: "smooth", block: "start" });

  // Música com fade-in
  const musica = document.getElementById("musicaCredito");
  let volumeAtual = 0;
  const volumeMax = 0.4;
  musica.volume = 0;
  musica.play();

  const fadeIn = setInterval(() => {
    if (volumeAtual < volumeMax) {
      volumeAtual += 0.005;
      musica.volume = volumeAtual;
    } else {
      clearInterval(fadeIn);
    }
  }, 200);
}