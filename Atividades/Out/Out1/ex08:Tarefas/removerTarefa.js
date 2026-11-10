function removerTarefa(tarefas, id)
{
    const indice = tarefas.findIndex((tarefa) => tarefa.id === id)

    if(indice === -1)
    {
        console.log("Erro: Tarefa não encontrada")
        return false
    }
    tarefas.splice(indice,1)
    return true
}

export default removerTarefa