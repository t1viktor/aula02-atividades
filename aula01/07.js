let valorEmMetros = prompt("Digite o valor em metros:");

if (!isNaN(valorEmMetros)) {
    let valorEmCentimetros = parseFloat(valorEmMetros) * 100;
    console.log(`O valor em centímetros é aproximadamente ${valorEmCentimetros.toFixed(2)}.`);
} else {
    console.error("Você não digitou um valor válido em metros.");
}
