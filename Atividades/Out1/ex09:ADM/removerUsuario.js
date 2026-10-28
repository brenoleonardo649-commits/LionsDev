function removerUsuario(Usuários, id)
{
    const indice = Usuários.findIndex((Usuário) => Usuário.id === id)

    if(indice === -1)
    {
        console.log("Erro: Usuário não encontrada")
        return false
    }
    Usuários.splice(indice,1)
    return true
}

export default removerUsuario