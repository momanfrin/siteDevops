async function postItem() {
  let nomeItem = document.getElementById('nomeDoItem').value;
  let lanceMinimo = document.getElementById('lanceMinimo').value;
  let dataInicio = document.getElementById('dataInicio').value;
  let dataTermino = document.getElementById('dataTermino').value;
  let lanceInicial = document.getElementById('lanceInicial').value;
  

  let objeto = {'nome': nomeItem, dataInicio : dataInicio,  dataTermino: dataTermino, lanceInicial: lanceInicial, lanceMinimo: lanceMinimo};
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