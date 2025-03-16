"use strict";
const botoesCompra = document.querySelectorAll(".comprar");
botoesCompra.forEach((botao) => {
    botao.addEventListener("click", () => {
        alert("Produto adicionado ao carrinho!");
    });
});
