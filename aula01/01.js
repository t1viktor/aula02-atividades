
let nome = prompt("Digite seu nome:");

if (nome !== null && nome !== "") {

    console.log(`Olá, ${nome}! Bem-vindo ao nosso programa.`);
} else {
    console.error("Você não digitou um nome válido.");
}
