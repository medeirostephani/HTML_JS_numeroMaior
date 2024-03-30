const form = document.querySelector('form');

/* CANCELA A AÇÃO PADRÃO DO SUBMIT (REINICIAR) */
form.addEventListener('submit', function(e) {
    e.preventDefault();

/* DECLARANDO AS VARIÁVEIS DE ENTRADA DO INPUT */
    const campoAInput = document.getElementById('campo-A');
    const campoBInput = document.getElementById('campo-B');

/* DEFININDO AS MENSAGENS DE SUCESSO E ERRO */
    const msgSucesso = `Muito bem! O número <b>${campoBInput.value}</b> é maior que o número <b>${campoAInput.value}</b>.`;
    const msgErro = `Tente novamente! O número <b>${campoBInput.value}</b> não é maior que o número <b>${campoAInput.value}</b>.`;

/* CRIANDO AS CONDIÇÕES PARA MAIOR OU MENOR */
    if (campoBInput.value > campoAInput.value) { //SE B É MAIOR QUE A
        const containerSucesso = document.querySelector('.msg-sucesso'); //ATRIBUI CLASSE CSS DE MENSAGEM SUCESSO À CONSTANTE CRIADA
        containerSucesso.innerHTML = msgSucesso; //VINCULA  A MENSAGEM DE SUCESSO DEFINIDA ACIMA À CONSTANTE
        containerSucesso.style.display = 'block'; //APARECER MENSAGEM DE SUCESSO (ALTERAÇÃO NO CSS)
        document.querySelector('.msg-erro').style.display = 'none'; //OCULTAR MENSAGEM DE ERRO (ALTERAÇÃO NO CSS)
        //LIMPA OS CAMPOS
        campoAInput.value = ''
        campoBInput.value = ''
    } else {
        const containerErro = document.querySelector('.msg-erro'); //ATRIBUI CLASSE CSS DE MENSAGEM ERRO À CONSTANTE CRIADA
        containerErro.innerHTML = msgErro; //VINCULA A MENSAGEM DE ERRO DEFINIDA ACIMA À CONSTANTE
        containerErro.style.display = 'block'; //APARECER MENSAGEM DE ERRO (ALTERAÇÃO NO CSS)
        document.querySelector('.msg-sucesso').style.display = 'none'; //OCULTAR MENSAGEM DE SUCESSO (ALTERAÇÃO NO CSS)
        //LIMPA OS CAMPOS
        campoAInput.value = ''
        campoBInput.value = ''
    }
})