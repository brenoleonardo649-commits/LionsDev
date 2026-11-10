import express from 'express'

const router =express()
const port = 3000

router.use(express.json())
let turmas = []
function registrarlog(req, res, next)
{
    console.log(`${req.method} - ${req.url}`)
    next()
}
router.use(registrarlog)

//========== Get ========

router.get("/turmas", (req, res)=>{
    res.status(200).send(turmas)
})
function validarturma(req, res, next){
    if(!req.body.nome || !req.body.sala){
        return res.status(200).send({ mensagem: " informe: nome da sala" })
    }
    next()
}
//========== Post ========

router.post("/turmas", validarturma, (req, res) =>{
    let id = 1
    let nome = req.body.nome
    let sala = req.body.sala
    if(turmas.length > 0)
    {
        id = turmas[turmas.length - 1].id + 1
    }
    let turma ={id:id, nome:nome, sala:sala}
    turmas.push(turma)
    res.status(201).send(turma)
})

//========== Put ========

router.put("/turmas/:id", (req, res) => {
let id = Number(req.params.id);
let indice = turmas.findIndex((turma) => turma.id === id);
turmas[indice].local = req.body.local;
if (indice === -1) {
res.status(404).send({ erro: "turma não encontrada" });
}
turmas[indice].nome = req.body.nome;
res.send(turmas[indice]);
});

//========== DELETE ========

function verificarSenha(req, res, next){
    if(req.headers.senha !== "lions123")
    {
       return res.status(401).send ({erro: "Autorização Negada"})
    }
    next()
}

router.delete("/turmas/:id", verificarSenha, (req, res) => {
    let id = Number(req.params.id)
    let indice = turmas.findIndex((turma) => turma.id === id)
     if(indice === -1)
     {
       return res.status(404).send({erro:"turma não encontrado"})
     }
    turmas.splice(indice, 1)
    res.send({mensagem: "turma removida"})
})

router.listen(port, ()=>{
       console.log(`escola Rodando em ${port}`)
})