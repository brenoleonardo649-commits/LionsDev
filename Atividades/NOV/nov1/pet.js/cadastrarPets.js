import mongoose from "./conexao.js";
import Pet from "./Pet.js";
await Pet.create({ nome: "Rex", raca: "Cachorro", idade: 3});
await Pet.create({ nome: "Mimi", raca: "Gato", idade: 2});
await Pet.create({ nome: "Bob", raca: "Cachorro", idade: 5});
console.log("Filmes cadastrados!");
await mongoose.disconnect();