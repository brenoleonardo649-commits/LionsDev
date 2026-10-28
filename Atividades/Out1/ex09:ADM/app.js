import usuarios from "./usuarios.js";
import listarUsuarios from "./listarUsuarios.js";
import removerUsuario from "./removerUsuario.js";
// 1. Administrador não pode ser removido
removerUsuario(usuarios, "ana@email.com");
// 2. E-mail que não existe
removerUsuario(usuarios, "diego@email.com");

// 3. Usuário comum
let removeu = removerUsuario(usuarios, "bruno@email.com");
if (removeu === true) {
console.log("Usuário removido!");
}
console.log("--- Usuários ---");
listarUsuarios(usuarios);