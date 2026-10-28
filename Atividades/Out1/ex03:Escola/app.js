import alunos from "./alunos.js";
import listarAlunos from "./listarAlunos.js";
import atualizarAluno from "./atualizarAluno.js";
// Muda só o turno: nome e curso vêm vazios
atualizarAluno(alunos, 1, { nome: "", curso: "", turno: "Tarde" });
// Muda nome e curso: o turno vem vazio
atualizarAluno(alunos, 2, { nome: "Bruno Lima", curso: "JavaScript", turno: "" });
atualizarAluno(alunos, 5, { nome: "Carla", curso: "", turno: "" });
console.log("--- Alunos ---");
listarAlunos(alunos);