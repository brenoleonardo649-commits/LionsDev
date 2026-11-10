import mongoose from "mongoose";
let petSchema = new mongoose.Schema({
nome: { type: String },
raca: { type: String },
idade: { type: Number },
});
let Pet = mongoose.model("Pet", petSchema);
export default Pet;