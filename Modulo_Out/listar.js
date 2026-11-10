import mongoose from "./conexao";
import produto from "./produto";

let produtos = await produto.find()
console.log("Total de produtos: " + produtos.length)

let valotTotal = 0

produtos.forEach((produto) =>{
    let valor = produto.preco * produto.estoque
   console.log(`${produto.nome}: R$ ${produto.preco} | Estoque ${produto.estoque}`)
})

console.log(`Valor total: ${valotTotal}`)
 
await mongoose.disconnect()