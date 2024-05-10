let precoProduto = prompt("Digite o preço do produto:");
let idadeUsuario = prompt("Digite sua idade:");

if (!isNaN(precoProduto) && !isNaN(idadeUsuario)) {
    precoProduto = parseFloat(precoProduto);
    idadeUsuario = parseInt(idadeUsuario);

    let precoFinal;

    if (idadeUsuario < 18) {
        precoFinal = precoProduto * 0.9;
    } else {
        precoFinal = precoProduto; 
    }

    console.log(`O preço final do produto é R$${precoFinal.toFixed(2)}.`);
} else {
    console.error("Você não digitou um preço ou idade válidos.");
}
