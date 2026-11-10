function listarTarefas(tarefas) {
tarefas.forEach((tarefa) => {
let status = "[ ]";
if (tarefa.concluida === true) {
status = "[x]";
}
const etiquetas = tarefa.etiquetas.join(", ");
console.log(`${status} ${tarefa.id} - ${tarefa.titulo} (${etiquetas})`);
});
}
export default listarTarefas;