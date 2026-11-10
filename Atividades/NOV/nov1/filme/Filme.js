import mongoose from "mongoose";
let filmeSchema = new mongoose.Schema({
titulo: { type: String },
genero: { type: String },
duracao: { type: Number },
});
// Coleção "filmes"
let Filme = mongoose.model("Filme", filmeSchema);
export default Filme;