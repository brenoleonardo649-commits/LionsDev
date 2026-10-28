function adicionarHospede(hospedes, novoHospede)
{
for (let i = 0; i < hospedes.length; i++) {
if (hospedes[i].nome === novoHospede.nome) {
console.log(`"Erro: O quarto já está ocupado!"`);
return false;
}
}
if (hospedes.length > 0) {
novoHospede.id = hospedes[hospedes.length - 1].id + 1;
} else {
novoHospede.id = 1;
}
hospedes.push(novoHospede);
return true;
}
export default adicionarHospede