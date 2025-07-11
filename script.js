document.addEventListener("DOMContentLoaded", function () {

        const cards = document.querySelectorAll('.card');

        // Opção para a animação de fade-in ao rolar a página
        const observerOptions = {
                root: null, // usa o viewport como a área de observação
                rootMargin: '0px',
                threshold: 0.1 // o gatilho é ativado quando 10% do elemento está visível
        };

        const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                        // Se o elemento (card) está visível na tela
                        if (entry.isIntersecting) {
                                entry.target.classList.add('visible');
                                // Para a observação do elemento após a animação para não repetir
                                observer.unobserve(entry.target);
                        }
                });
        }, observerOptions);

        // Adiciona o observador a cada card
        cards.forEach(card => {
                observer.observe(card);
        });

});
