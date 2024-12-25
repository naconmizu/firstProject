const a = document.getElementById('headerP1');
const b = document.getElementById('headerP2');
const c = document.getElementById('headerP3');

a.addEventListener('click', () => {
    window.location.href = "/"; // Correção: Atribuir a URL diretamente
});

b.addEventListener('click', () => {
    window.location.href = "https://github.com/naconmizu"; // Correção
});

c.addEventListener('click', () => {
    window.location.href = "https://www.instagram.com/somi1one/"; // Correção
});
