function validaData(){
    var data = document.getElementById("nascimento").value; 
    data = data + 'T00:00:00.000-03:00'; //corrige para nosso fuso horário
    console.log(data);
   
    // comparo as datas e calculo a idade
    
    var hoje = new Date();
    var dataNascimento  = new Date(data);
   console.log(dataNascimento);
    //Para datas entre os anos 1000 e 9999, getFullYear() retorna um número de quatro dígitos, por exemplo, 1995. Use esta função para ter certeza de que o ano é compatível com os anos depois de 2000.

    var diferencaAnos = hoje.getFullYear() - dataNascimento.getFullYear();
    var diferencaMes = hoje.getMonth() - dataNascimento.getMonth();
    if (diferencaMes < 0 || (diferencaMes === 0 && hoje.getDate() < dataNascimento.getDate())) {
      diferencaAnos--;
    }
    if(diferencaAnos < 18){
       alert("Pessoas menores de 18 não podem se cadastrar.");
       return false;
    }
 
    if(diferencaAnos >= 18 && diferencaAnos <= 90){
       alert("Maior de 18, pode se cadastrar.");
       return true;
    } else{
      alert("Pessoas maiores de 90 anos não podem se cadastrar.");
      //return false;
    }
    
 }