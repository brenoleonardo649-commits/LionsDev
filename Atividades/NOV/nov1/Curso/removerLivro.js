import mongoose from "./conexao.js";
import Livro from "./Livro.js";

let id = "6aeb183690281b2159306e7a"

let removido = await Livro.findByIdAndDelete(id)

if(removido === null)
{
    console.log("Produto não encontrado")
}else{
    console.log("Removido:", removido.nome)
}
await mongoose.disconnect();