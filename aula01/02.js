let numero1 = prompt("Digite o primeiro número:");
numero1 = parseFloat(numero1);

if (!isNaN(numero1)) {
    let numero2 = prompt("Digite o segundo número:");
    numero2 = parseFloat(numero2);

    if (!isNaN(numero2)) {
        let resultado = numero1 + numero2;
        console.log(`A soma de ${numero1} e ${numero2} é igual a ${resultado}.`);
    } else {
        console.error("Você não digitou um segundo número válido.");
    }
} else {
    console.error("Você não digitou um primeiro número válido.");
}
