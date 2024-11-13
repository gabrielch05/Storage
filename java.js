document.getElementById('login-btn').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'flex';
});

document.getElementById('close-modal').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'none';
});

document.getElementById('form-cadastro').addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const cpf = document.getElementById('cpf').value;
    const senha = document.getElementById('senha').value;

    const usuario = { nome, email, telefone, cpf, senha };
    localStorage.setItem('usuario', JSON.stringify(usuario));

    alert('Seu cadastro foi realizado!');

    document.getElementById('modal').style.display = 'none';

    window.location.href = 'undex.html';
});

window.onload = () => {
    const usuario = JSON.parse(localStorage.getItem('usuario'));

    if (usuario) {
        document.getElementById('perfil-nome').textContent = usuario.nome;
        document.getElementById('perfil-email').textContent = usuario.email;
        document.getElementById('perfil-telefone').textContent = usuario.telefone;
        document.getElementById('perfil-cpf').textContent = usuario.cpf;
    } else {
        window.location.href = 'index.html';
    }
};

function mascaraTelefone(valor) {
    valor = valor.replace(/\D/g, ""); 
    if (valor.length <= 10) {
        valor = valor.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3");
    } else {
        valor = valor.replace(/^(\d{2})(\d{4})(\d{4})$/, "($1) $2-$3");
    }
    return valor;
}

function mascaraCPF(valor) {
    valor = valor.replace(/\D/g, ""); 
    valor = valor.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, "$1.$2.$3-$4");
    return valor;
}

document.getElementById('telefone').addEventListener('input', function() {
    this.value = mascaraTelefone(this.value);
});

document.getElementById('cpf').addEventListener('input', function() {
    this.value = mascaraCPF(this.value);
});
