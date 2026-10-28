function listarAlunos(alunos) {
alunos.forEach((aluno) => {
console.log(`${aluno.id} - ${aluno.nome} | ${aluno.curso} | ${aluno.turno}`);
});
}
export default listarAlunos;