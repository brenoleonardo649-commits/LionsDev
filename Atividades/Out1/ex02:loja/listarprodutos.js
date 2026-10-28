function listarProdutos(produtos) {
produtos.forEach((produto) => {
console.log(`${produto.id} - ${produto.nome}: R$ ${produto.preco}`);
});
}
export default listarProdutos;