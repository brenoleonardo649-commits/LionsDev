function removerAluno(alunos, id)
{
    const indice = alunos.findIndex((aluno) => aluno.id === id)

    if(indice === -1)
    {
        console.log("Erro: Aluno não Cadastrado")
        return false
    }
    alunos.splice(indice,1)
    return true
}

export default removerAluno