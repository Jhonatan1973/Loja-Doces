"use strict";

// Função para carregar o cabeçalho dinamicamente
function carregarCabecalho() {
  fetch('assents/components/header.html')
    .then(response => response.text())
    .then(data => {
      const headerContainer = document.getElementById('header-container');
      headerContainer.innerHTML = data;

      // Evento de clique para mostrar/ocultar o menu
      const showInputButton = document.querySelector('.show-input-button');
      const inputDiv = document.querySelector('.input');

      if (showInputButton && inputDiv) {
        showInputButton.addEventListener('click', function () {
          inputDiv.classList.toggle('active');
        });
      }

      // Evento de clique para abrir o modal
      const openModalButton = document.getElementById("open-modal");
      const modal = document.getElementById("modal");
      const closeModal = document.querySelector(".close");

      if (openModalButton && modal && closeModal) {
        openModalButton.addEventListener("click", function () {
          modal.style.display = "flex";
        });

        closeModal.addEventListener("click", function () {
          modal.style.display = "none";
        });

        window.addEventListener("click", function (event) {
          if (event.target === modal) {
            modal.style.display = "none";
          }
        });
      }

      // Evento para filtrar os produtos ao clicar em "Páscoa"
      const opcaoPascoa = document.getElementById("filtrar-pascoa");
      if (opcaoPascoa) {
        opcaoPascoa.addEventListener("click", function () {
          const produtos = document.querySelectorAll(".produto");

          produtos.forEach(produto => {
            const nomeProduto = produto.querySelector("h3").textContent.toLowerCase();

            if (nomeProduto.includes("páscoa")) {
              produto.style.display = "block";
            } else {
              produto.style.display = "none";
            }
          });

          modal.style.display = "none"; // Fecha o modal após selecionar a opção
        });
      }
    })
    .catch(error => console.error("Erro ao carregar o cabeçalho:", error));
}

// Chama a função para carregar o cabeçalho
carregarCabecalho();


// Dados dos produtos organizados por departamento
const produtosPorDepartamento = {
  "Ovos de Páscoa": [
    {
      imagem: "../assents/img/ovo-de-pascoa-493.jpg",
      nome: "Ovo de Páscoa",
      descricao: "Ovo de colher feito com chocolate nobre e recheio de Maracujá.",
      preco: "R$ 10,00"
    }
  ],
  "Mousses": [
    {
      imagem: "/assents/img/WhatsApp Image 2025-03-12 at 17.33.19.jpeg",
      nome: "Mousse de Maracujá",
      descricao: "Um delicioso mousse de Maracujá com chocolate nobre por cima.",
      preco: "R$ 8,00"
    },
    {
      imagem: "/assents/img/shutterstock-1949230144-1-1-.jpg",
      nome: "Mousse de Limão",
      descricao: "Mousse de limão com raspas das frutas por cima.",
      preco: "R$ 8,00"
    }
  ],
  "Bombons": [
    {
      imagem: "/assents/img/bombom.jpg",
      nome: "Bombom Trufado",
      descricao: "Chocolate recheado com ganache especial.",
      preco: "R$ 3,00"
    }
  ],
  "Cones": [
    {
      imagem: "/assents/img/cone.jpg",
      nome: "Cone de Chocolate",
      descricao: "Cone crocante recheado com brigadeiro gourmet.",
      preco: "R$ 6,00"
    }
  ]
};

// Função para adicionar os produtos por departamento
function adicionarProdutos() {
  const produtosContainer = document.getElementById('produtos-container');

  for (const departamento in produtosPorDepartamento) {
    // Criando a seção do departamento
    const section = document.createElement('section');
    section.classList.add('departamento');

    // Criando o título do departamento
    const titulo = document.createElement('h2');
    titulo.textContent = departamento;
    section.appendChild(titulo);

    // Criando o container dos produtos
    const produtosDiv = document.createElement('div');
    produtosDiv.classList.add('produtos');

    produtosPorDepartamento[departamento].forEach(produto => {
      const divProduto = document.createElement('div');
      divProduto.classList.add('produto');

      divProduto.innerHTML = `
        <img src="${produto.imagem}" alt="${produto.nome}">
        <h3>${produto.nome}</h3>
        <p>${produto.descricao}</p>
        <span class="preco">${produto.preco}</span>
        <button class="comprar">Comprar</button>
      `;

      produtosDiv.appendChild(divProduto);
    });

    section.appendChild(produtosDiv);
    produtosContainer.appendChild(section);
  }
}

// Chama a função para adicionar os produtos organizados
adicionarProdutos();
