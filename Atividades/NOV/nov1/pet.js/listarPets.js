import mongoose from "./conexao.js";
import Pet from "./Pet.js";
let pet = await Pet.find();
for (let i = 0; i < pets.length; i++) {
let pet = pets[i];
console.log(`- ${pets.nome}, de ${pets.raca} (${pets.idade})`);
}
await mongoose.disconnect();