window.mascaraTelefone = function (elemento) {

    let numTel = elemento.value.replace(/\D/gi, '');
    let numTelList = numTel.split('');

    console.log(numTelList);

    if (numTel.length >= 1) {
        numTelList.splice(0, 0, '(');
    }
    if (numTel.length >= 3) {
        numTelList.splice(3, 0, ')');
        numTelList.splice(4, 0, ' ');
    }

    if (numTel.length >= 8) {
        if (numTel.length === 10) {
            numTelList.splice(9, 0, '-');
        }
        else {
            numTelList.splice(10, 0, '-');
        }
    }
    elemento.value = numTelList.join("");
}

window.validacaoTelefone = function (elemento) {

    let numTel = elemento.value.replace(/\D/gi, '');

    let tamanhoTel = numTel.length;

    if (tamanhoTel === 11 || tamanhoTel === 10 || tamanhoTel === 0) {
        //aqui o telefone está correto
        elemento.classList.remove('is-invalid');
        elemento.classList.remove('invalid');
        elemento.setCustomValidity("");
    }
    else {
        elemento.classList.add('is-invalid');
        elemento.classList.add('invalid');
        elemento.setCustomValidity("Erro");
    }
}



  //janela.onkeyup (que está no html, no input da area do telefone) = funcao (meu elemento da tela que nesse caso é o input do telefone){

  //window.mascaraTelefone = function (elemento) {

  //declaracao de varivel no javascript nome da variavel que vai armazenar o numero de telefone = elemento.
  //recupera o que foi digitado pelo usuario. funcao que acha um texto na string e substitui por algo que vc escolher
  //regExp (regular expression = expressao regular)(/\tudo que nao for numeros/global insensitive=nao destingue maiusculas e minusculas,
  //, valor a substituir= no caso aqui é nada)

  //let numTel = elemento.value.replace(/\D/gi, '');

  // if (numTel.length < 10){
  //   alert ('número inválido');
  //   return;
  // }

  // funcao split = transforma a string numTel em uma lista
  //["1", "1", "3", "2", "3", "4", "5", "6", "7", "8", "9"] 
  // estou atribuindo o valor em numTelList

  //let numTelList = numTel.split('');

  //console.log = é igual a print em python (recebe esse parametro)

  //console.log(numTelList);

  //splice = pode usar tanto para remover algo da lista como adicionar em um indice especifico
  // (primeiro numero é referente ao indice na lista, segundo numero no caso aqui é 0 para nao remover nada da lista
  // no caso se colocar algum numero removeria tudo ate o numero que vc indicar, 'essa ultima parte é o que vc ira adicionar')

  //numTelList.splice(0, 0, '(');
  //numTelList.splice(3, 0, ')');
  //numTelList.splice(4, 0, ' ');

  // length = te retorna quantos caracteres tem em sua lista ou string

  //if (numTel.length === 10) {
  //numTelList.splice(9, 0, '-');
  //}
  //else {
  //numTelList.splice(10, 0, '-');
  //}

  // join = transforma sua lista em string para vc nao ter que fazer um loop concatenando os resultados
  // essa linha abaixo serve para pegar o que o usuario digita (elemento.value) = e trocar pela uma string resultante do seu join

  //elemento.value = numTelList.join("");
  // }


// //valida telefone
// function validaTelefone(tel){
//     exp = /^\({0,1}\d{2}\){0,1} {0,1}\d{4,5}-{0,1}\d{4}$/gi;
//     if(!exp.test(tel.value))
//             alert('Numero de Telefone Invalido!');
// }

