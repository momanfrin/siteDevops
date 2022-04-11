function validaDataNascimento (elementoData){
    var dataAtual = new Date(); //new date pega a date data atual (é uma instancia de um objeto) 
    var dataCorte = dataAtual.setFullYear(dataAtual.getFullYear()-18); //O método setFullYear() atribui o ano completo para a data especificada de acordo com o horário universal (UTC). Retorna uma nova data e hora.
    var dataNascimento = new Date(elementoData.value + 'T00:00:00.000-03:00'); 

    if(dataNascimento <= dataCorte){
        removeMensagemErroData(elementoData);
    }
    else {
        mensagemErroData(elementoData);
    }
}

function mensagemErroData(elementoData){
    elementoData.classList.add('is-invalid');
    elementoData.classList.add('invalid');
    elementoData.setCustomValidity("Erro");
}

function removeMensagemErroData(elementoData){
    elementoData.classList.remove('is-invalid');
    elementoData.classList.remove('invalid');
    elementoData.setCustomValidity("");
}