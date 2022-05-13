// tentei adaptar essa função para a cognito. peguei essa base e lancei lá na valida usuário


async function cognito() {
    // let nomeItem = document.getElementById('nomeDoItem').value;
    // let lanceMinimo = document.getElementById('lanceMinimo').value;
    // let objeto = {'nome': nomeItem, lanceMinimo: lanceMinimo};
    // let data = {"nome" : nomeItem, "valor": JSON.stringify(objeto)};
    // console.log(data);
      
      const response = await fetch(` https://rupyw5lqw8.execute-api.us-east-1.amazonaws.com/cognito`, {
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