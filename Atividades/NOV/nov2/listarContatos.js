import mongoose from "./conexao.js";
import Contato from "./Contato.js";
let contatos = await Contato.find();
for (let i = 0; i < contatos.length; i++) {
let contato = contatos[i];
// Os campos do subdocumento são acessados com ponto
let endereco = contato.endereco;
console.log(`${contato.nome} - ${contato.telefone}`);
console.log(` ${endereco.rua}, ${endereco.numero} - ${endereco.cidade}`);
}
await mongoose.disconnect();