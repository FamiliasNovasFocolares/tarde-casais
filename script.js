document.addEventListener("DOMContentLoaded", function () {
        const cardData = [
                {
                        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSA0yU8rd44sxeo0ycPDuwEzsxYzEWaAMSnw&s",
                        imgAlt: "Variedade de pães e doces em uma vitrine de padaria",
                        title: "Padaria Espiga Dourada",
                        description: "Uma tarde de café, doces e boas conversas. A Espiga Dourada é uma padaria e confeitaria completa, perfeita para um lanche da tarde mais tranquilo e adocicado.",
                        linkHref: "https://www.espigadourada.com.br/site/",
                        linkLabel: "Visitar Site"
                },
                // {
                //         imgSrc: "https://lh3.googleusercontent.com/p/AF1QipPqm10oO03Stq72UuO0eDc1RKNby38OcA0ohjuc=s1360-w1360-h1020-rw",
                //         imgAlt: "Interior acolhedor de um bar de vinhos",
                //         title: "Vou de Vinho",
                //         description: "Um bistrô e bar de vinhos charmoso e aconchegante. Ideal para casais que apreciam um bom vinho acompanhado de tábuas de frios e um ambiente sofisticado. Perfeito para relaxar e conversar.",
                //         linkHref: "https://www.instagram.com/vou.de.vinho/",
                //         linkLabel: "Ver no Instagram"
                // },
                // {
                //         imgSrc: "https://redencaoturismo.com.br/wp-content/uploads/2024/05/vinho.jpeg",
                //         imgAlt: "Fileiras de videiras em uma vinícola",
                //         title: "Roteiro do Vinho de São Roque",
                //         description: "Uma experiência completa na cidade vizinha de São Roque. O roteiro inclui diversas vinícolas, adegas e restaurantes. É um passeio mais longo, ideal para uma tarde inteira de descobertas e degustações.",
                //         linkHref: "https://www.roteirodovinho.com.br/guia",
                //         linkLabel: "Conhecer o Roteiro"
                // },
                {
                        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL-_ikC6DrdqDJWxcWkK-rEZk1vHxBvh2pWQ&s",
                        imgAlt: "Close-up de um prato com sushis e sashimis",
                        title: "Matsuoka Sushi",
                        description: "Amantes da culinária japonesa vão adorar o Matsuoka. Com um ambiente moderno e pratos muito bem apresentados, é o lugar certo para uma experiência gastronômika oriental a dois.",
                        linkHref: "https://www.instagram.com/matsuokavgp/?hl=en",
                        linkLabel: "Ver no Instagram"
                },
                {
                        imgSrc: "https://files.menudino.com/cardapios/7058/capa.jpg",
                        imgAlt: "Um hambúrguer artesanal com batatas fritas em uma mesa rústica",
                        title: "Rota 777",
                        description: "Um complexo gastronômico com uma pegada 'rock'n'roll'. Oferece diversas opções de lanches e porções em um espaço amplo e temático. Ideal para casais que buscam um programa diferente e cheio de estilo.",
                        linkHref: "https://rota777.com.br/",
                        linkLabel: "Visitar Site"
                },
                {
                        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcgNrNO_qaElxsz67LWrZ8JVeVgo9EDCXo0w&s",
                        imgAlt: "Uma pizza sendo retirada de um forno a lenha",
                        title: "Pizzaria Dom Fratello",
                        description: "Quem não ama uma boa pizza? A Dom Fratello é uma ótima escolha para um jantar casual e delicioso. Dividir uma pizza é sempre um programa prazeroso e reconfortante.",
                        linkHref: "https://www.domfratello.com.br/",
                        linkLabel: "Ver o Cardápio"
                },
                {
                        title: "Estilla Destilaria e Cervejaria",
                        description: "Um verdadeiro achado na serra! A Estilla une o melhor de dois mundos: uma destilaria premiada, com gins e vodkas de alta qualidade, e uma cervejaria artesanal com chopes saborosos. É o lugar perfeito para o casal descobrir e degustar novos sabores em um ambiente charmoso e acolhedor.",
                        linkHref: "https://www.instagram.com/estilladestilaria/",
                        linkLabel: "Ver no Instagram",
                        imgSrc: "https://www.roteirodovinho.com.br/assets/uploads/estabelecimentos/DJI_0063.jpg",
                        imgAlt: "Uma cerveja sendo servida numa barra"
                },
                {
                        imgSrc: "https://www.roteirodovinho.com.br/assets/uploads/estabelecimentos/p2g0306l63484o8ggk.jpg",
                        imgAlt: "Caracol Chocolates",
                        title: "Caracol Chocolates",
                        description: "Um pedacinho da Serra Gaúcha em São Roque. A Caracol traz o sabor autêntico e puro do famoso chocolate de Gramado. Além das delícias de cacau, oferece cafés especiais. É a parada ideal para casais que buscam uma tarde romântica, compartilhando os doces prazeres da vida a dois.",
                        linkHref: "https://www.caracolchocolates.com.br/?utm_source=roteirodovinho",
                        linkLabel: "Visitar Site"
                },
                {
                        imgSrc: "https://www.roteirodovinho.com.br/assets/uploads/estabelecimentos/FD2DD8FC-DC33-49F8-B18C-3D422E472E20_1_201_a.jpeg",
                        imgAlt: "Receitas da roça",
                        title: "Receitas da roça",
                        description: "Para um momento de puro aconchego e sabor de verdade. O Receitas da Roça encanta com seus bolos fofinhos, doces caseiros e um café coado na hora. É o cantinho perfeito para uma conversa tranquila e para sentir o afeto em cada pedaço, tudo feito com amor.",
                        linkHref: "https://www.instagram.com/receitasdaroca",
                        linkLabel: "Ver no Instagram"
                },
                {
                        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWcCC89ExI_jxeZNT5iJHmLX7iMmX7iVP46g&s",
                        imgAlt: "Empório Chokolates",
                        title: "Empório Chokolates",
                        description: "Um verdadeiro paraíso para os amantes de chocolate. Este charmoso empório-café vai além do óbvio, oferecendo desde bombons finos e tortas cremosas até um delicioso fondue para compartilhar. É o convite perfeito para uma pausa a dois, ideal para aquecer a tarde e criar doces memórias.",
                        linkHref: "https://www.instagram.com/emporiochokolates/",
                        linkLabel: "Ver no Instagram"
                },
                {
                        imgSrc: "./images/kopenhagen-fachada.png",
                        imgAlt: "Fachada da Kopenhagen Eco Mall",
                        title: "Kopenhagen Eco Mall",
                        description: "Para um momento de clássica sofisticação, a Kopenhagen é a escolha certa. Desfrutem de um café especial acompanhado pelos ícones da marca, como a Nhá Benta e a Língua de Gato, em um ambiente elegante e acolhedor. É a pausa perfeita para conversar e saborear a qualidade e a tradição que só a Kopenhagen oferece.",
                        linkHref: "https://www.instagram.com/kopenhagenecomall/",
                        linkLabel: "Ver no Instagram"
                },
                {
                        imgSrc: "",
                        imgAlt: "",
                        title: "",
                        description: "",
                        linkHref: "",
                        linkLabel: ""
                },
        ];

        const gridContainer = document.querySelector('.grid-container');

        cardData.filter(data => data.imgSrc !== "").forEach(data => {
                const card = document.createElement('div');
                card.className = 'card';
                card.innerHTML = `
            <img src="${data.imgSrc}" alt="${data.imgAlt}">
            <div class="card-content">
                <h3>${data.title}</h3>
                <p>${data.description}</p>
                <a href="${data.linkHref}" target="_blank" class="btn">${data.linkLabel}</a>
            </div>
        `;
                gridContainer.appendChild(card);
        });

        const cards = document.querySelectorAll('.card');

        const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                        if (entry.isIntersecting) {
                                entry.target.classList.add('visible');
                                observer.unobserve(entry.target);
                        }
                });
        }, observerOptions);

        cards.forEach(card => {
                observer.observe(card);
        });
});
