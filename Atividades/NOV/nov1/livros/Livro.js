import mongoose from "mongoose";
let livroSchema = new mongoose.Schema({
titulo: { type: String },
autor: { type: String },
ano: { type: Number },
});
// Coleção "livros"
let Livro = mongoose.model("Livro", livroSchema);
export default Livro;