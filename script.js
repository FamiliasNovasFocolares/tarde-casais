document.addEventListener("DOMContentLoaded", function () {
  // Origin coordinates: Espelho Mariapolis Ginetta
  const originCoords = {
    lat: -23.61881389734493,
    lng: -47.0402839899703,
  };

  // Function to calculate distance between two coordinates using Haversine formula
  function calculateDistance(lat1, lng1, lat2, lng2) {
    const R = 6371; // Earth's radius in kilometers
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLng = ((lng2 - lng1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLng / 2) *
        Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return Math.round(distance * 10) / 10; // Round to 1 decimal place
  }

  const cardData = [
    {
      imgSrc:
        "https://www.espigadourada.com.br/site/wp-content/uploads/2018/09/home-padaria-espiga-dourada-paes-doces-lanches-vargem-grande-paulista-03-600x600.jpg",
      imgAlt: "Variedade de pães e doces em uma vitrine de padaria",
      title: "Padaria Espiga Dourada",
      description:
        "Uma tarde de café, doces e boas conversas. A Espiga Dourada é uma padaria e confeitaria completa, perfeita para um lanche da tarde mais tranquilo e adocicado.",
      linkHref: "https://www.espigadourada.com.br/site/",
      linkLabel: "Visitar Site",
      googleMapsLink:
        "https://maps.google.com/?q=Padaria+Espiga+Dourada+Vargem+Grande+Paulista",
      coordinates: { lat: -23.61475867979091, lng: -47.03980750531462 },
      distance: "",
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
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL-_ikC6DrdqDJWxcWkK-rEZk1vHxBvh2pWQ&s",
      imgAlt: "Close-up de um prato com sushis e sashimis",
      title: "Matsuoka Sushi",
      description:
        "Amantes da culinária japonesa vão adorar o Matsuoka. Com um ambiente moderno e pratos muito bem apresentados, é o lugar certo para uma experiência gastronômika oriental a dois.",
      linkHref: "https://www.instagram.com/matsuokavgp/?hl=en",
      linkLabel: "Ver no Instagram",
      googleMapsLink:
        "https://maps.google.com/?q=Matsuoka+Sushi+Vargem+Grande+Paulista",
      coordinates: { lat: -23.6072277739693, lng: -47.0352545034625 },
      distance: "",
    },
    {
      imgSrc: "https://files.menudino.com/cardapios/7058/capa.jpg",
      imgAlt: "Um hambúrguer artesanal com batatas fritas em uma mesa rústica",
      title: "Rota 777",
      description:
        "Um complexo gastronômico com uma pegada 'rock'n'roll'. Oferece diversas opções de lanches e porções em um espaço amplo e temático. Ideal para casais que buscam um programa diferente e cheio de estilo.",
      linkHref: "https://rota777.com.br/",
      linkLabel: "Visitar Site",
      googleMapsLink:
        "https://maps.google.com/?q=Rota+777+Vargem+Grande+Paulista",
      coordinates: { lat: -23.618272725617082, lng: -47.00678456168591 },
      distance: "",
    },
    // {
    //         imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcgNrNO_qaElxsz67LWrZ8JVeVgo9EDCXo0w&s",
    //         imgAlt: "Uma pizza sendo retirada de um forno a lenha",
    //         title: "Pizzaria Dom Fratello",
    //         description: "Quem não ama uma boa pizza? A Dom Fratello é uma ótima escolha para um jantar casual e delicioso. Dividir uma pizza é sempre um programa prazeroso e reconfortante.",
    //         linkHref: "https://www.domfratello.com.br/",
    //         linkLabel: "Ver o Cardápio",
    //         googleMapsLink: "https://maps.google.com/?q=Pizzaria+Dom+Fratello+Vargem+Grande+Paulista"
    // },
    {
      title: "Estilla Destilaria e Cervejaria",
      description:
        "Um verdadeiro achado na serra! A Estilla une o melhor de dois mundos: uma destilaria premiada, com gins e vodkas de alta qualidade, e uma cervejaria artesanal com chopes saborosos. É o lugar perfeito para o casal descobrir e degustar novos sabores em um ambiente charmoso e acolhedor.",
      linkHref: "https://www.instagram.com/estilladestilaria/",
      linkLabel: "Ver no Instagram",
      imgSrc: "./images/destillaria.jpg",
      imgAlt: "Uma cerveja sendo servida numa barra",
      googleMapsLink:
        "https://maps.google.com/?q=Estilla+Destilaria+e+Cervejaria+São+Roque",
      coordinates: { lat: -23.528, lng: -47.135 },
      distance: "",
    },
    {
      imgSrc:
        "https://www.roteirodovinho.com.br/assets/uploads/estabelecimentos/p2g0306l63484o8ggk.jpg",
      imgAlt: "Caracol Chocolates",
      title: "Caracol Chocolates",
      description:
        "Um pedacinho da Serra Gaúcha em São Roque. A Caracol traz o sabor autêntico e puro do famoso chocolate de Gramado. Além das delícias de cacau, oferece cafés especiais. É a parada ideal para casais que buscam uma tarde romântica, compartilhando os doces prazeres da vida a dois.",
      linkHref:
        "https://www.caracolchocolates.com.br/?utm_source=roteirodovinho",
      linkLabel: "Visitar Site",
      googleMapsLink: "https://maps.google.com/?q=Caracol+Chocolates+São+Roque",
      coordinates: { lat: -23.525, lng: -47.138 },
      distance: "",
    },
    {
      imgSrc:
        "https://www.roteirodovinho.com.br/assets/uploads/estabelecimentos/FD2DD8FC-DC33-49F8-B18C-3D422E472E20_1_201_a.jpeg",
      imgAlt: "Receitas da roça",
      title: "Receitas da roça",
      description:
        "Para um momento de puro aconchego e sabor de verdade. O Receitas da Roça encanta com seus bolos fofinhos, doces caseiros e um café coado na hora. É o cantinho perfeito para uma conversa tranquila e para sentir o afeto em cada pedaço, tudo feito com amor.",
      linkHref: "https://www.instagram.com/receitasdaroca",
      linkLabel: "Ver no Instagram",
      googleMapsLink: "https://maps.google.com/?q=Receitas+da+roça+São+Roque",
      coordinates: {
        lat: -23.558053443594016,
        lng: -47.1271912040156,
      },
      distance: "",
    },
    {
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWcCC89ExI_jxeZNT5iJHmLX7iMmX7iVP46g&s",
      imgAlt: "Empório Chokolates",
      title: "Empório Chokolates",
      description:
        "Um verdadeiro paraíso para os amantes de chocolate. Este charmoso empório-café vai além do óbvio, oferecendo desde bombons finos e tortas cremosas até um delicioso fondue para compartilhar. É o convite perfeito para uma pausa a dois, ideal para aquecer a tarde e criar doces memórias.",
      linkHref: "https://www.instagram.com/emporiochokolates/",
      linkLabel: "Ver no Instagram",
      googleMapsLink:
        "https://maps.google.com/?q=Empório+Chokolates+Vargem+Grande+Paulista",
      coordinates: { lat: -23.605800574916316, lng: -47.0255569457904 },
      distance: "",
    },
    {
      imgSrc: "./images/kopenhagen-fachada.png",
      imgAlt: "Fachada da Kopenhagen Eco Mall",
      title: "Kopenhagen Eco Mall",
      description:
        "Para um momento de clássica sofisticação, a Kopenhagen é a escolha certa. Desfrutem de um café especial acompanhado pelos ícones da marca, como a Nhá Benta e a Língua de Gato, em um ambiente elegante e acolhedor. É a pausa perfeita para conversar e saborear a qualidade e a tradição que só a Kopenhagen oferece.",
      linkHref: "https://www.instagram.com/kopenhagenecomall/",
      linkLabel: "Ver no Instagram",
      googleMapsLink:
        "https://maps.google.com/?q=Kopenhagen+Eco+Mall+Vargem+Grande+Paulista",
      coordinates: { lat: -23.604815180555484, lng: -47.01704941510187 },
      distance: "",
    },
    {
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdcNbbsKD7Q6nyFCFcYNEDqEf0f-6knbk_eg&s",
      imgAlt: "Café e chocolates da Cacau Show em um ambiente de cafeteria",
      title: "Cacau Show - VGP (Bunjiro)",
      description:
        "Uma escolha sempre deliciosa e familiar. Perfeita para um café acompanhado de uma trufa, um tablete ou para um sorvete no fim de tarde. Na Cacau Show, os casais encontram o carinho do chocolate em um ambiente feito para adoçar o dia.",
      linkHref: "https://www.instagram.com/lojacacaushow.vgp.bunjiro/",
      linkLabel: "Ver no Instagram",
      googleMapsLink:
        "https://maps.google.com/?q=Cacau+Show+Bunjiro+Vargem+Grande+Paulista",
      coordinates: { lat: -23.606047929944165, lng: -47.035114854835435 },
      distance: "",
    },
    {
      imgSrc:
        "https://cdn.api.wine-locals.com/guide/images/GOES_42_733175741b_2390991c63.jpg",
      imgAlt: "Vinhedos da Vinícola Góes em um dia ensolarado",
      title: "Vinícola Góes",
      description:
        "Uma das mais tradicionais e estruturadas do roteiro. Oferece visitas guiadas, degustações e um complexo com restaurante e loja. É a escolha ideal para um passeio completo e uma imersão na cultura do vinho.",
      linkHref: "https://www.vinicolagoes.com.br/",
      linkLabel: "Visitar Site",
      googleMapsLink: "https://maps.google.com/?q=Vinícola+Góes+São+Roque",
      coordinates: { lat: -23.61084982782095, lng: -47.16019363285003 },
      distance: "",
    },
    {
      imgSrc:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/d8/8b/54/photo4jpg.jpg?w=900&h=500&s=1",
      imgAlt:
        "Casal degustando vinhos em um ambiente rústico que remete à Vinícola Bella Quinta",
      title: "Vinícola Bella Quinta",
      description:
        "Famosa pelo seu ambiente rústico e acolhedor, a Bella Quinta se destaca pelos vinhos produzidos com uvas exóticas. Um lugar perfeito para casais que buscam uma experiência de degustação mais íntima e autêntica.",
      linkHref: "https://www.instagram.com/vinicolabellaquinta/",
      linkLabel: "Ver no Instagram",
      googleMapsLink:
        "https://maps.google.com/?q=Vinícola+Bella+Quinta+São+Roque",
      coordinates: { lat: -23.609977217853803, lng: -47.15817603285003 },
      distance: "",
    },
    {
      imgSrc:
        "https://vinicolaxvdenovembro.com.br/wp-content/uploads/2019/09/enoturismo-e1568382723391.jpg",
      imgAlt:
        "Barris de carvalho em uma adega, representando a tradição da Vinícola XV de Novembro",
      title: "Vinícola XV de Novembro",
      description:
        "Uma das vinícolas mais antigas e charmosas da região, com um ar familiar e histórico. Ideal para provar vinhos de mesa tradicionais e conhecer o processo de produção artesanal. Uma verdadeira viagem no tempo.",
      linkHref: "https://www.instagram.com/vinicolaxv/",
      linkLabel: "Ver no Instagram",
      googleMapsLink:
        "https://maps.google.com/?q=Vinícola+XV+de+Novembro+São+Roque",
      coordinates: { lat: -23.51, lng: -47.15 },
      distance: "",
    },
    {
      imgSrc: "./images/lacoffee.jpg",
      imgAlt: "Interior de uma cafeteria aconchegante com um balcão",
      title: "Lacoffee",
      description:
        "Um espaço charmoso e convidativo para uma pausa relaxante. Ideal para os casais que apreciam um café de qualidade, acompanhado de um bom papo e um ambiente tranquilo para recarregar as energias.",
      linkHref: "https://www.instagram.com/docaria_lacoffee/",
      linkLabel: "Ver no Instagram",
      googleMapsLink:
        "https://www.google.com/maps/place/Lacoffee/@-23.6074767,-47.037818,17z/data=!3m1!4b1!4m6!3m5!1s0x94cf0953378b393f:0xf88b78969657bca0!8m2!3d-23.6074767!4d-47.0352431!16s%2Fg%2F11mcwd9m_j?entry=ttu&g_ep=EgoyMDI1MDcxMy4wIKXMDSoASAFQAw%3D%3D",
      coordinates: { lat: -23.607299666899, lng: -47.035210936930056 },
      distance: "",
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmFyYmVjdWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      imgAlt:
        "Cortes de carne nobre sendo preparados em uma parrilla com fogo aparente",
      title: "Fields Restaurante",
      description:
        "Uma autêntica casa de parrilla onde o fogo é a estrela. Com cortes nobres e um ambiente rústico-chique, é o lugar ideal para casais que apreciam a excelência de um bom churrasco, ótimos drinks e uma atmosfera vibrante.",
      linkHref: "https://www.instagram.com/fields_restaurante/",
      linkLabel: "Ver no Instagram",
      googleMapsLink:
        "https://www.google.com/maps/place/Fields+Restaurante+%26+Bar/@-23.6114521,-47.0390205,17z/data=!3m1!4b1!4m6!3m5!1s0x94cf099f772184bd:0x6c44ab0cd2069c7b!8m2!3d-23.6114521!4d-47.0364456!16s%2Fg%2F11c2q5ghql?entry=ttu&g_ep=EgoyMDI1MDcxMy4wIKXMDSoASAFQAw%3D%3D",
      coordinates: { lat: -23.611255465686316, lng: -47.03641341695418 },
      distance: "",
    },
    {
      imgSrc: "",
      imgAlt: "",
      title: "",
      description: "",
      linkHref: "",
      linkLabel: "",
      googleMapsLink: "",
      coordinates: { lat: 0, lng: 0 },
      distance: "",
    },
  ];

  // Calculate distances for all places
  cardData.forEach((place) => {
    if (place.coordinates) {
      const calculatedDistance = calculateDistance(
        originCoords.lat,
        originCoords.lng,
        place.coordinates.lat,
        place.coordinates.lng,
      );
      place.distance = `${calculatedDistance} km`;
    }
  });

  const gridContainer = document.querySelector(".grid-container");

  // Sort cards by distance (closest first)
  const sortedCardData = cardData
    .filter((data) => data.imgSrc !== "" && data.distance)
    .sort((a, b) => {
      const distanceA = parseFloat(a.distance.replace(" km", ""));
      const distanceB = parseFloat(b.distance.replace(" km", ""));
      return distanceA - distanceB;
    });

  sortedCardData.forEach((data) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
            <img src="${data.imgSrc}" alt="${data.imgAlt}">
            <div class="card-content">
                <div class="card-header">
                    <h3>${data.title}</h3>
                    <span class="distance">${data.distance}</span>
                </div>
                <p>${data.description}</p>
                <div class="card-buttons">
                    <a href="${data.linkHref}" target="_blank" class="btn">${data.linkLabel}</a>
                    ${data.googleMapsLink && data.googleMapsLink.trim() !== "" ? `<a href="${data.googleMapsLink}" target="_blank" class="btn btn-maps">Como chegar</a>` : ""}
                </div>
            </div>
        `;
    gridContainer.appendChild(card);
  });

  const cards = document.querySelectorAll(".card");

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  cards.forEach((card) => {
    observer.observe(card);
  });
});
