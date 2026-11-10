import express from "express";
let router = express();
let port = 3000;
router.use(express.json());
let reservas = [
{id: 1, "nome":"Ana", "Mesa": 4},
{id: 2, "nome":"Bruna", "Mesa": 7},
{id: 3, "nome":"Carla", "Mesa": 2},
];

router.get("/reservas", (req, res) => {
res.send(reservas);
});

router.delete("/reservas/:id", (req, res) => {
let id = Number(req.params.id);
let indice = reservas.findIndex((reservas) => reservas.id === id);
reservas.splice(indice, 1);
res.send({ mensagem: "Reserva cancelada" });
});

router.listen(port, () => {
console.log(`reservas rodando na porta: ${port}`);
});