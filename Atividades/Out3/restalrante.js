import express from "express";
let router = express();
let port = 3000;
router.use(express.json());
let avaliacoes = [];

function registrarLog(req, res, next) {
    console.log(`${req.method} - ${req.url}`)
    next()
}

router.use(registrarLog);

router.get("/avaliacoes", (req, res) => {
res.send(avaliacoes);
});

router.post("/avaliacoes",(req, res) =>{
    let id = 1
    let nome = req.body.nome
    let avaliado = req.body.avaliado
    if(avaliacoes.length > 0)
    {
        id = avaliacoes[avaliacoes.length - 1].id + 1
    }
    let avaliacao = {id:id, nome:nome, avaliado:avaliado}
    avaliacoes.push(avaliacao)
    res.status(201).send(avaliacao)
})

router.listen(port, () => {
console.log(`Avalicações rodando na porta: ${port}`);
});