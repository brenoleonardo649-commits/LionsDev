import mongoose from "./conexao.js";
import Livro from "./Livro.js";
let livros = await Livro.find();
for (let i = 0; i < livros.length; i++) {
let livro = livros[i];
// Posição e _id: servem para buscar e remover
console.log(`[${i}] ${livro._id}`);
console.log(` ${livro.titulo}, de ${livro.autor} (${livro.ano})`);
}
await mongoose.disconnect();