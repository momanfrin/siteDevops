function mascaraCep(t, mask) {
    var i = t.value.length;
    var saida = mask.substring(1, 0);
    var texto = mask.substring(i)
    if (texto.substring(0, 1) != saida) {
        t.value += texto.substring(0, 1);
    }
}

function limpaFormularioCep() {
    //Limpa valores do formulário de cep.
    document.getElementById('rua').value = ("");
    document.getElementById('bairro').value = ("");
    document.getElementById('cidade').value = ("");
    document.getElementById('estado').value = ("");
}

function meuCallback(conteudo) {
    if (!("erro" in conteudo)) {
        //Atualiza os campos com os valores.
        document.getElementById('rua').value = (conteudo.logradouro);
        document.getElementById('bairro').value = (conteudo.bairro);
        document.getElementById('cidade').value = (conteudo.localidade);
        document.getElementById('estado').value = (conteudo.uf);
    } //end if.
    else {
        //CEP não Encontrado.
        limpaFormularioCep();
        mensagemErroCep();
    }
}

function pesquisacep(valor) {
    
    var cep = valor.replace("-","").trim(); //replace:substitui, aqui está substituindo - por ""
    
//Regex 1
    if (cep != "") { //Verifica se campo cep é diferente de valor vazio
//Regex 2     
        if (cep.length === 8 && isNaN(cep) === false) { //Valida o formato do CEP.
            
            removeMensagemErroCep();
            
            //Preenche os campos com "..." enquanto consulta webservice.
            document.getElementById('rua').value = "...";
            document.getElementById('bairro').value = "...";
            document.getElementById('cidade').value = "...";
            document.getElementById('estado').value = "...";

        const options = {
            method: 'GET',
            mode: 'cors', //protocolo de proteção do servidor para não ter chamada fora dele a não ser se autorizado
            // Cross Domain: permite configurar outros domínios que serão considerados com a mesma origem que o seu dominio principal
            cache: 'default'
        }

        fetch(`https://viacep.com.br/ws/${cep}/json/`, options) // fetch: consulta uma URL remota
        .then(response =>{response.json() //.then: faz algo se der certo //promisse encadeada
            .then( data => meuCallback(data))
        })
        .catch(function(erro){
            mensagemErroCep();
        
        })
        } //end if.
        else { 
            //cep é inválido.
            limpaFormularioCep();
            mensagemErroCep();
            
        }
    } //end if.
    else {
        //cep sem valor, limpa formulário.
        limpaFormulárioCep();
    }
};

function mensagemErroCep(){
    var elementoCep = document.getElementById('cep')
    elementoCep.classList.add('is-invalid');
    elementoCep.classList.add('invalid');
    elementoCep.setCustomValidity("Erro");
}

function removeMensagemErroCep(){
    var elementoCep = document.getElementById('cep')
    elementoCep.classList.remove('is-invalid');
    elementoCep.classList.remove('invalid');
    elementoCep.setCustomValidity("");
}


//Regex 1 ://Nova variável "cep" somente com dígitos. replace: O método replace() retorna uma nova string com algumas ou todas as correspondências de um padrão substituídas por um determinado caractere (ou caracteres).
    //var cep = valor.replace('/\D/g', ''); // /:Declara o início de uma regex
                                        // \D: identifica tudo que não é número
                                        // /:declara o final
                                        // g: global, analisa todas as ocorrencias da regex na string.
                                        // ' ': é como se estivesse dizendo para substituir o traço (-)
                                        // do cep por vazio. 
                                        // ('/\D/g', '') ===  'isso é um texto'.replace("é", "nâo é")

//Regex 2        //Expressão regular para validar o CEP.
       // var validacep = /^[0-9]{8}$/; //verifica se tem 8 números em sequencia
