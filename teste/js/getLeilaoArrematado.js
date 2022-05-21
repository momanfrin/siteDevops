async function getLeiloesArrematados() {
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
            window.produtosLeilao = [];
            response.map((e)=>{
                    let dadosItem = JSON.parse(e.valor);
                    let dataFinal = new Date(Date.parse(dadosItem.dataTermino + 'T00:00:00'))
                    if(dataFinal < new Date() || dadosItem.numeroLance >= 3){
                      createHTML(e.nome, dadosItem.dataInicio, dadosItem.dataTermino, dadosItem.ultimoLance, dadosItem.enderecoImagem);
                    }
            });
        })
    })

}
function createHTML(nome, dataInicio, dataTermino, ultimoLance, imagem){
    document.getElementById(`leilaoArrematadosRow`)
        .insertAdjacentHTML(`afterbegin`,`
        <div class="col">
        <div class="card h-100 imagem-container">
          <img src="${imagem}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${nome}</h5>
            <p class="card-text">Iniciou dia <br> ${dataInicio}<br> <br> Finalizou dia <br> ${dataTermino}</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">Lance final: R$ ${ultimoLance ? ultimoLance : 'sem lance'}</small>
          </div>
        </div>
      </div>
      `);
}