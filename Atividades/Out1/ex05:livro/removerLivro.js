function removerLivro(livros, id)
{
    const indice = livros.findIndex((livro) => livro.id === id)

    if(indice === -1)
    {
        console.log("Erro: livro não encontrado")
        return false
    }
    livros.splice(indice,1)
    return true
}

export default removerLivro