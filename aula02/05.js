let numeroDia = prompt("Digite um número de 1 a 7 representando o dia da semana:");

if (!isNaN(numeroDia)) {
    numeroDia = parseInt(numeroDia);

    let nomeDia;

    switch (numeroDia) {
        case 1:
            nomeDia = "Domingo";
            break;
        case 2:
            nomeDia = "Segunda-feira";
            break;
        case 3:
            nomeDia = "Terça-feira";
            break;
        case 4:
            nomeDia = "Quarta-feira";
            break;
        case 5:
            nomeDia = "Quinta-feira";
            break;
        case 6:
            nomeDia = "Sexta-feira";
            break;
        case 7:
            nomeDia = "Sábado";
            break;
        default:
            console.error("Você não digitou um número de 1 a 7.");
            break;
    }

    if (nomeDia) {
        console.log(`O número ${numeroDia} corresponde a ${nomeDia}.`);
    }
} else {
    console.error("Você não digitou um número válido.");
}
