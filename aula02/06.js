let numero = prompt("Digite um número:");

if (!isNaN(numero)) {
    numero = parseInt(numero);

    if (numero <= 1) {
        console.log("O número não é primo.");
    } else {
        let ehPrimo = true;

        for (let i = 2; i <= Math.sqrt(numero); i++) {
            if (numero % i === 0) {
                ehPrimo = false;
                break;
            }
        }

        if (ehPrimo) {
            console.log("O número é primo.");
        } else {
            console.log("O número não é primo.");
        }
    }
} else {
    console.error("Você não digitou um número válido.");
}
