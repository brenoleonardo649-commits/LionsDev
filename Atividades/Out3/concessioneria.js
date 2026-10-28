import express from 'express'

const router = express()
const port = 3000

router.use(express.json())

let carros = []

router.get("/carros", (req, res) =>{
    res.send(carros)
})

router.get("/carros/:id", (req, res) =>{
let id = Number(req.params.id)
let indice = carros.findIndex((carro) => carro.id === id)

res.send(carros[indice])
if (!titulo) {
res.status(400).send({ erro: "Informe o título" });
}
if (carros.length > 0) {
id = carros[carros.length - 1].id + 1;
}
let carro = { id: id, modelo: modelo, marca: marca, preco: preco};
carros.push(carro);
res.status(201).send(carro);
});
//---------------------------------------------------------------------------------------------------------------------\\
router.post('/eventos', (req, res) =>{
    let marca = req.body.marca
    let modelo = req.body.modelo
    let preco = req.body.preco
    let id = 1
    if(carros.length > 0)
    {
        id = carros[carros.length - 1].id + 1
    }
    let carro = {id:id, modelo:modelo, marca:marca, preco:preco}
    carros.push(carro)
res.status(201).send(carros);
});
//---------------------------------------------------------------------------------------------------------------------\\
router.put("/carros/:id", (req, res) => {
let id = Number(req.params.id);
let indice = carros.findIndex((carro) => carro.id === id);
carros[indice].local = req.body.local;
if (indice === -1) {
res.status(404).send({ erro: "carro não encontrada" });
}
carros[indice].modelo = req.body.modelo;
res.send(carros[indice]);
});
//---------------------------------------------------------------------------------------------------------------------\\
router.post("/carros", (req, res) => {
let titulo = req.body.titulo;
if (!titulo) {
res.status(400).send({ erro: "Informe o modelo" });
}
let id = 1;
if (carros.length > 0) {
id = carros[carros.length - 1].id + 1;
}
let carro = { id: id, titulo: titulo };
carros.push(carro);
res.status(201).send(carro);
});
//---------------------------------------------------------------------------------------------------------------------\\
router.delete("/carros/:id", (req, res) =>{
    let id = Number(req.params.id)
    let indice = carros.findIndex((carro) => carro.id === id)
    carros.splice(indice,1)
    res.send("carros removido")
if(indice === -1) 
{
res.status(404).send({ erro: "Not Found" });
}
router.listen(port, () => {
console.log(`Tarefas rodando na porta: ${port}`);
});
}),

router.listen(port, () => 
{
    console.log(`lista de carros ligado a porta ${port}`)
})
//---------------------------------------------------------------------------------------------------------------------\\