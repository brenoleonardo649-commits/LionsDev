function atualizarPacientes(pacientes, id, novoDados)
{
    const indice = pacientes.findIndex((paciente) => paciente.id === id)
    if(indice === -1)
    {
        console.log("Erro: Paciente não encontrado!")
        return false
    }
pacientes[indice].nome = novoDados.nome|| pacientes[indice].nome    
pacientes[indice].idade = novoDados.idade || pacientes[indice].idade;
pacientes[indice].cpf = pacientes[indice].cpf

return true;
}

export default atualizarPacientes