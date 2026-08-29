/**
 * Fonte única de conteúdo do site.
 * Alterou aqui, mudou no site inteiro. Linhas marcadas com AJUSTAR
 * dependem de informação que só o anfitrião confirma.
 */

export const SITE = {
  name: "Gabana's House",
  tagline: 'Casa de temporada em Caldas Novas',
  url: 'https://gabanashousetemporada.vercel.app',
  ogImage: '/img/og-image.jpg',
  phoneIntl: '+5564992415277',
  phoneDisplay: '(64) 99241-5277',
  whatsappNumber: '5564992415277',
  address: {
    street: 'Rua 7 - Av. A, Qd 04 Lt 27',
    district: 'Itaguaí 1',
    city: 'Caldas Novas',
    state: 'GO',
    zip: '75690-000',
    lat: -17.746938,
    lng: -48.623688,
    mapQuery: '793G+6G Caldas Novas, Goiás',
  },
};

const wa = (msg) => `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(msg)}`;

export const LINKS = {
  whatsapp: wa('Olá! Vi o site da Gabana’s House e queria saber sobre disponibilidade.'),
  whatsappDates: wa('Olá! Queria consultar disponibilidade e valores para as seguintes datas: '),
  whatsappBooking: wa('Olá! Queria fechar uma reserva na Gabana’s House.'),
  whatsappVoucher: wa('Olá! Avaliei no Google e queria usar o cupom GABANA10 na próxima reserva direta.'),
  airbnb: 'https://www.airbnb.com.br/rooms/952305594473672721',
  booking:
    'https://www.booking.com/hotel/br/casa-de-aluguel-para-temporada-caldas-novas.pt-br.html',
  instagram: 'https://www.instagram.com/gabanas_house',
  googleReview: 'https://g.page/r/Cci94VmYDpB8EBE/review',
  builder: 'https://www.instagram.com/optima_sistemas',
};

/** Números que aparecem no hero e nos dados estruturados. */
export const FACTS = {
  guests: 15,
  suites: 3,
  bathrooms: 4,
  parking: 3,
};

export const HERO_STATS = [
  { label: 'Capacidade', value: 'Até 15 pessoas' },
  { label: 'Dormitórios', value: '3 suítes' },
  { label: 'Piscina', value: 'Climatizada' },
  { label: 'Garagem', value: '3 vagas cobertas' },
];

/** Seção "A casa" — índice dos ambientes (fotos conferidas uma a uma). */
export const ROOMS = [
  {
    name: 'Suíte 1',
    detail: 'Cama de casal e uma de solteiro. Ar-condicionado e banheiro próprio.',
    image: '/img/quarto-01.webp',
  },
  {
    name: 'Suíte 2',
    detail: 'Cama de casal e cama extra, com guarda-roupa e ar-condicionado.',
    image: '/img/quarto-02.webp',
  },
  {
    name: 'Suíte 3',
    detail: 'Duas camas de solteiro, o quarto que as crianças escolhem.',
    image: '/img/quarto-03.webp',
  },
  {
    name: 'Banheiros',
    detail: 'Quatro no total: um em cada suíte e um social, com box de vidro.',
    image: '/img/banheiro-01.webp',
  },
  {
    name: 'Sala de estar',
    detail: 'Sofá, TV e janela para a área externa.',
    image: '/img/sala.webp',
  },
  {
    name: 'Cozinha e salão',
    detail: 'Cozinha aberta para o salão, com churrasqueira na bancada, mesa grande e geladeira.',
    image: '/img/salao-cozinha.webp',
  },
  {
    name: 'Mesa de sinuca',
    detail: 'No mesmo salão da cozinha, ninguém precisa sair para jogar.',
    image: '/img/salao-jogos.webp',
  },
  {
    name: 'Churrasqueira integrada',
    detail: 'Na própria bancada da cozinha, em granito, com forno ao lado.',
    image: '/img/churrasqueira.webp',
  },
  {
    name: 'Piscina e solário',
    detail: 'Piscina climatizada, piso de cerâmica em volta, guarda-sol e cascata.',
    image: '/img/piscina-deck.webp',
  },
  {
    name: 'Garagem coberta',
    detail: 'Área ampla e coberta, com espaço para três carros dentro do portão.',
    image: '/img/garagem.webp',
  },
];

