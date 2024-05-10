let precoOriginal = prompt("Digite o preço do produto:");

if (!isNaN(precoOriginal)) {
    let desconto = parseFloat(precoOriginal) * 0.10;
    let precoComDesconto = parseFloat(precoOriginal) - desconto;
    console.log(`O preço com desconto é aproximadamente ${precoComDesconto.toFixed(2)}.`);
} else {
    console.error("Você não digitou um preço válido.");
}
