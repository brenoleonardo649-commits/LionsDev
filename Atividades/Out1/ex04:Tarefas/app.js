import tarefas from "./tarefas.js";
import listarTarefas from "./listarTarefas.js";
import atualizarTarefa from "./atualizarTarefa.js";
console.log("--- Antes ---");
listarTarefas(tarefas);
atualizarTarefa(tarefas, 1, { titulo: "", concluida: true, etiquetas: [] });
atualizarTarefa(tarefas, 2, {
titulo: "Lavar a louça e secar",
concluida: false,
etiquetas: ["casa", "urgente"],
});

console.log("--- Depois ---");
listarTarefas(tarefas);