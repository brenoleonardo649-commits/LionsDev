import mongoose from "./conexao.js";
import Contato from "./Contato.js";
// Sem nome e com endereço sem cidade
await Contato.create({
telefone: "31 97777-2222",
endereco: { rua: "Rua A", numero: 5 },
});
console.log("Contato cadastrado!");
await mongoose.disconnect();