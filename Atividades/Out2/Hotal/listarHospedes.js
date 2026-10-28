function listarHospedes(hospedes)
{paciente.forEach((hospedes) => {
if(hospedes == 0 )
{
    console.log("Nenhum hóspede no hotel.")
}else{
    console.log(`
id:${hospedes.id} - 
cpf: ${hospedes.quato} 
nome: ${hospedes.nome}
idade: ${hospedes.diaria}
alergias: ${hospedes.servicos}`);
}});
}
export default listarHospedes