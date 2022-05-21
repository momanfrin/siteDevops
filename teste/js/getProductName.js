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
            window.produtosLeilao = [];
            response.map((e)=>{
                    let dadosItem = JSON.parse(e.valor);
                    window.produtosLeilao.push(dadosItem);
                    createHTML(e.nome, dadosItem.dataInicio, dadosItem.dataTermino, dadosItem.lanceInicial, dadosItem.lanceMinimo, dadosItem.enderecoImagem);
            });
        })
    })

}
function createHTML(nome, dataInicio, dataTermino, lanceInicial, lanceMinimo, imagem){
    document.getElementById(`arrematadosRow`)
        .insertAdjacentHTML(`afterbegin`,`<div class="col">
        <div class="card h-100 imagem-container">
            <img src="${imagem}" class="card-img-top" alt="...">
          <div class="card-body">

            <h5 class="card-title">${nome}</h5>
            <p class="card-text">Iniciou dia <br> ${dataInicio}<br> <br> Finaliza dia <br> ${dataTermino} </p>
            <h5>Lance inicial: ${lanceInicial}</h5>
            <h5>Lance mínimo: ${lanceMinimo}</h5>
          </div>

          <div class="card-footer">
          <button href="" onclick="postItem('${nome}')" class="btn btn-primary comprar">Dar um lance</button>
          <div class="input-group mb-3 valor-lance-produto">
            <button  class="btn btn-primary comprar" type="button" id="button-addon1">Valor</button>
            <input id="${nome}_valorDoItem" type="text" class="form-control" placeholder="R$" aria-label="Example text with button addon" aria-describedby="button-addon1">
          </div>
        </div>
        </div>
        `);
}