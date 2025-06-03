
const toggleBtn = document.getElementById("modo-toggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    toggleBtn.textContent = "☀️ Modo Claro";
  } else {// Modo Escuro
    toggleBtn.textContent = "🌙 Modo Escuro";
  }
});

// Efeito de animação nos projetos
window.addEventListener("scroll", () => {
  const projetos = document.querySelectorAll('.projeto');
  
  projetos.forEach(projeto => {
    const rect = projeto.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      projeto.classList.add('animate');
    }
  });
});

// Animação no carregamento
window.onload = () => {
  const perfil = document.querySelector('.perfil');
  perfil.classList.add('animate');
};
