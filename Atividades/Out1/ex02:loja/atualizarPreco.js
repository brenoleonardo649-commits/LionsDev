
function atualizarPreco(produtos,id,novoPreco)
{
      const indice = produtos.findIndex((produto) => produto.id === id)
      if(indice === -1)
      {
        console.log("Erro: produto não encontrado")
        return false
      }
      produtos[indice].preco = novoPreco||produtos[indice].preco
      return true
}
export default atualizarPreco