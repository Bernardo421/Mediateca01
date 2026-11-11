// ---------- Menu em telemóvel ----------
const menuBtn   = document.getElementById('menuBtn');
const menuLinks = document.getElementById('menuLinks');

menuBtn.addEventListener('click', () => {
    const aberto = menuLinks.classList.toggle('aberto');
    menuBtn.setAttribute('aria-expanded', aberto);
    menuBtn.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
});

// ---------- Filtro por tipo + pesquisa ----------
const formBusca = document.getElementById('formBusca');
const busca     = document.getElementById('busca');
const cartoes   = document.querySelectorAll('#grelha .cartao');
const vazio     = document.getElementById('vazio');
const pilulas   = document.querySelectorAll('button[data-filtro]');
const novidades = document.getElementById('novidades');

let tipoAtivo = 'todos';

// remove acentos e maiúsculas, para "audio" encontrar "Áudio"
function normalizar(texto) {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}

function aplicar() {
    const termo = normalizar(busca.value.trim());
    let visiveis = 0;

    cartoes.forEach(cartao => {
        const dosTipo = tipoAtivo === 'todos' || cartao.dataset.tipo === tipoAtivo;
        const texto = normalizar(`${cartao.dataset.titulo} ${cartao.dataset.autor} ${cartao.dataset.tipo}`);
        const mostrar = dosTipo && texto.includes(termo);

        cartao.hidden = !mostrar;
        if (mostrar) visiveis++;
    });

    vazio.hidden = visiveis > 0;
}

function escolherTipo(tipo) {
    tipoAtivo = tipo;
    pilulas.forEach(p => {
        const ativa = p.dataset.filtro === tipo;
        p.classList.toggle('ativa', ativa);
        p.setAttribute('aria-pressed', ativa);
    });
    aplicar();
}

// botões, links do menu e cartões "Explore por tipo"
document.querySelectorAll('[data-filtro]').forEach(el => {
    el.addEventListener('click', (e) => {
        e.preventDefault();
        escolherTipo(el.dataset.filtro);

        // links/cartões levam à secção das novidades; os botões do topo ficam onde estão
        if (el.tagName === 'A') {
            novidades.scrollIntoView();
            menuLinks.classList.remove('aberto');
            menuBtn.setAttribute('aria-expanded', 'false');
        }
    });
});

busca.addEventListener('input', aplicar);

formBusca.addEventListener('submit', (e) => {
    e.preventDefault();
    aplicar();
    novidades.scrollIntoView();
});

// ---------- Ano no rodapé ----------
document.getElementById('ano').textContent = new Date().getFullYear();
