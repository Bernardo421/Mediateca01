const form       = document.getElementById('form-cadastro');
const nascimento = document.getElementById('nascimento');
const senha      = document.getElementById('password');
const confirmar  = document.getElementById('confirmar');
const erro       = document.getElementById('erro');

// Data de nascimento: não aceita datas futuras nem idades abaixo de 5 anos
const hoje = new Date();
const limite = new Date(hoje.getFullYear() - 5, hoje.getMonth(), hoje.getDate());
nascimento.max = limite.toISOString().split('T')[0];
nascimento.min = '1900-01-01';

function validar() {
    // senhas iguais
    confirmar.setCustomValidity(
        senha.value !== confirmar.value ? 'As senhas não coincidem.' : ''
    );

    // idade
    if (nascimento.value && new Date(nascimento.value) > limite) {
        nascimento.setCustomValidity('É preciso ter mais de 5 anos para criar conta.');
    } else {
        nascimento.setCustomValidity('');
    }
}

[senha, confirmar, nascimento].forEach(el => el.addEventListener('input', validar));

form.addEventListener('submit', (e) => {
    validar();
    if (!form.checkValidity()) {
        e.preventDefault();
        const primeiro = form.querySelector(':invalid');
        erro.textContent = primeiro.validationMessage || 'Preencha todos os campos corretamente.';
        primeiro.focus();
    } else {
        erro.textContent = '';
    }
});
