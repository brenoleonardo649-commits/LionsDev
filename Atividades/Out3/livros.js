import express from "express";
let router = express();
let port = 3000;
router.use(express.json());
// Middleware de log
function registrarLog(req, res, next) {
    console.log(`${req.method} - ${req.url}`)
    next()
}
// Complete: mostre o método e o caminho no terminal
// e deixe a requisição seguir para a rota
router.use(registrarLog);
let livros = [{ id: 1, titulo: "Dom Casmurro" }];
router.get("/livros", (req, res) => {
res.send(livros);
});
router.post("/livros", (req, res) => {
let id = 1;
if (livros.length > 0) {
id = livros[livros.length - 1].id + 1;
}
let livro = { id: id, titulo: req.body.titulo };
livros.push(livro);
res.status(201).send(livro);
});
router.listen(port, () => {
console.log(`Biblioteca rodando na porta: ${port}`);
});