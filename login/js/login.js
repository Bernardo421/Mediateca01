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
