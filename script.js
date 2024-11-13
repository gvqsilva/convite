document.querySelectorAll('.flip-button').forEach(button => {
    button.addEventListener('click', function() {
        document.getElementById('card').classList.toggle('flipped');
        showConfetti();
    });
});

// Abre o modal quando a imagem é clicada
const modalTriggers = document.querySelectorAll('.modal-trigger');
modalTriggers.forEach(trigger => {
    trigger.addEventListener('click', function () {
        const modalId = this.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        modal.style.display = 'block';
    });
});

// Fecha o modal ao clicar no 'x'
const closeBtns = document.querySelectorAll('.close');
closeBtns.forEach(btn => {
    btn.addEventListener('click', function () {
        const modalId = this.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        modal.style.display = 'none';
    });
});

// Fecha o modal se o usuário clicar fora da janela modal
window.addEventListener('click', function (event) {
    if (event.target.classList.contains('modal')) {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            modal.style.display = 'none';
        });
    }
});
