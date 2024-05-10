let digitar = document.querySelector(".digitar");
let button = document.querySelector(".button");
let lista = document.querySelector(".lista");
let item = document.createElement("li");


button.addEventListener("click", function(){
    let texto = digitar.value.trim();
    
    if (texto !== '') {
        let novoItem = document.createElement("li"); 
        novoItem.textContent = texto; 
        lista.appendChild(novoItem);
        digitar.value = ''; 
    } else {
        alert("Por favor, digite um nome válido.");
    }
});
