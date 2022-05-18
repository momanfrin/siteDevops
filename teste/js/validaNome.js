function caractereEspecial (letra){
   if (letra.toLowerCase() != letra.toUpperCase() || letra === " "){ //provando que é uma letra ou espaço => se não for letra ou espaço considero como Caractere especial
       return false; // retornar false significa não ser um caractere especial
   }
   else{
       return true;
   } 
}

function validaNome(elementoNome) {
   var nomeCompleto = elementoNome.value.trim();
   var partesNomeCompleto = nomeCompleto.split(''); //O método split() divide uma String em uma lista ordenada de substrings, coloca essas substrings em um array e retorna o array. 

   var contadorLetrasRepetidas = 1
   var nomeTemNumero = false
   var nomeTemCaractereEspecial = false
   nomeCompleto.split('').map(function(letra, i, arr) { //map percorre lista não consigo sair dele com return false
       if ( i > 0 && letra === arr[i-1] && contadorLetrasRepetidas < 3){ 
           contadorLetrasRepetidas++;
       }
       else if (i > 0 && letra != arr[i-1] && contadorLetrasRepetidas < 3) {
           contadorLetrasRepetidas = 1;
       }
       if (isNaN(letra) === false && letra != " "){
           nomeTemNumero = true;
       }
       if (caractereEspecial(letra)){
           nomeTemCaractereEspecial = true;
       }
       }); //retorna no console.log um valor numérico

       console.log(contadorLetrasRepetidas);

   if(nomeCompleto != null && nomeCompleto.length >= 4 && nomeCompleto.indexOf(" ") != -1 && contadorLetrasRepetidas < 3 && nomeTemNumero === false && nomeTemCaractereEspecial === false){
       removeMensagemErroNome(elementoNome); //O método indexOf() retorna o primeiro índice em que o elemento pode ser encontrado no array, retorna -1 caso o mesmo não esteja presente.
   }
   else {
       mensagemErroNome(elementoNome);
       return; //para parar de validar é tipo o breack porém o breack só funciona em looping
   }

   for (var i = 0; i < partesNomeCompleto.length; i++) { // i < partesNomeCompleto.length :
       var nome = partesNomeCompleto[i];
       if (nome != null && nome.length >= 2 && nome[0].toUpperCase() === nome[0]){
           removeMensagemErroNome(elementoNome);
       }
       else {
           mensagemErroNome(elementoNome);
           break;
       }
   }
}

function mensagemErroNome(elementoNome){
   elementoNome.classList.add('is-invalid');
   elementoNome.classList.add('invalid');
   elementoNome.setCustomValidity("Erro");
}

function removeMensagemErroNome(elementoNome){
   elementoNome.classList.remove('is-invalid');
   elementoNome.classList.remove('invalid');
   elementoNome.setCustomValidity("");
}