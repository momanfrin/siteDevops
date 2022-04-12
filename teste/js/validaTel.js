//valida telefone
function validaTelefone(tel){
    exp = /^\({0,1}\d{2}\){0,1} {0,1}\d{4,5}-{0,1}\d{4}$/gi;
    if(!exp.test(tel.value))
            alert('Numero de Telefone Invalido!');
}