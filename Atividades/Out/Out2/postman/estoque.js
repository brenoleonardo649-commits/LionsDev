import express from "express";
let router = express();
let port = 3000;
router.use(express.json());
let produtos = [
{id: 1, "nome": "caneta", "quantidade": 20},
{id: 2, "nome": "caderno", "quantidade": 50}
];

router.get("/produtos", (req, res) => {
res.send(produtos);
});

router.put("/produtos/:id", (req, res) => {
let id = Number(req.params.id);
let indice = produtos.findIndex((tarefa) => tarefa.id === id);
produtos[indice].nome = req.body.titulo;
res.send(produtos[indice]);
});

router.get("/produtos/:id", (req, res) => {
let id = Number(req.params.id);
let indice = produtos.findIndex((item) => item.id === id);
res.send(produtos[indice]);
});
router.listen(port, () => {
console.log(`estoque rodando na porta: ${port}`);
});