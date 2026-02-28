// Substitua pelo número real de WhatsApp
const WHATSAPP_NUMBER = "5562981257463"; // TODO: coloque seu número aqui

function abrirWhatsApp() {
  const mensagem =
    "Olá! Tenho interesse em criar minha *Ficha Médica Digital* por R$ 250. Pode me dar mais informações?";
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`;
  window.open(url, "_blank");
}

// Scroll reveal
const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add("visible"), i * 80);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 },
);
reveals.forEach((el) => observer.observe(el));
