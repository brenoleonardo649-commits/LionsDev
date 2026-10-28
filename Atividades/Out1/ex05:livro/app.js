import livros from "./livros.js";
import listarLivros from "./listarLivros.js";
import removerLivro from "./removerLivro.js";
console.log("--- Antes ---");
listarLivros(livros);
removerLivro(livros, 1);
console.log("--- Depois ---");
listarLivros(livros);
