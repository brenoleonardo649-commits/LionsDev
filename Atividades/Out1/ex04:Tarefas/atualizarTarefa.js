function atualizarTarefa(tarefas,id,novoDados)
{
      const indice = tarefas.findIndex((tarefa) => tarefa.id === id)
      if(indice === -1)
      {
        console.log("Erro: Tarefa não encontrado!")
        return false
      }
      tarefas[indice].etiquetas = novoDados||tarefas[indice].etiquetas
      return true
}
export default atualizarTarefa