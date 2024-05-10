let letra = prompt("Digite uma letra:");

if (letra.length === 1 && letra.match(/[a-zA-Z]/)) {
    letra = letra.toLowerCase();

    if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
        console.log("A letra inserida é uma vogal.");
    } else {
        console.log("A letra inserida é uma consoante.");
    }
} else {
    console.error("Você não digitou uma letra válida.");
}
