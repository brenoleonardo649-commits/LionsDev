import express from "express";
let router = express();
let port = 3000;
router.use(express.json());
let cardapio = [
{ id: 1, nome: "Café", preco: 5 },
{ id: 2, nome: "Pão de queijo", preco: 7 },
];
// GET: lista todos
router.get("/cardapio", (req, res) => {
res.send(cardapio);
});
// GET por id: o id vem no caminho como texto
router.get("/cardapio/:id", (req, res) => {
let id = Number(req.params.id);
let indice = cardapio.findIndex((item) => item.id === id);
res.send(cardapio[indice]);
});
router.listen(port, () => {
console.log(`Café rodando na porta: ${port}`);
});