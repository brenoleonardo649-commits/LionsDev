import livros from "./livros.js";
import listarLivros from "./listarLivros.js";
import atualizarAno from "./atualizarAno.js";
console.log("--- Antes ---");
listarLivros(livros);
atualizarAno(livros, 2, 1890);
console.log("--- Depois ---");
listarLivros(livros);