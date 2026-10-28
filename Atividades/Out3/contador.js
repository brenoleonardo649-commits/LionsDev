import express from "express";
let router = express();
let port = 3000;
router.use(express.json());
let acessos = [];
let produtos = [{ id: 1, nome: "Teclado" }]
function registrarLog(req, res, next) {
    console.log(`${req.method} - ${req.url}`)
    next()
}
router.use(registrarLog);

router.get("/acessos", (req, res) => {
res.send(acessos);
});

router.listen(port, () => {
console.log(`contagem rodando na porta: ${port}`);
});