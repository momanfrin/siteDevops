function createHTML(nome, dataInicio, dataTermino, lanceInicial, lanceMinimo){
    document.getElementById(`arrematadosRow`)
        .insertAdjacentHTML(`afterbegin`,`<div class="col">
        <div class="card h-100 imagem-container">
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