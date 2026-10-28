function listarUsuarios(usuarios) {
usuarios.forEach((usuario) => {
let tipo = "Comum";
if (usuario.admin === true) {
tipo = "Admin";
}
console.log(`${usuario.id} - ${usuario.nome} <${usuario.email}> [${tipo}]`);
});
}
export default listarUsuarios;