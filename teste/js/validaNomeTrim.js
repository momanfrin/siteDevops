function validar(nomeCompleto) {
  var nome = nomeCompleto.value.trim();

  if (nome == "") {
    return false;
  }

  let nomeSplit = nome.split(' ');
  if (nomeSplit.length == 1) {
    return false;
  }

  for (let contador = 0; contador < nomeSplit.length; contador++) {
    if (nomeSplit[contador].length < 2) {
      return false;
    }
  }
  if (nome.length > 50){
    return false;
  }
  return true;
}

function validarNome(nomeCompleto) {
  if (validar(nomeCompleto) == false){
    alert('Digite um nome válido');
  }
}