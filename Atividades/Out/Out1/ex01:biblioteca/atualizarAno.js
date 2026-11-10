function atualizarAno(livros, id, novoAno)
{
    const indice = livros.findIndex((livro) => livro.id === id)
    if(indice === -1)
    {
        console.log("livro não detectado")
        return false
    }
    livros[indice].ano = novoAno|| nome[indice].nome

}

export default atualizarAno