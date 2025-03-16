async function carregarComponente(url: string, seletor: string) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Erro ao carregar ${url}`);
        const html = await response.text();
        document.querySelector(seletor)!.innerHTML = html;
    } catch (error) {
        console.error(error);
    }
}

// Carregar os componentes no Index.html
carregarComponente('assents/components/header.html', '#header-container');
carregarComponente('assents/components/produto.html', '#produtos-container');

