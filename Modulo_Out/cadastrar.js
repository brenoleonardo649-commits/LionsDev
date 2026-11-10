import mongoose from "./conexao.js";
import produto from "./produto.js";

let teclado = await produto.create({
    nome: "Teclado",
    categoria: "Periferico",
    preco: 149,
    estoque: 10
})

console.log("Produto salvo: ", teclado)

await produto.create({
    nome: "Mouse",
    categoria: "Periferico",
    preco: 80,
    estoque: 20
})

await produto.create({
    nome: "Monitor",
    categoria: "Monitores",
    preco: 550,
    estoque: 100
})

await mongoose.disconnect