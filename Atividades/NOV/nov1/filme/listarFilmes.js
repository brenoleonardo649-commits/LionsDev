import mongoose from "./conexao.js";
import Filme from "./Filme.js";
// Complete: busque todos os filmes,
// mostre o total e depois cada filme com um for
let filmes = await Filme.find();
for (let i = 0; i < filmes.length; i++) {
let filme = filmes[i];
console.log(`- ${filme.titulo}, de ${filme.genero} (${filme.duracao})`);
}
await mongoose.disconnect();