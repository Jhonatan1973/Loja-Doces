const botoesCompra = document.querySelectorAll<HTMLButtonElement>(".comprar");

botoesCompra.forEach((botao) => {
    botao.addEventListener("click", () => {
        alert("Produto adicionado ao carrinho!");
    });
});
