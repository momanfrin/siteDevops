//[^...]  -> busca por ocorrências que não sejam as dentro dos colchetes
//a-zà-ú  -> letras com ou sem acentos
//gi      -> busca por toda a string (g) e não diferencia maiúsculas de minúsculas (i)
// || ou e ! é não

function validaNome(nome){

    console.clear();
 
    var nome = document.getElementById('nome').value;
 
    var padrao = /^[A-ZÀ-Ÿ][A-zÀ-ÿ']+\s([A-zÀ-ÿ']\s?)*[A-ZÀ-Ÿ][A-zÀ-ÿ']+$/gi;
    ///^[^\ç][^a-zà-ú]/gi;
 
    var valida_nome = nome.match(padrao);
 
    if( valida_nome || !nome ){
       alert("Nome possui caracteres inválidos ou é vazio")
    }else{
       alert("Nome Ok!")
    }
}