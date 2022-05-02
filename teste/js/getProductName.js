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
                    createHTML(e.nome, dadosItem.lanceMinimo);
                }
            });
        })
    })

}
function createHTML(nome, lanceMinimo){
    document.getElementById(`arrematadosRow`)
        .insertAdjacentHTML(`afterbegin`,`<div class="col">
        <div class="card h-100 imagem-container img">

          <img id="gato" src="../teste/img/gatinho.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${nome}</h5>
            <p class="card-text">Iniciou dia <br> 15/04/2022  15:49:00<br> <br> Finaliza dia <br> ----- </p>
            <h5>Lance inicial: ${lanceMinimo}</h5>
            <h5>Lance final: Adote!</h5>
            <h5>Lance atual: sua consciência!</h5>
          </div>

          <div class="card-footer">
            <a href="" class="btn btn-primary comprar">Dar um lance</a>
            <div class="input-group mb-3 valor-lance-produto">
              <button class="btn btn-primary comprar" type="button" id="button-addon1">Valor</button>
              <input type="text" class="form-control" placeholder="R$" aria-label="Example text with button addon" aria-describedby="button-addon1">
            </div>
          </div>
        </div>
      </div>`);
}