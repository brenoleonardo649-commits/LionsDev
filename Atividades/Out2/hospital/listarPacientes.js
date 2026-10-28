import pacientes from "./pacientes.js"

function listarPacientes(pacientes)
{pacientes.forEach((pacientes) => {
if(pacientes == 0 )
{
    console.log("Nenhum paciente cadastrado.")
}else{
    console.log(`
id:${pacientes.id} 
cpf: ${pacientes.cpf} 
nome: ${pacientes.nome}
idade: ${pacientes.idade}
alergias: ${pacientes.alergias}`);
}});
}
export default listarPacientes