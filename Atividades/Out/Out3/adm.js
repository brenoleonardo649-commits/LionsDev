import express from "express";
let router = express();
let port = 3000;
router.use(express.json());
let usuarios = [];
-
function registrarLog(req, res, next) {
    console.log(`${req.method} - ${req.url}`)
    next()
}

router.use(registrarLog);

router.get("/alunos", (req, res) => {
res.send(alunos);
});
function verificarSenha(req, res, next) {
    if(req.header.usuarios !== "Carlos")
    {
       return res.status(403).send ({ erro: "Somente administradores" })
    }
    next()
}

router.delete("/alunos/:id", (req, res) =>{
    let id = Number(req.params.id)
    let indice = alunos.findIndex((aluno) => aluno.id === id)
    alunos.splice(indice,1)
    res.send("Nota removido")
if(indice === -1) 
{
res.status(401).send({ erro: "Acesso não autorizado" });
}
router.listen(port, () => {
console.log(`Nota rodando na porta: ${port}`);
})
});
router.listen(port, () => 
{
    console.log(`lista de carros ligado a porta ${port}`)
})
