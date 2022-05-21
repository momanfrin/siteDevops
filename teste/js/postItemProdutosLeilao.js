async function postItem(nomeItem) {
   let valorLance = document.getElementById(nomeItem+'_valorDoItem').value;
  
  let objeto = window.produtosLeilao.find((e)=>e.nome === nomeItem);
  if( objeto.numeroLance >= 3){
    alert("Leilão já arrematado!")
    return;
  }
  if(objeto.lanceInicial + objeto.lanceMinimo > valorLance || objeto.ultimoLance > valorLance){
    alert("Seu lance precisa ser maior!")
    return;
  }
  objeto.ultimoLance = valorLance;
  objeto.numeroLance = objeto.numeroLance ? objeto.numeroLance + 1 : 1;
  
    let data = {"nome" : nomeItem, "valor": JSON.stringify(objeto)};
    console.log(data);
      
      const response = await fetch(`https://rupyw5lqw8.execute-api.us-east-1.amazonaws.com/post`, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
      
        headers: {
          'Content-Type': 'application/json'
        
        },
      
        body: JSON.stringify(data) // body data type must match "Content-Type" header
      }).then(data => {
          data = data.json().then(data =>{
              console.log(data)
          })
      })
      
    }