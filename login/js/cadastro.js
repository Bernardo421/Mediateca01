const nascimento = document.getElementById('nascimento');
const senha      = document.getElementById('password');


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


