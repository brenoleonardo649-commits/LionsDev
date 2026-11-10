function listarTarefas(tarefas) {
tarefas.forEach((tarefa) => {
let status = "[ ]";
if (tarefa.concluida === true) {
status = "[x]";
}
console.log(`${status} ${tarefa.id} - ${tarefa.titulo} (${tarefa.etiquetas.join(", ")})`);
});
}
export default listarTarefas;