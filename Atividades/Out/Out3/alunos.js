import express from "express";
let router = express();
let port = 3000;
router.use(express.json());
let alunos = [];

function registrarLog(req, res, next) {
    console.log(`${req.method} - ${req.url}`)
    next()
}

router.use(registrarLog);

router.get("/alunos", (req, res) => {
res.send(alunos);
});

router.post("/alunos",(req, res) =>{
    let id = 1
    let nome = req.body.nome
    let idade = req.body.idade
    if(alunos.length > 0)
    {
        id = alunos[alunos.length - 1].id + 1
    }
    let aluno = {id:id, nome:nome, idade:idade}
    alunos.push(aluno)
    res.status(201).send(aluno)
})

router.listen(port, () => {
console.log(`chamada rodando na porta: ${port}`);
});