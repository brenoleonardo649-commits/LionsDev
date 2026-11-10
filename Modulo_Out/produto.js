import mongoose from "mongoose";

let produtoSchema = mongoose.Schema({
    nome: {type: String},
    categoria: {type: String},
    preco: {type: Number}
})

const produto = mongoose.model("Produto", produtoSchema)

export default produto