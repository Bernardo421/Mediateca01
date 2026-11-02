   const botoes = document.querySelectorAll('.midia');
        const cenas = document.querySelectorAll('.cena');

        botoes.forEach(botao => {
            botao.addEventListener('click', () => {
                const alvo = botao.dataset.midia;

                botoes.forEach(b => {
                    const ativo = b === botao;
                    b.classList.toggle('ativa', ativo);
                    b.setAttribute('aria-pressed', ativo);
                });

                cenas.forEach(c => {
                    c.classList.toggle('visivel', c.dataset.midia === alvo);
                });
            });
        });
const video = document.querySelector('.estante[data-midia="video"]');
const botao = video.querySelector('.botao-play');

function alternar() {
    const tocando = video.classList.toggle('tocando');
    botao.setAttribute('aria-pressed', tocando);
    botao.setAttribute('aria-label', tocando ? 'Pausar' : 'Reproduzir');
}

botao.addEventListener('click', alternar);
botao.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        alternar();
    }
});