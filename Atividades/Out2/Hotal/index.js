import adicionarHospede from "./adicionarHospede.js";
import atualizarHospedes from "./atualizarHospede.js";
import listarHospedes from "./listarHospedes.js";
import hospedes from "./hospedes.js";
import removerHospedes from "./removerHospede.js";
import PromptSync from "prompt-sync";
const prompt = PromptSync()
let escolha
do{
    console.log("===== HOTEL LIONSINN =====")
console.log("1 - Check-in (cadastrar hóspede)")
console.log("2 - Listar hóspedes")
console.log("3 - Atualizar hóspede")
console.log("4 - Check-out (remover hóspede)")
console.log("5 - Calcular conta")
console.log("0 - Sair")
 escolha = prompt("Escolha uma opção")
 switch (escolha)
{
    case"1":
    console.log(adicionarHospede)
    break
    case"2":
    console.log(`${hospedes}`)
    break
    case"3":
    const id = Number(prompt("Erro: Hóspede não encontrado!"));
    const novoDados = {
        id:"",
        nome: prompt("Novo nome (Enter para manter): "),
        idade: prompt("Nova idade (Enter para manter): "),
        alergias: prompt("Outra alergia? (sim/não)"),
        if(novoDados = sim)
        {
            novoDados = prompt("Alergia:")
        }
    }
    const atualizou = atualizarHospedes(hospedes, id, novoDados);
    if (atualizou === true) 
        {
        console.log("Hospedes atualizado com sucesso!");
    }
    break
    case"4":
    let ValorEmReais = prompt("Qual o Valor em reais")
    let CotacaoDoDolar = prompt("Cotação do dólar (R$):")
    console.log(`R$ ${ValorEmReais} `)
    
    break
    case"5":
    console.log(`${relatorioPaciente}`)
    break
    case "0":
    console.log("Até logo!")
    break
 }
}while (escolha !== "0")