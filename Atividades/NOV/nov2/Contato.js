import mongoose from "mongoose";
let contatoSchema = new mongoose.Schema({
// Complete: nome (String, obrigatório: "O nome é obrigatório")
telefone: { type: String },
// Complete: o subdocumento endereco, com
// rua (String), numero (Number) e
// cidade (String, obrigatória: "A cidade é obrigatória")
});
let Contato = mongoose.model("Contato", contatoSchema);
export default Contato;