let raio = prompt("Digite o raio do círculo:");

if (!isNaN(raio)) {
    let area = Math.PI * Math.pow(parseFloat(raio), 2);
    console.log(`A área do círculo com raio ${raio} é aproximadamente ${area.toFixed(2)}.`);
} else {
    console.error("Você não digitou um raio válido.");
}
