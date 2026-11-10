import mongoose from "mongoose";
let cuesoSchema = new mongoose.Schema({
nome: { type: String },
cargaHoraria: { type: String },
duracao: { type: Number },
});
// Coleção "filmes"
let Filme = mongoose.model("Filme", filmeSchema);
export default Filme;