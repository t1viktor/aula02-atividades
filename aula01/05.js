let valorEmDolares = prompt("Digite o valor em dólares:");

if (!isNaN(valorEmDolares)) {
    let taxaDeCambio = 0.85;
    let valorEmEuros = parseFloat(valorEmDolares) * taxaDeCambio;
    console.log(`O valor em euros é aproximadamente ${valorEmEuros.toFixed(2)}.`);
} else {
    console.error("Você não digitou um valor válido em dólares.");
}