export const HOUSE_INTRO = {
  lede:
    'A casa foi feita para o grupo inteiro caber sem ninguém dormir no sofá. Três suítes, quatro banheiros, churrasqueira dentro da cozinha e uma piscina que fica boa mesmo em julho.',
  body: [
    'Ela é nossa. Recebemos hóspede por hóspede, respondemos o WhatsApp pessoalmente e conhecemos cada detalhe daqui, do botão da churrasqueira ao horário que o sol bate melhor na piscina.',
    'Fica no Itaguaí 1, rua tranquila, a poucos minutos a pé dos clubes termais e do comércio. Você estaciona três carros na garagem coberta e só usa de novo na volta.',
  ],
};

export const AMENITIES = [
  {
    title: 'Piscina climatizada',
    desc: 'Aquecimento, cascata e iluminação em LED. Boa de usar de dia ou à noite, inclusive em julho.',
  },
  {
    title: 'Churrasqueira integrada',
    desc: 'Embutida na bancada da cozinha, com forno ao lado. Quem assa fica na conversa, não isolado lá fora.',
  },
  {
    title: 'Ar-condicionado',
    desc: 'Em todas as suítes e nos ambientes sociais. Ventiladores de teto nas áreas comuns.',
  },
  {
    title: 'Wi-Fi por fibra',
    desc: 'Sinal em toda a casa, incluindo a área externa. Dá para trabalhar e assistir junto.',
  },
  {
    title: 'Cozinha equipada',
    desc: 'Aberta para o salão, com geladeira, mesa grande e a sinuca logo ali.',
  },
  {
    title: 'Garagem coberta',
    desc: 'Três vagas dentro do portão, mais espaço na frente para quem chega em comboio.',
  },
];

/**
 * Arredores. Só entra o que é perto de verdade:
 * WALK = dá para ir andando. DRIVE = até uns 10 min de carro.
 * Nada acima disso — parque a 30 km não vende localização.
 */
export const NEARBY_WALK = [
  { name: 'Rua da feira', distance: '100 m', note: 'Vira a esquina e já está lá' },
  { name: 'Feira livre', distance: '150 m', note: 'Fruta e pastel no fim de semana' },
  { name: 'Pista de cooper', distance: '150 m', note: 'Caminhada de manhã' },
  { name: 'Casarão de Caldas Novas', distance: '200 m', note: 'Centro histórico' },
  { name: 'Tropical Thermas', distance: '300 m', note: 'Clube termal, a pé' },
  { name: 'Mercado e padaria', distance: '400 m', note: 'Abastecimento do dia' },
];

export const NEARBY_DRIVE = [
  { name: 'Centro e restaurantes', distance: '2,5 km', note: 'Jantar fora' }, // AJUSTAR
  { name: 'Lagoa Termas Parque', distance: '10 km', note: 'Parque aquático' },
];

/** Condições de estadia — sem valores. Consulta é sempre no WhatsApp. */
export const STAY_RULES = [
  { label: 'Capacidade', value: 'Até 15 hóspedes' },
  { label: 'Banheiros', value: '4 (3 suítes + 1 social)' },
  { label: 'Pets', value: 'Pequeno porte, com aviso prévio' },
  { label: 'Fumantes', value: 'Somente na área externa' },
  { label: 'Reserva', value: 'Direto com o anfitrião, sem taxa de plataforma' },
];

export const REVIEWS = {
  rating: '4,9',
  source: 'Booking.com',
  count: 24,
  featured: {
    text:
      'A casa está exatamente como nas fotos, tudo novo e muito limpo. A piscina climatizada salvou as crianças no frio e a localização é ótima, a gente ia a pé para tudo. O anfitrião responde na hora.',
    author: 'Família Martins',
    date: 'Janeiro de 2026',
  },
  list: [
    {
      name: 'Marlice',
      text: 'Casa espaçosa, todos os quartos com banheiro. Perto de tudo e muito silenciosa à noite.',
      date: 'Dezembro de 2025',
    },
    {
      name: 'Fernando',
      text: 'Tudo como descrito. Cozinha completa mesmo, deu para cozinhar para onze pessoas sem aperto.',
      date: 'Novembro de 2025',
    },
    {
      name: 'Família Souza',
      text: 'A área da churrasqueira com a sinuca do lado foi onde passamos a viagem inteira.',
      date: 'Outubro de 2025',
    },
  ],
};

