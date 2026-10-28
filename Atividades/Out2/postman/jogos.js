import express from "express";
let router = express();
let port = 3000;
router.use(express.json());
let jogos = [
{ id: 1, nome: "Minecraft", genero: "Aventura" },
{ id: 2, nome: "Fifa", genero: "Esporte" },
{ id: 3, nome: "Tetriz", genero: "Puzzle"},
];

router.get("/jogos", (req, res) => {
res.send(jogos);
});

router.get("/jogos/:id", (req, res) => {
let id = Number(req.params.id);
let indice = jogos.findIndex((item) => item.id === id);
res.send(jogos[indice]);
});
router.listen(port, () => {
console.log(`jogos rodando na porta: ${port}`);
});