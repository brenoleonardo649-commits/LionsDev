import express from "express";
let router = express();
let port = 3000;
router.use(express.json());
let pets = [
{ id: 1, nome: "Rex" },
{ id: 2, nome: "Mimi" },
];
router.get("/pets", (req, res) => {
res.send(pets);
});
// Middleware de senha
function verificarSenha(req, res, next) {
    if(req.header.senha !== "petshop")
    {
       return res.status(401).send ({erro: "Acesso não autorizado"})
    }
    next()
}
// Complete: se o header "senha" não for "petshop",
// responda 401 com { erro: "Acesso não autorizado" }.
// Se for, deixe a requisição seguir para a rota.
router.delete("/pets/:id", verificarSenha, (req, res) => {
let id = Number(req.params.id);
let indice = pets.findIndex((pet) => pet.id === id);
if (indice === -1) {
return res.status(404).send({ erro: "Pet não encontrado" });
}
pets.splice(indice, 1);
res.send({ mensagem: "Pet removido" });
});
router.listen(port, () => {
console.log(`Pet shop rodando na porta: ${port}`);
});