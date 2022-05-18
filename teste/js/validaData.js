const dataNascimento = document.querySelector('#nascimento')
console.log(dataNascimento)
dataNascimento.addEventListener('blur', (evento) =>{
    validaDataNascimento(evento.target)
}) 

function validaData(){
    var data = document.getElementById("nascimento").value; 
    data = data + 'T00:00:00.000-03:00'; //corrige para nosso fuso horário
    console.log(data);

     // comparo as datas e calculo a idade
    
     
     var dataNascimento  = new Date(data);
    console.log(dataNascimento);
}  

function validaDataNascimento(input) {
    const dataRecebida = new Date(input.value)
    let mensagem =''
    

    if(!maiorQue18(dataRecebida)) {
      //   mensagem = 'Autorizamos o cadastro apenas com 18 anos ou mais.'
       
        input.classList.add('is-invalid')

    }else{
        input.classList.remove('is-invalid')
        input.classList.add('is-valid')

    }
    input.setCustomValidity(mensagem)
    input.reportValidity();
}

function maiorQue18(data) {
    const dataAtual = new Date()
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate())

    return dataMais18 <= dataAtual
}




// function validaDataNascimento (elementoData){
//    var dataAtual = new Date(); //new date pega a date data atual (é uma instancia de um objeto) 
//    var dataCorte = dataAtual.setFullYear(dataAtual.getFullYear()-18); //O método setFullYear() atribui o ano completo para a data especificada de acordo com o horário universal (UTC). Retorna uma nova data e hora.
//    var dataNascimento = new Date(elementoData.value + 'T00:00:00.000-03:00'); 

//    if(dataNascimento <= dataCorte){
//        removeMensagemErroData(elementoData);
//    }
//    else {
//        mensagemErroData(elementoData);
//    }
// }

// function mensagemErroData(elementoData){
//    elementoData.classList.add('is-invalid');
//    elementoData.classList.add('invalid');
//    elementoData.setCustomValidity("Erro");
// }

// function removeMensagemErroData(elementoData){
//    elementoData.classList.remove('is-invalid');
//    elementoData.classList.remove('invalid');
//    elementoData.setCustomValidity("");
// }




// function validaData(){
//     var data = document.getElementById("nascimento").value; 
//     data = data + 'T00:00:00.000-03:00'; //corrige para nosso fuso horário
//     console.log(data);
   
//     // comparo as datas e calculo a idade
    
//     var hoje = new Date();
//     var dataNascimento  = new Date(data);
//    console.log(dataNascimento);
//     //Para datas entre os anos 1000 e 9999, getFullYear() retorna um número de quatro dígitos, por exemplo, 1995. Use esta função para ter certeza de que o ano é compatível com os anos depois de 2000.

//     var diferencaAnos = hoje.getFullYear() - dataNascimento.getFullYear();
//     var diferencaMes = hoje.getMonth() - dataNascimento.getMonth();
//     if (diferencaMes < 0 || (diferencaMes === 0 && hoje.getDate() < dataNascimento.getDate())) {
//       diferencaAnos--;
//     }
//     if(diferencaAnos < 18){
//        alert("Pessoas menores de 18 não podem se cadastrar.");
//        return false;
//     }
 
//     if(diferencaAnos >= 18 && diferencaAnos <= 90){
//        alert("Maior de 18, pode se cadastrar.");
//        return true;
//     } else{
//       alert("Pessoas maiores de 90 anos não podem se cadastrar.");
//       //return false;
//     }
    
//  }