export const FAQS = [
  {
    q: 'Quantas pessoas cabem na casa?',
    a: 'Até 15 hóspedes, distribuídos em 3 suítes com ar-condicionado e 4 banheiros. Acima disso não conseguimos acomodar com conforto.',
  },
  {
    q: 'A piscina é aquecida o ano todo?',
    a: 'Sim. O aquecimento fica ligado durante toda a estadia, inclusive nos meses mais frios de junho e julho.',
  },
  {
    q: 'Tem garagem?',
    a: 'Três vagas cobertas dentro do portão, com espaço extra na frente da casa.',
  },
  {
    q: 'Posso levar meu pet?',
    a: 'Pets de pequeno porte são bem-vindos, avisando antes. Cobramos uma taxa de limpeza à parte.',
  },
  {
    q: 'Qual o horário de chegada e saída?',
    a: 'Combinamos direto com você, conforme a agenda da casa. Se o dia anterior estiver livre, dá para chegar mais cedo; se o seguinte estiver, dá para sair mais tarde.',
  },
  {
    q: 'Como faço para saber o valor?',
    a: 'A diária muda conforme a temporada e o número de noites. Chame no WhatsApp com as datas que respondemos com o valor fechado, sem taxa de plataforma.',
  },
];

/** Galeria completa — 20 fotos, legendas conferidas foto a foto. */
export const GALLERY = [
  { src: '/img/piscina-noite.webp', alt: 'Piscina climatizada com cascata ao entardecer', label: 'Piscina', sub: 'Ao entardecer' },
  { src: '/img/piscina-dia.webp', alt: 'Piscina vista de dia, com piso de cerâmica em volta', label: 'Piscina', sub: 'De dia' },
  { src: '/img/piscina-deck.webp', alt: 'Borda da piscina com guarda-sol e poltronas', label: 'Solário', sub: 'Guarda-sol' },
  { src: '/img/deck.webp', alt: 'Poltronas na área externa, ao lado da piscina', label: 'Área de estar', sub: 'Externa' },
  { src: '/img/area-lazer.webp', alt: 'Mesas e cadeiras na área coberta ao lado da piscina', label: 'Área de lazer', sub: 'Coberta' },
  { src: '/img/churrasqueira.webp', alt: 'Bancada de granito da cozinha com churrasqueira e forno embutidos', label: 'Churrasqueira', sub: 'Integrada à cozinha' },
  { src: '/img/salao-cozinha.webp', alt: 'Salão com cozinha, mesa grande e mesa de sinuca', label: 'Salão', sub: 'Cozinha integrada' },
  { src: '/img/salao-tv.webp', alt: 'Salão com mesa de sinuca e televisão', label: 'Salão', sub: 'Sinuca e TV' },
  { src: '/img/salao-jogos.webp', alt: 'Mesa de sinuca do salão', label: 'Sinuca', sub: 'Salão' },
  { src: '/img/sala.webp', alt: 'Sala de estar com sofá e televisão', label: 'Sala de estar', sub: 'Living' },
  { src: '/img/quarto-01.webp', alt: 'Suíte com cama de casal e cama de solteiro', label: 'Suíte 1', sub: 'Dormitório' },
  { src: '/img/quarto-02.webp', alt: 'Suíte com cama de casal e cama extra', label: 'Suíte 2', sub: 'Dormitório' },
  { src: '/img/quarto-03.webp', alt: 'Suíte com duas camas de solteiro', label: 'Suíte 3', sub: 'Dormitório' },
  { src: '/img/banheiro-01.webp', alt: 'Banheiro com box de vidro e bancada', label: 'Banheiro', sub: 'Box de vidro' },
  { src: '/img/banheiro-02.webp', alt: 'Banheiro revestido em pastilha', label: 'Banheiro', sub: 'Suíte' },
  { src: '/img/banheiro-03.webp', alt: 'Banheiro com box e revestimento claro', label: 'Banheiro', sub: 'Suíte' },
  { src: '/img/banheiro-04.webp', alt: 'Bancada e espelho de banheiro', label: 'Banheiro', sub: 'Bancada' },
  { src: '/img/escada.webp', alt: 'Escada interna com corrimão de inox', label: 'Escada', sub: 'Circulação' },
  { src: '/img/garagem.webp', alt: 'Garagem coberta com acesso à área da piscina', label: 'Garagem', sub: 'Coberta' },
  { src: '/img/fachada.webp', alt: 'Fachada da casa iluminada à noite', label: 'Fachada', sub: 'Da rua' },
];

