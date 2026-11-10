import produtos from "./produtos.js";
import listarProdutos from "./listarProdutos.js";
import removerProduto from "./removerProduto.js";
let removeu = removerProduto(produtos, 2);
if (removeu === true) {
console.log("Produto removido!");
}
removerProduto(produtos, 8);
console.log("--- Produtos ---");
listarProdutos(produtos);