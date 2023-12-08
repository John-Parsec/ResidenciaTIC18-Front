
function exibeConteudo() {
    var roteiroDiv = this.closest('.roteiros-viagens');
    var destino = roteiroDiv.querySelector('.roteiro-destino').textContent;
    var inclusos = roteiroDiv.querySelector('.roteiro-incluso').textContent;
    var preco = roteiroDiv.querySelector('.roteiro-preco').textContent;
    
    var roteiroObjeto = {
        destino: destino,
        inclusos: inclusos,
        preco: preco
    };
    
    console.log(roteiroObjeto);
    console.log(JSON.stringify(roteiroObjeto, null, 2));
}


var botoes = document.querySelectorAll('.roteiro-comprar');
botoes.forEach(function(botao) {
    botao.addEventListener('click', exibeConteudo);
});