/** Painéis da galeria horizontal da home. */
export const GALLERY_PREVIEW = [
  { src: '/img/piscina-noite.webp', label: 'A piscina', sub: 'Climatizada, com cascata' },
  { src: '/img/churrasqueira.webp', label: 'A churrasqueira', sub: 'Integrada à cozinha' },
  { src: '/img/salao-cozinha.webp', label: 'O salão', sub: 'Cozinha, mesa e sinuca' },
  { src: '/img/quarto-01.webp', label: 'As suítes', sub: 'Todas com banheiro' },
  { src: '/img/piscina-deck.webp', label: 'O solário', sub: 'Guarda-sol e cerâmica' },
  { src: '/img/fachada.webp', label: 'A fachada', sub: 'Portão e garagem coberta' },
];

/**
 * Tour interativo — pontos marcados sobre fotos reais.
 * x/y são porcentagens da imagem, conferidas foto a foto.
 * Para estender o tour ao resto da casa é preciso uma foto aérea ou planta.
 */
export const TOUR = [
  {
    id: 'quintal',
    label: 'O quintal',
    image: '/img/area-lazer.webp',
    alt: 'Área de lazer com mesas, guarda-sol e piscina',
    spots: [
      { x: 71, y: 55, title: 'Piscina climatizada', text: 'Aquecida o ano todo, com cascata e luz de LED no fundo.', photo: '/img/piscina-dia.webp' },
      { x: 33, y: 62, title: 'Mesas na sombra', text: 'Lugar sentado para o grupo todo, debaixo da cobertura.', photo: '/img/area-lazer.webp' },
      { x: 43, y: 25, title: 'Guarda-sol', text: 'Sombra na borda da piscina, para o meio da tarde.', photo: '/img/piscina-deck.webp' },
      { x: 13, y: 38, title: 'Área de estar', text: 'Poltronas de vime na parte coberta, longe do sol forte.', photo: '/img/deck.webp' },
      { x: 86, y: 74, title: 'Piso de cerâmica', text: 'Contorna a piscina inteira, antiderrapante e fácil de lavar.', photo: '/img/piscina-noite.webp' },
    ],
  },
  {
    id: 'salao',
    label: 'O salão',
    image: '/img/salao-cozinha.webp',
    alt: 'Salão com cozinha, mesa de refeições e mesa de sinuca',
    spots: [
      { x: 7, y: 45, title: 'Churrasqueira e forno', text: 'Embutidos na bancada da cozinha. Assar não tira ninguém da mesa.', photo: '/img/churrasqueira.webp' },
      { x: 34, y: 49, title: 'Cozinha', text: 'Cooktop, pia e bancada corrida, aberta para o salão.', photo: '/img/salao-cozinha.webp' },
      { x: 57, y: 37, title: 'Geladeira', text: 'Geladeira grande, cabe a compra da semana inteira.', photo: '/img/salao-tv.webp' },
      { x: 62, y: 57, title: 'Mesa de refeições', text: 'Mesa comprida no meio do salão, todo mundo junto.', photo: '/img/salao-cozinha.webp' },
      { x: 78, y: 66, title: 'Mesa de sinuca', text: 'Taco, bola e giz inclusos. É onde a viagem termina.', photo: '/img/salao-jogos.webp' },
      { x: 86, y: 25, title: 'TV do salão', text: 'Televisão na parede, de frente para a sinuca.', photo: '/img/salao-tv.webp' },
    ],
  },
];

/**
 * Quem fez o site. O bloco de assinatura no rodapé sai daqui.
 * whatsapp: só dígitos, com DDI e DDD. Se ficar null, o botão cai para o site.
 */
export const OPTIMA = {
  name: 'Optima Sistemas',
  pitch: 'Sites de alta conversão e sistemas de gestão sob medida. Nada de software genérico.',
  services: ['Sites e landing pages', 'Sistemas e automações'],
  site: 'https://optimasistemas.com/',
  siteLabel: 'optimasistemas.com',
  instagram: 'https://www.instagram.com/optima_sistemas',
  whatsapp: '5564992106986',
  phoneDisplay: '(64) 99210-6986',
  whatsappText: 'Olá! Vi o site da Gabana’s House e queria falar sobre um projeto.',
};

/** Link de contato da Optima, com queda para o site se faltar o número. */
export const optimaContact = () =>
  OPTIMA.whatsapp
    ? `https://wa.me/${OPTIMA.whatsapp}?text=${encodeURIComponent(OPTIMA.whatsappText)}`
    : OPTIMA.site;
