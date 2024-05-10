let peso = prompt("Digite seu peso em kg:");
let altura = prompt("Digite sua altura em metros:");

if (!isNaN(peso) && !isNaN(altura)) {
    peso = parseFloat(peso);
    altura = parseFloat(altura);

    let imc = peso / (altura * altura);

    let categoria;

    if (imc < 18.5) {
        categoria = "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 25) {
        categoria = "Peso normal";
    } else if (imc >= 25 && imc < 30) {
        categoria = "Sobrepeso";
    } else if (imc >= 30 && imc < 35) {
        categoria = "Obesidade grau I";
    } else if (imc >= 35 && imc < 40) {
        categoria = "Obesidade grau II";
    } else {
        categoria = "Obesidade grau III";
    }

    console.log(`Seu IMC é ${imc.toFixed(2)} e você está na categoria: ${categoria}.`);
} else {
    console.error("Você não digitou um peso ou altura válidos.");
}
