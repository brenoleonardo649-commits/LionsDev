import express from 'express'

const router = express()
const port = 3000

router.use(express.json())

let eventos = []

router.get("/eventos", (req, res) =>{
    res.send(eventos)
})

router.get("/eventos/:id", (req, res) =>{
let id = Number(req.params.id)
let indice = eventos.findIndex((evento) => evento.id === id)

res.send(eventos[indice])
if (!titulo) {
res.status(400).send({ erro: "Informe o título" });
}
if (eventos.length > 0) {
id = eventos[eventos.length - 1].id + 1;
}
let evento = { id: id, titulo: titulo };
eventos.push(evento);
res.status(201).send(evento);
});
//------------------------------------------------------------------------------------------
router.post('/eventos', (req, res) =>{
    let nome = req.body.nome
    let local = req.body.local
    let vagas = req.body.vagas
    let id = 1
    if(eventos.length > 0)
    {
        id = eventos[eventos.length - 1].id + 1
    }
    let evento = {id:id, nome:nome, local:local, vagas:vagas}
    eventos.push(evento)
res.status(201).send(eventos);
});
//------------------------------------------------------------------------------------------
router.put("/eventos/:id", (req, res) => {
let id = Number(req.params.id);
let indice = eventos.findIndex((evento) => evento.id === id);
eventos[indice].local = req.body.local;
if (indice === -1) {
res.status(404).send({ erro: "Evento não encontrada" });
}
eventos[indice].nome = req.body.nome;
res.send(eventos[indice]);
});
//------------------------------------------------------------------------------------------
router.post("/evento", (req, res) => {
let titulo = req.body.titulo;
if (!titulo) {
res.status(400).send({ erro: "Informe o título" });
}
let id = 1;
if (eventos.length > 0) {
id = eventos[eventos.length - 1].id + 1;
}
let evento = { id: id, titulo: titulo };
eventos.push(evento);
res.status(201).send(evento);
});
//------------------------------------------------------------------------------------------
router.delete("/eventos/:id", (req, res) =>{
    let id = Number(req.params.id)
    let indice = eventos.findIndex((evento) => evento.id === id)
    eventos.splice(indice,1)
    res.send("eventos removido")
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
    console.log(`lista de eventos ligado a porta ${port}`)
})