const form = document.getElementById('form-deposito');
const nomeBeneficiario = document.getElementById('nome-beneficiario');
let formEValido = false;

function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(' ');
    let formEValido = false;
    for (let i = 0; i < nomeComoArray.length; i++) {
        if (nomeComoArray[i].length >=1) {
            formEValido = true;
        } else {
            formEValido = false;
            break;
        }
    }
    return nomeComoArray.length >= 2 && formEValido;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const numeroContaBeneficiario = document.getElementById('numero-conta');
    const valorDeposito = document.getElementById('valor-deposito');
    const mensagemSucesso = `Montante de: <b>${valorDeposito.value}</b> depositado para o cliente: <b>${nomeBeneficiario.value}</b> - conta: <b>${numeroContaBeneficiario.value}</b>`;

    formEValido = validaNome(nomeBeneficiario.value)
    if (formEValido) {
        const containerMensagemSucesso = document.querySelector('.mensagem-sucesso');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.sytle.display = 'block';

        nomeBeneficiario.value = '';
        numeroContaBeneficiario.value = '';
        valorDeposito.value = '';
    } else {
        nomeBeneficiario.style.border = '1px solid red';
        document.querySelector('.mensagem-erro').style.display = 'block';
    }
})


nomeBeneficiario.addEventListener('keyup', function(e) {
    console.log(e.target.value);
    formEValido = validaNome(e.target.value);

    if (!formEValido) { 
        nomeBeneficiario.classList.add('error');
        document.querySelector('.mensagem-erro').style.display = 'block';
    } else {
        nomeBeneficiario.classList.remove('error');
        document.querySelector('.mensagem-erro').style.display = 'none';
    }
})
