
function nomeClientes() {
    const nome = prompt('Olá, Qual o seu nome por Gentileza?');
    return nome
}

function saudarCliente(nome){
    alert(`Olá, ${nome}.`);
}


function horarioDisponivel() {
    const confirmandoHorario = prompt('Pode ser nesse horário? (sim ou nao)');

    switch (confirmandoHorario) {
        case 'sim':
            alert('Vamos iniciar?');
            return true;
        case 'nao':
            alert('Que pena, Venha em um outro dia!');
            return false;
        default:
            alert("Não conseguimos analisar sua Resposta!");
            return false;
    }
}


function corteFinalizado() {
    alert('Terminamos o seu Corte.')
}


function valorDoCorte() {
    const valor = prompt('Seu Corte ficou no Valor de R$ 40 Deposite aqui. ⇩⇩⇩ ')
    const analiseDeValor = parseFloat(valor);

    if(analiseDeValor === 40){
        alert('Pagemento correto no valor de R$ 40.00.');
    }else {
        alert('Ocorreu Algum erro...')
    }
    return analiseDeValor;
}


function pagamentoCliente() {
    const valorRecebido = prompt("Você conseguiu Pagar Corretamente? (sim ou nao): ");
    
    if(valorRecebido === 'sim'){
        return true;
    } else {
        return false;
    }
}


function operacoesDoSalao(){
    const nomeDoCliente = nomeClientes();
    saudarCliente(nomeDoCliente);


    if(horarioDisponivel()) {
        corteFinalizado();

        const valorDoCorteDoCliente = valorDoCorte();

        if(pagamentoCliente(valorDoCorteDoCliente)) {
            alert('Muito Obrigado, Volte Sempre')
        }else{
            alert('Parece que ouve um erro na hora do seu Pagamento, Aguarde.... Iremos Analisar')
        }
    }
}

operacoesDoSalao()