function atualizarHospedes(hospedes, id, novoDados)
{
    const indice = hospedes.findIndex((hospede) => hospede.id === id)
    if(indice === -1)
    {
        console.log("Erro: Hospede não encontrado!")
        return false
    }
hospedes[indice].nome = novoDados.nome|| hospedes[indice].nome    
hospedes[indice].idade = novoDados.idade || hospedes[indice].idade;
hospedes[indice].cpf = pacientes[indice].cpf

return true;
}

export default atualizarHospedes