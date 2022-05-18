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


function verificarCPF(c){
    var i;
    s = c;
    var c = s.substr(0,9);
    var dv = s.substr(9,2);
    var d1 = 0;
    var v = false;
 
    for (i = 0; i < 9; i++){
        d1 += c.charAt(i)*(10-i);
    }
    if (d1 == 0){
        alert("CPF Inválido")
        v = true;
        return false;
    }
    d1 = 11 - (d1 % 11);
    if (d1 > 9) d1 = 0;
    if (dv.charAt(0) != d1){
        alert("CPF Inválido")
        v = true;
        return false;
    }
 
    d1 *= 2;
    for (i = 0; i < 9; i++){
        d1 += c.charAt(i)*(11-i);
    }
    d1 = 11 - (d1 % 11);
    if (d1 > 9) d1 = 0;
    if (dv.charAt(1) != d1){
        alert("CPF Inválido")
        v = true;
        return false;
    }
    if (!v) {
   
    }
}



function checaDigitoVerificadorCPF(cpf, multiplicador) {
    let soma = 0
    let contador = 0
    const cpfSemDigitos = cpf.substr(0, multiplicador - 1).split('')
    const digitoVerificador = cpf.charAt(multiplicador - 1)
    for(; multiplicador > 1 ; multiplicador--) {
        soma = soma + cpfSemDigitos[contador] * multiplicador
        contador++
    }

    if(soma % 11 > 9) {
        return digitoVerificador == 0
    }

    return digitoVerificador == 11 - (soma % 11)
}