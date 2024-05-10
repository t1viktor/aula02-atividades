let numero = prompt("Digite um número:");

if (!isNaN(numero)) {
    numero = parseInt(numero);

    if (numero > 0 && numero % 2 === 0) {
        console.log("O número é positivo e par.");
    } else {
        console.log("O número não é positivo e/ou não é par.");
    }
} else {
    console.error("Você não digitou um número válido.");
}
