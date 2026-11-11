// Só aceita dígitos no campo do código (também ao colar)
const codigo = document.getElementById('codigo');
codigo.addEventListener('input', () => {
    codigo.value = codigo.value.replace(/\D/g, '').slice(0, 6);
});
