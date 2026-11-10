import relatorioPaciente from "./relatorioPacientes.js";
import pacientes from "./pacientes.js";
import adicionarPaciente from "./adicionarPacientes.js";
import listarPacientes from "./listarPacientes.js";
import removerPacientes from "./removerPaciente.js";
import atualizarPacientes from "./atualizarPacientes.js";
import PromptSync from "prompt-sync";
const prompt = PromptSync()
let escolha
do{
    console.log("===== CLÍNICA LIONSMED =====")
console.log("1 - Cadastrar paciente")
console.log("2 - Listar pacientes")
console.log("3 - Atualizar paciente")
console.log("4 - Remover paciente")
console.log("5 - Relatório")
console.log("0 - Sair")
 escolha = prompt("Escolha uma opção")
 switch (escolha)
{
    case"1":
    let nome = prompt("Nome: ")
    let idade = Number(prompt("idade: "))
    let cpf = prompt("CPF: ")
    let alergias = prompt("Alergias: ")
     const cadastro = adicionarPaciente(pacientes, { cpf, nome, idade, alergias})
    break
    case"2":
    listarPacientes(pacientes)
    break
    case"3":
    const id = Number(prompt("ID do Paciente: "));
    const novoDados = {
        id:"",
        cpf:"",
        nome: prompt("Novo nome (Enter para manter): "),
        idade: prompt("Nova idade (Enter para manter): "),
        alergias: prompt("Outra alergia? (sim/não)"),
        if(novoDados = sim)
        {
            novoDados = prompt("Alergia:")
        }
    }
    const atualizou = atualizarPacientes(pacientes, id, novoDados);
    if (atualizou === true) 
        {
        console.log("Paciente atualizado com sucesso!");
    }
    break
    case"4":
    const CPF = (prompt("CPF do Paciente: "));
    removerPacientes(pacientes, CPF )
    break
    case"5":
    media = pacientes.alergias.length
    let totalPaciente = pacientes.length
    console.log("---Relatório da clínica---")
    console.log(`Total de pacientes: ${totalPaciente}`)
    console.log(`Média de Idade: `)
    console.log(`Pacientes com alergia: `)
    console.log(`Paciente mais velho: `)
    console.log(`${relatorioPaciente}`)
    break
    case "0":
    console.log("Até logo!")
    break
 }
}while (escolha !== "0")