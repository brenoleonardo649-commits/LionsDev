import express from "express";
let router = express();
let port = 3000;
router.use(express.json());
let tarefas = [{ id: 1, titulo: "Estudar rotas" }];
// GET: lista todos
router.get("/tarefas", (req, res) => {
res.send(tarefas);
});
// POST: os dados chegam no corpo (req.body)
router.post("/tarefas", (req, res) => {
let titulo = req.body.titulo;
// ID sequencial: 1 se a lista estiver vazia, senão último + 1
let id = 1;
if (tarefas.length > 0) {
id = tarefas[tarefas.length - 1].id + 1;
}
let tarefa = { id: id, titulo: titulo };
tarefas.push(tarefa);
res.send(tarefa);
});
// PUT: id no caminho + dado novo no corpo
router.put("/tarefas/:id", (req, res) => {
let id = Number(req.params.id);
let indice = tarefas.findIndex((tarefa) => tarefa.id === id);
tarefas[indice].titulo = req.body.titulo;
res.send(tarefas[indice]);
});
// DELETE: só o id no caminho
router.delete("/tarefas/:id", (req, res) => {
let id = Number(req.params.id);
let indice = tarefas.findIndex((tarefa) => tarefa.id === id);
tarefas.splice(indice, 1);

res.send({ mensagem: "Tarefa removida" });
});
router.listen(port, () => {
console.log(`Tarefas rodando na porta: ${port}`);
});