import mongoose from "mongoose";
import Produto from ""

let produtos = await Produto.find()
let posicao = 1

if(posicao >= produtos.length)
{
    console.log("Não existe produto nessa posição")
}else{
    let id = produtos[posicao]

    let produto = await Produto.findById(id)
    console.log("Nome: ", produto.nome)
    console.log("preco: ", produto.preco)
}

await mongoose.disconnect()