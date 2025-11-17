// ==========================================================
// ARQUIVO script.js - 3 FUNCIONALIDADES BÁSICAS
// ==========================================================

// 1. FUNCIONALIDADE 1: ALERTA DE BOAS-VINDAS (Interatividade 1)
document.addEventListener('DOMContentLoaded', () => {
    // Alerta que aparece APENAS na página inicial (index.html)
    if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
        alert("👋 Bem-vindo ao meu Mini Portfólio! Explore a navegação.");
    }
});

// 2. FUNCIONALIDADE 2: LOG DE CONSOLE (Interatividade 2 / Simples)
// Esta interação acontece no fundo (no console do navegador)
console.log("🚀 O script.js foi carregado com sucesso!");


// 3. FUNCIONALIDADE 3: FUNÇÃO DE HOVER (Interatividade 3)
// Adiciona um efeito simples de cor quando o mouse passa sobre o rodapé.
document.addEventListener('DOMContentLoaded', () => {
    const footerText = document.querySelector('footer p');
    if (footerText) {
        footerText.addEventListener('mouseover', () => {
            footerText.style.color = '#007bff';
        });
        footerText.addEventListener('mouseout', () => {
            footerText.style.color = '#666'; // Cor original
        });
    }
});