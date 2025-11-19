
document.addEventListener('DOMContentLoaded', () => {

    if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
        alert(" Bem-vindo ao meu Mini Portfólio! Explore a navegação.");
    }
});


console.log(" O script.js foi carregado com sucesso!");


document.addEventListener('DOMContentLoaded', () => {
    const footerText = document.querySelector('footer p');
    if (footerText) {
        footerText.addEventListener('mouseover', () => {
            footerText.style.color = '#007bff';
        });
        footerText.addEventListener('mouseout', () => {
            footerText.style.color = '#666'; 
        });
    }
});