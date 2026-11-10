function removerProduto(produtos, id)
{
    const indice = produtos.findIndex((produto) => produto.id === id)

    if(indice === -1)
    {
        console.log("Erro: Produto não encontrado")
        return false
    }
    produtos.splice(indice,1)
    return true
}

export default removerProduto