window.mascaraCpf = function (elemento) {

    let numCpf = elemento.value.replace(/\D/gi, '');
    let numCpfList = numCpf.split('');

    if (numCpf.length >= 4) {
        numCpfList.splice(3, 0, '.');
    }
    if (numCpf.length >= 7) {
        numCpfList.splice(7, 0, '.');
    }
    if (numCpf.length >= 10) {
        numCpfList.splice(11, 0, '-');
    }

    elemento.value = numCpfList.join('');
}

function validacaoCpf(elemento){
    let numCpf = elemento.value.replace(/\D/gi, '');
    let cpfValidado = cpfValido(numCpf);
    console.log(cpfValidado)
}
//continuar a validaocao, precisa de if e else
function cpfValido(strCpf) {
    let Soma;
    let Resto;
    Soma = 0;
    if (strCpf == "00000000000") {
        
        return false;
    }

    for (i = 1; i <= 9; i++) Soma = Soma + parseInt(strCpf.substring(i - 1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))
        Resto = 0;
    if (Resto != parseInt(strCpf.substring(9, 10)))
        return false;

    Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCpf.substring(i - 1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))
        Resto = 0;
    if (Resto != parseInt(strCpf.substring(10, 11)))
        return false;
    return true;
}