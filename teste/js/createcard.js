// function aplicada na aba de cadastro de produtos

async function getProduct() {
  let data = {'nome': 'testeNovoItem'};
  const response = await fetch(`https://rupyw5lqw8.execute-api.us-east-1.amazonaws.com/post`, {
      // const response = await fetch(`https://rupyw5lqw8.execute-api.us-east-1.amazonaws.com/post?nome=vaca`, {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
  
    headers: {
      'Content-Type': 'application/json',
      
    },
  
  }).then(data => {
      data = data.json().then(data =>{
          console.log(data)
          let response = data.body;// Items
          response.map((e)=>{
              if(e.nome === 'cabrito'){
                  let dadosItem = JSON.parse(e.valor);
                  // createHTML(e.nome, dadosItem.lanceMinimo);
                  createHTML(e.nome, dadosItem.dataInicio, dadosItem.dataTermino, dadosItem.lanceInicial, dadosItem.lanceMinimo);
              }
          });
      })
  })

}
function createHTML(nome, dataInicio, dataTermino, lanceInicial, lanceMinimo){
  document.getElementById(`arrematadosRow1`)
      .insertAdjacentHTML(`afterbegin`,`<div class="card h-100 imagem-container">
      <img src="../teste/img/ponto.jpg" class="card-img-top" alt="...">
      <div class="card-body">

          <h5 class="card-title">${nome}</h5>
          <p class="card-text">Iniciou dia <br> ${dataInicio}<br> <br> Finaliza dia <br> ${dataTermino} </p>
          <h5>Lance inicial: ${lanceInicial}</h5>
          <h5>Lance mínimo: ${lanceMinimo}</h5>
        </div>

        <div class="card-footer">
         <button onclick=postItem() required class="btn btn-primary comprar"  >Cadastrar item para leilão</button> 
        </div>
      </div>
      `);
}