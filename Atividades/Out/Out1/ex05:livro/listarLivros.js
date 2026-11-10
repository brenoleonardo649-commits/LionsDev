function listarLivros(livros) {
livros.forEach((livro) => {
console.log(`${livro.id} - ${livro.titulo} (${livro.ano})`);
});
}
export default listarLivros;