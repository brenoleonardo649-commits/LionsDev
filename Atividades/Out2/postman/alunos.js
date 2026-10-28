import express from "express";
let router = express();
let port = 3000;
router.use(express.json());
let alunos = [
{id: 1, "nome": "Ana", "idade": 17 } ,
];

router.get("/alunos", (req, res) => {
res.send(alunos);
});
router.post("/alunos", (req, res) => {
let nome = req.body.nome;
let idade = req.body.idade;
let id = 1;
if (alunos.length > 0) {
id = alunos[alunos.length - 1].id + 1;
}
let Cadastro = { id: id, nome: nome, idade: idade };
alunos.push(Cadastro);
res.send(Cadastro);
});

router.get("/alunos/:id", (req, res) => {
let id = Number(req.params.id);
let indice = alunos.findIndex((item) => item.id === id);
res.send(alunos[indice]);
});
router.listen(port, () => {
console.log(`Cadastro dos alunos rodando na porta: ${port}`);
});