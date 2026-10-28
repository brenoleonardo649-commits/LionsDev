import hospedes from "./hospedes.js"

function removerHospedes(hospedes, quarto)
{
    const indice = hospedes.findIndex(hospede) = (hospede.id === id)

    if(indice === -1)
    {
        console.log("Erro: O quarto NÚMERO está vazio!")
        return false
    }
    hospedes.splice(indice,1)
    return true
}
export default removerHospedes