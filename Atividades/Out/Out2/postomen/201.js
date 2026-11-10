import express from "express";
let router = express();
let port = 3000;
router.use(express.json());
let tarefas = [{ id: 1, titulo: "Estudar rotas" }];
// GET: lista todos (200)
router.get("/tarefas", (req, res) => {
res.send(tarefas);
});
// POST: 201 (criado) ou 400 (faltou dado)
router.post("/tarefas", (req, res) => {
let titulo = req.body.titulo;
if (!titulo) {
return res.status(400).send({ erro: "Informe o título" });
}
let id = 1;
if (tarefas.length > 0) {
id = tarefas[tarefas.length - 1].id + 1;
}
let tarefa = { id: id, titulo: titulo };
tarefas.push(tarefa);
res.status(201).send(tarefa);
});
// PUT: 200 ou 404
router.put("/tarefas/:id", (req, res) => {
let id = Number(req.params.id);
let indice = tarefas.findIndex((tarefa) => tarefa.id === id);
// Não achou: 404 e o return para a função aqui
if (indice === -1) {
return res.status(404).send({ erro: "Tarefa não encontrada" });
}
tarefas[indice].titulo = req.body.titulo;
res.send(tarefas[indice]);
});
// DELETE: 200 ou 404

router.delete("/tarefas/:id", (req, res) => {
let id = Number(req.params.id);
let indice = tarefas.findIndex((tarefa) => tarefa.id === id);
// Não achou: 404 e o return para a função aqui
if (indice === -1) {
return res.status(404).send({ erro: "Tarefa não encontrada" });
}
tarefas.splice(indice, 1);
res.send({ mensagem: "Tarefa removida" });
});
router.listen(port, () => {
console.log(`Tarefas rodando na porta: ${port}`);
});