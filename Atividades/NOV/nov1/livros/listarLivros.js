import mongoose from "./conexao.js";
import Livro from "./Livro.js";
let livros = await Livro.find();
for (let i = 0; i < livros.length; i++) {
// livro: o documento da vez
let livro = livros[i];
console.log(`- ${livro.titulo}, de ${livro.autor} (${livro.ano})`);
}
await mongoose.disconnect();