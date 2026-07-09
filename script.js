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
      category: "Café",
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
      category: "Restaurante",
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
      category: "Restaurante",
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
      category: "Cervejaria",
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
      category: "Chocolate",
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
      category: "Café",
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
      category: "Chocolate",
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
      category: "Chocolate",
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
      category: "Chocolate",
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
      category: "Vinícola",
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
      category: "Vinícola",
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
      category: "Vinícola",
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
      category: "Café",
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
      category: "Restaurante",
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
    // --- Novos lugares (exploração 2026-07-09, joaonotes/). ---
    // imgSrc vazio de propósito: preencher com foto real antes de publicar
    // (com imgSrc "" o card não é renderizado). Coordenadas geocodificadas
    // (Nominatim/OpenStreetMap); veja joaonotes/README.md para procedência.
    {
      imgSrc: "./images/quinta-do-olivardo.svg",
      imgAlt: "Adega rústica com barris e taças de vinho na Quinta do Olivardo",
      category: "Vinícola",
      title: "Quinta do Olivardo",
      description:
        "Um pedaço de Portugal na Estrada do Vinho. A Quinta do Olivardo une vinhos coloniais artesanais, uma cozinha portuguesa de dar água na boca — do bacalhau ao pastel de Belém — e jantares de fado que deixam o clima ainda mais romântico. Dá até para prolongar o encontro e dormir num chalé ou dentro de um tonel de vinho.",
      linkHref: "https://quintadoolivardo.com.br/saoroque/",
      linkLabel: "Visitar Site",
      googleMapsLink: "https://maps.google.com/?q=Quinta+do+Olivardo+São+Roque",
      coordinates: { lat: -23.575797, lng: -47.139797 },
      distance: "",
    },
    {
      imgSrc: "./images/ferreira-e-passos.jpg",
      imgAlt:
        "Varanda de casarão colonial com taças de vinho e vista dos parreirais",
      category: "Vinícola",
      title: "Ferreira & Passero Vinhos",
      description:
        "Para uma degustação íntima e sem pressa. No alto de uma colina, a varanda de um casarão colonial de quase 200 anos recebe o casal para provar os vinhos da casa com petiscos, vista dos parreirais e dos lagos. Um brinde a dois, com direito a taça personalizada de lembrança.",
      linkHref: "https://www.instagram.com/ferreiraepasserovinhos/",
      linkLabel: "Ver no Instagram",
      googleMapsLink:
        "https://maps.google.com/?q=Ferreira+e+Passero+Vinhos+São+Roque",
      coordinates: { lat: -23.568136, lng: -47.128557 },
      distance: "",
    },
    {
      imgSrc: "./images/almagaliza.jpg",
      imgAlt: "Vinhedo em encosta de serra com vista para os vales",
      category: "Vinícola",
      title: "Vinhos Alma Galiza",
      description:
        "Um refúgio galego a mais de mil metros de altitude. Cercada pelos vales da serra sanroquense, a Alma Galiza propõe uma degustação guiada por sommelier acompanhada de um almoço espanhol — tapas, paella e torta de Santiago. Vista de tirar o fôlego e a opção de ficar para o fim de semana.",
      linkHref: "https://www.instagram.com/almagalizaa/",
      linkLabel: "Ver no Instagram",
      googleMapsLink: "https://maps.google.com/?q=Vinhos+Alma+Galiza+São+Roque",
      coordinates: { lat: -23.594356, lng: -47.140661 },
      distance: "",
    },
    {
      imgSrc: "./images/canguera.jpg",
      imgAlt:
        "Barris de carvalho e máquinas antigas no museu do vinho da Canguera",
      category: "Vinícola",
      title: "Vinícola Canguera",
      description:
        "Tradição de família desde 1952. Além dos vinhos de mesa, finos e espumantes, a Canguera guarda um charmoso museu do vinho com máquinas dos anos 1950 e um restaurante que tem a flor de alcachofra como especialidade. Um passeio cultural e gastronômico para curtir com calma, de mãos dadas.",
      linkHref: "http://www.vinhoscanguera.com.br/",
      linkLabel: "Visitar Site",
      googleMapsLink: "https://maps.google.com/?q=Vinícola+Canguera+São+Roque",
      coordinates: { lat: -23.600984, lng: -47.162739 },
      distance: "",
    },
    {
      imgSrc: "./images/saboo.jpg",
      imgAlt:
        "Casal no cume rochoso do Morro do Saboó com vista panorâmica ao pôr do sol",
      category: "Trilha",
      title: "Morro do Saboó",
      description:
        "Para o casal que gosta de aventura e de uma boa recompensa. Uma trilha curta, porém puxada, leva ao ponto mais alto de São Roque (cerca de mil metros), um cume aberto de quartzo com vista panorâmica da região — cenário perfeito para o pôr do sol a dois. Entrada gratuita; leve bastante água e a câmera.",
      linkHref: "https://turismo.saoroque.sp.gov.br/-morro-do-saboo/",
      linkLabel: "Saiba Mais",
      googleMapsLink: "https://maps.google.com/?q=Morro+do+Saboó+São+Roque",
      coordinates: { lat: -23.4747, lng: -47.1626 },
      distance: "",
    },
    {
      imgSrc: "./images/mata-da-camara.jpg",
      imgAlt:
        "Trilha sombreada em meio à Mata Atlântica do Parque Mata da Câmara",
      category: "Parque",
      title: "Parque Natural Municipal Mata da Câmara",
      description:
        "Mata Atlântica pertinho da cidade. São cerca de 130 hectares de floresta nativa com trilhas ecológicas sombreadas, canto de pássaros e até saguis pelo caminho. Uma caminhada tranquila para respirar junto — e, para os mais animados, há atividades guiadas e rapel. Aberto de terça a domingo, 9h às 16h.",
      linkHref:
        "https://turismo.saoroque.sp.gov.br/-parque-natural-municipal-mata-da-camara/",
      linkLabel: "Saiba Mais",
      googleMapsLink:
        "https://maps.google.com/?q=Parque+Natural+Municipal+Mata+da+Câmara+São+Roque",
      coordinates: { lat: -23.527112, lng: -47.114567 },
      distance: "",
    },
    {
      imgSrc: "./images/cascata.jpg",
      imgAlt: "Cachoeira em meio à mata vista de uma passarela de madeira",
      category: "Cachoeira",
      title: "Recanto da Cascata",
      description:
        "Floresta, cachoeira e uma feira de domingo. Uma trilha fácil sobre passarelas de madeira leva o casal até o mirante de frente para a queda d'água, em meio à Mata Atlântica cortada pelo Rio Carambeí. Aos domingos, a feira permanente traz gastronomia, artesanato e música ao vivo — tarde romântica de baixo esforço. Domingo a sexta, 9h às 16h.",
      linkHref: "https://www.turismo.saoroque.sp.gov.br/-recanto-da-cascata/",
      linkLabel: "Saiba Mais",
      googleMapsLink: "https://maps.google.com/?q=Recanto+da+Cascata+São+Roque",
      coordinates: { lat: -23.539458, lng: -47.136955 },
      distance: "",
    },
    {
      imgSrc: "./images/morro-do-cruzeiro.jpg",
      imgAlt:
        "Cruz no mirante do Morro do Cruzeiro com vista da cidade de São Roque",
      category: "Mirante",
      title: "Morro do Cruzeiro",
      description:
        "A vista mais fácil da cidade. A poucos minutos do centro, o mirante coroado por uma cruz e uma imagem de São Roque do século XIX abre uma vista panorâmica de toda a cidade. Dá para chegar de carro e curtir o fim de tarde sem encarar trilha — só a paisagem e a companhia. Aberto todos os dias, 8h às 16h.",
      linkHref: "https://www.turismo.saoroque.sp.gov.br/-morro-do-cruzeiro/",
      linkLabel: "Saiba Mais",
      googleMapsLink: "https://maps.google.com/?q=Morro+do+Cruzeiro+São+Roque",
      coordinates: { lat: -23.537462, lng: -47.144034 },
      distance: "",
    },
    {
      imgSrc: "./images/duckbill.svg",
      imgAlt: "Cookies recém-assados e xícara de café especial sobre um balcão",
      category: "Café",
      title: "Duckbill Cookies & Coffee",
      description:
        "Café especial e o 'melhor cookie do Brasil'. No centro histórico de São Roque, a Duckbill é uma casa moderna e descontraída para uma tarde de café coado e cookies gigantes recém-saídos do forno. Bem avaliada e queridinha da cidade, é uma parada fácil e gostosa a dois.",
      linkHref: "https://www.duckbillcookies.com.br/",
      linkLabel: "Visitar Site",
      googleMapsLink:
        "https://maps.google.com/?q=Duckbill+Cookies+Coffee+São+Roque",
      coordinates: { lat: -23.52619, lng: -47.133006 },
      distance: "",
    },
    {
      imgSrc: "./images/florybal.jpg",
      imgAlt: "Chocolates artesanais e fondue em um casarão amarelo",
      category: "Chocolate",
      title: "Florybal - Casarão Amarelo",
      description:
        "O chocolate de Gramado num casarão amarelo na Estrada do Vinho. A loja da Florybal ocupa um charmoso casarão à beira da rota, com chocolates artesanais, fondue e chocolate quente para dividir. Uma pausa doce e aconchegante no meio do passeio pelo Roteiro do Vinho.",
      linkHref: "https://www.instagram.com/florybalsaoroque/",
      linkLabel: "Ver no Instagram",
      googleMapsLink:
        "https://maps.google.com/?q=Florybal+Casarão+Amarelo+São+Roque",
      coordinates: { lat: -23.604812, lng: -47.15557 },
      distance: "",
    },
    {
      imgSrc: "./images/portalba.jpg",
      imgAlt: "Pizza napolitana saindo do forno a lenha",
      category: "Restaurante",
      title: "Port'Alba Pizzaria & Trattoria",
      description:
        "Um cantinho da Itália na rota do vinho. Com mais de 30 anos de história, a Port'Alba serve pizzas napolitanas de forno a lenha e clássicos italianos como arancini e cannoli. Abre só à noite — perfeito para um jantar italiano intimista e sem pressa a dois.",
      linkHref: "https://www.instagram.com/pizzariaportalba/",
      linkLabel: "Ver no Instagram",
      googleMapsLink:
        "https://maps.google.com/?q=Port'Alba+Pizzaria+Trattoria+São+Roque",
      coordinates: { lat: -23.552759, lng: -47.121849 },
      distance: "",
    },
    {
      imgSrc: "./images/araucaria.jpg",
      imgAlt: "Fondue de queijo e cortes de carne na parrilla",
      category: "Restaurante",
      title: "Casa Araucária",
      description:
        "Fondue e parrilla à beira do fogo. Especialista em 'cozinha de fogo', a Casa Araucária serve cortes nobres na parrilla argentina e fondues de queijo, carne e — claro — chocolate. Ambiente aconchegante e rústico da serra, feito para um almoço ou jantar romântico. Fica dentro do complexo da Vinícola Góes.",
      linkHref: "https://www.instagram.com/acasaaraucaria/",
      linkLabel: "Ver no Instagram",
      googleMapsLink: "https://maps.google.com/?q=Casa+Araucária+São+Roque",
      coordinates: { lat: -23.610336, lng: -47.16052 },
      distance: "",
    },
    {
      imgSrc: "./images/thanks.avif",
      imgAlt: "Chopes artesanais servidos no balcão de um brewpub",
      category: "Cervejaria",
      title: "Thänks Brewing Co.",
      description:
        "Chope artesanal de produção própria no coração de São Roque. Um brewpub descontraído para o casal dividir cervejas da casa e petiscos — de hambúrgueres a risotos — numa boa parada de fim de tarde, longe da correria.",
      linkHref: "https://www.thanksbrewing.com.br/",
      linkLabel: "Visitar Site",
      googleMapsLink: "https://maps.google.com/?q=Thänks+Brewing+Co+São+Roque",
      coordinates: { lat: -23.520783, lng: -47.130366 },
      distance: "",
    },
    {
      imgSrc: "./images/hockenheim.jpg",
      imgAlt: "Cortes de carne na parrilla ao lado de chope artesanal",
      category: "Cervejaria",
      title: "Hockenheim Cervejaria & Steakhouse",
      description:
        "Cerveja artesanal, carnes e música ao vivo na Rota do Vinho. Inaugurada em 2024, a Hockenheim une chope tirado na hora, parrilla e steakhouse num ambiente animado. Ótima pedida para um jantar a dois que termina com música — sexta e sábado vão até mais tarde.",
      linkHref: "https://www.instagram.com/hockenheim_br/",
      linkLabel: "Ver no Instagram",
      googleMapsLink:
        "https://maps.google.com/?q=Hockenheim+Cervejaria+Steakhouse+São+Roque",
      coordinates: { lat: -23.590819, lng: -47.147432 },
      distance: "",
    },
    {
      imgSrc: "",
      imgAlt: "Pizza de forno a lenha em mesa rústica",
      category: "Restaurante",
      title: "Forneria Romanate",
      description:
        "Pizza de forno a lenha pertinho de casa. Uma das mais bem avaliadas de Vargem Grande Paulista, a Forneria Romanate é a opção certeira para um jantar de pizza a dois sem precisar pegar a estrada. Abre à noite — só não vá numa segunda.",
      linkHref:
        "https://www.tripadvisor.com/Restaurant_Review-g1588123-d5365969-Reviews-Forneria_Romanate-Vargem_Grande_Paulista_State_of_Sao_Paulo.html",
      linkLabel: "Ver Avaliações",
      googleMapsLink:
        "https://maps.google.com/?q=Forneria+Romanate+Vargem+Grande+Paulista",
      coordinates: { lat: -23.602802, lng: -47.024984 },
      distance: "",
    },
    {
      imgSrc: "",
      imgAlt: "",
      category: "",
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

  const bandsContainer = document.querySelector("#bands");

  // Sort cards by distance (closest first)
  const sortedCardData = cardData
    .filter((data) => data.imgSrc !== "" && data.distance)
    .sort((a, b) => {
      const distanceA = parseFloat(a.distance.replace(" km", ""));
      const distanceB = parseFloat(b.distance.replace(" km", ""));
      return distanceA - distanceB;
    });

  // Trechos da tarde: quanto do dia o casal topa investir no passeio
  const distanceBands = [
    {
      heading: "Pertinho",
      intro:
        "Para uma caminhada rápida ou um pulo de carro — a tarde começa aqui, pertinho de casa.",
      max: 3,
    },
    {
      heading: "Vale a volta",
      intro:
        "Um pouco mais longe, mas perto o bastante para caber numa tarde tranquila de casal.",
      max: 15,
    },
    {
      heading: "A tarde inteira",
      intro:
        "O Roteiro do Vinho em São Roque — separem a tarde toda para aproveitar com calma.",
      max: Infinity,
    },
  ];

  distanceBands.forEach((band, index) => {
    const bandStart = index === 0 ? 0 : distanceBands[index - 1].max;
    const placesInBand = sortedCardData.filter((data) => {
      const km = parseFloat(data.distance.replace(" km", ""));
      return km > bandStart && km <= band.max;
    });

    if (placesInBand.length === 0) return;

    const section = document.createElement("section");
    section.className = "distance-band";

    const dividerHtml =
      index > 0
        ? `<div class="route-divider"><span>${bandStart} km</span></div>`
        : "";

    const cardsHtml = placesInBand
      .map(
        (data) => `
            <div class="card">
                <div class="card-image">
                    <img src="${data.imgSrc}" alt="${data.imgAlt}">
                    <span class="distance">📍 ${data.distance}</span>
                </div>
                <div class="card-content">
                    <span class="card-eyebrow">${data.category}</span>
                    <h3>${data.title}</h3>
                    <p>${data.description}</p>
                    <div class="card-buttons">
                        <a href="${data.linkHref}" target="_blank" class="btn">${data.linkLabel}</a>
                        ${data.googleMapsLink && data.googleMapsLink.trim() !== "" ? `<a href="${data.googleMapsLink}" target="_blank" class="btn btn-maps">Como chegar</a>` : ""}
                    </div>
                </div>
            </div>
        `,
      )
      .join("");

    section.innerHTML = `
            <div class="band-inner">
                ${dividerHtml}
                <h3 class="band-heading">${band.heading}</h3>
                <p class="band-intro">${band.intro}</p>
                <div class="grid-container">${cardsHtml}</div>
            </div>
        `;

    bandsContainer.appendChild(section);
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
