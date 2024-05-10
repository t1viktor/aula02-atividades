let idade = prompt("Digite sua idade:");

if (!isNaN(idade)) {
    let anoAtual = new Date().getFullYear();
    let anoNascimento = anoAtual - parseInt(idade);
    console.log(`Você nasceu aproximadamente em ${anoNascimento}.`);
} else {
    console.error("Você não digitou uma idade válida.");
}
