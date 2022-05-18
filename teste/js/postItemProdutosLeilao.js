async function postItem() {
    let nomeItem = document.getElementById('valorDoItem').value;
   
    let objeto = {'nome': nomeItem};
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