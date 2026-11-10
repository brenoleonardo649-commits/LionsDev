import produtos from "./produtos.js";
import listarProdutos from "./listarprodutos.js";
import atualizarPreco from "./atualizarPreco.js";
let atualizou = atualizarPreco(produtos, 2, 75);
if (atualizou === true) {
console.log("Preço atualizado!");
}
atualizarPreco(produtos, 8, 50);
console.log("--- Produtos ---");
listarProdutos(produtos);