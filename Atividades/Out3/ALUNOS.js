
import express from 'express'

const router =express()
const port = 3000

router.use(express.json())
let alunos = []
function registrarlog(req, res, next)
{
    console.log(`${req.method} - ${req.url}`)
    next()
}
router.use(registrarlog)

//========== Get ========

router.get("/alunos", (req, res)=>{
    res.status(200).send(alunos)
})

router.get("/alunos/:id", (req, res) => {
let id = Number(req.params.id);
let indice = alunos.findIndex((aluno) => aluno.id === id);
if(indice === -1)
{
    return res.status(404).send({erro: "Aluno não encontrado"})
}
res.send(alunos[indice]);
});

function validarturma(req, res, next){
    if(!req.body.nome || !req.body.idade){
        return res.status(404).send({ mensagem: "informe o nome do aluno" })
    }
    next()
}
//========== Post ========

router.post("/alunos", validarturma, (req, res) =>{
    let id = 1
    let nome = req.body.nome
    let idade = req.body.idade
    if(alunos.length > 0)
    {
        id = alunos[alunos.length - 1].id + 1
    }
    let aluno ={id:id, nome:nome, idade:idade}
    alunos.push(aluno)
    res.status(201).send(aluno)
})

//========== Put ========

router.put("/alunos/:id", (req, res) => {
let id = Number(req.params.id);
let indice = alunos.findIndex((aluno) => aluno.id === id);
if (indice === -1) {
res.status(404).send({ erro: "aluno não encontrado" });
}
alunos[indice].nome = req.body.nome;
res.send(alunos[indice]);
});

router.listen(port, ()=>{
       console.log(`cadastros Rodando em ${port}`)
})