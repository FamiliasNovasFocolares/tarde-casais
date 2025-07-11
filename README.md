# Guia para a Tarde dos Casais

Este é um projeto de página da web simples, criado para fornecer sugestões de passeios para casais em Vargem Grande Paulista e região.

## Funcionalidades

- **Design Responsivo:** A página se adapta a diferentes tamanhos de tela, de desktops a dispositivos móveis.
- **Carregamento Dinâmico de Conteúdo:** As sugestões de lugares são carregadas a partir de um arquivo JavaScript, o que facilita a adição, remoção ou edição de locais sem a necessidade de alterar o HTML.
- **Animações Sutis:** As placas de sugestão aparecem com uma animação suave à medida que o usuário rola a página.

## Tecnologias Utilizadas

- **HTML5:** Para a estrutura da página.
- **CSS3:** Para a estilização e o design, incluindo o uso de Flexbox e Grid Layout para um layout moderno e responsivo.
- **JavaScript (ES6+):** Para a interatividade e a geração dinâmica do conteúdo.

## Como Utilizar

1.  Clone ou baixe este repositório.
2.  Abra o arquivo `index.html` em seu navegador de preferência.

Para adicionar ou modificar as sugestões de lugares, edite o array `cardData` no arquivo `script.js`. Cada objeto no array representa um card e deve conter as seguintes propriedades:

- `imgSrc`: O URL da imagem.
- `imgAlt`: O texto alternativo para a imagem.
- `title`: O título do card.
- `description`: A descrição do lugar.
- `linkHref`: O URL do link para mais informações.
- `linkLabel`: O texto do botão do link.