import mongoose from "./conexao.js";
import Contato from "./Contato.js";
await Contato.create({
nome: "Ana",
telefone: "11 99999-0000",
endereco: { rua: "Rua das Flores", numero: 10, cidade: "São Paulo" },
});
await Contato.create({
nome: "Bruno",
telefone: "21 98888-1111",
endereco: { rua: "Av. Atlântica", numero: 500, cidade: "Rio de Janeiro" },
});
console.log("Contatos cadastrados!");
await mongoose.disconnect();