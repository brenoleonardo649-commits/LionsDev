import mongoose from "./conexao.js";
import Filme from "./Filme.js";
await Filme.create({ titulo: "Carros", genero: "Animação", duracao: 117 });
await Filme.create({ titulo: "Toy Story", genero: "Animação", duracao: 81 });
await Filme.create({ titulo: "Matrix", genero: "Ficção", duracao: 136 });
console.log("Filmes cadastrados!");
await mongoose.disconnect();