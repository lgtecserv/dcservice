const fs = require('fs');

const ptPath = './src/locales/pt.json';
const enPath = './src/locales/en.json';

const pt = JSON.parse(fs.readFileSync(ptPath, 'utf8'));
const en = JSON.parse(fs.readFileSync(enPath, 'utf8'));

pt.serviceDetail = {
  badge: 'Especializado',
  quote: 'Solicitar Orçamento',
  quoteMessage: 'Olá, gostaria de solicitar um orçamento para os vossos serviços.',
  learnMore: 'Saiba Mais',
  our: 'Nossos',
  whyChoose: 'Por Que Escolher Nossos',
  whyChooseDesc: 'A nossa equipa utiliza as melhores práticas e tecnologia de ponta para garantir a máxima qualidade em cada projeto.',
  highlight: 'Destaque',
  implementation: 'Implementação profissional de',
  commitment: 'Compromisso com a excelência e adaptação às necessidades do seu negócio.',
  included: 'O Que Está Incluído',
  includedDesc: 'Cada projeto inclui tudo o que precisa para garantir o sucesso do seu empreendimento.',
  followup: 'Acompanhamento rigoroso em todas as etapas, desde a avaliação até à entrega final do serviço.',
  faq: 'Dúvidas Frequentes',
  needServices: 'Precisa de Serviços de',
  callToAction: 'Entre em contacto connosco hoje e receba um orçamento personalizado para o seu projeto.'
};

en.serviceDetail = {
  badge: 'Specialized',
  quote: 'Request Quote',
  quoteMessage: 'Hello, I would like to request a quote for your services.',
  learnMore: 'Learn More',
  our: 'Our',
  whyChoose: 'Why Choose Our',
  whyChooseDesc: 'Our team uses the best practices and cutting-edge technology to ensure the highest quality in every project.',
  highlight: 'Highlight',
  implementation: 'Professional implementation of',
  commitment: 'Commitment to excellence and adaptation to your business needs.',
  included: "What's Included",
  includedDesc: 'Each project includes everything you need to ensure the success of your enterprise.',
  followup: 'Rigorous monitoring at all stages, from assessment to final service delivery.',
  faq: 'Frequently Asked Questions',
  needServices: 'Need Services of',
  callToAction: 'Contact us today and receive a customized quote for your project.'
};

pt.servicesIndex = {
  breadcrumbs: 'Serviços',
  title: 'Serviços empresariais entregues por uma única equipa.',
  description: 'Dez áreas complementares, com metodologia formal, indicadores mensuráveis e um único ponto de contacto.',
  readMore: 'Saber mais'
};

en.servicesIndex = {
  breadcrumbs: 'Services',
  title: 'Corporate services delivered by a single team.',
  description: 'Ten complementary areas, with formal methodology, measurable indicators, and a single point of contact.',
  readMore: 'Learn more'
};

pt.about = {
  ...pt.about,
  breadcrumbs: 'Quem Somos',
  heroTitle: 'Um parceiro corporativo, construído para durar.',
  heroDesc: 'Nascemos em Moçambique com a ambição de oferecer serviços empresariais ao padrão que os melhores mercados exigem — sem prescindir do conhecimento profundo da realidade local.',
  whatWeDo: 'O que fazemos',
  missionTitle: 'Missão',
  missionDesc: 'Fornecer soluções empresariais integradas que aumentam a competitividade, a eficiência e a segurança das organizações que servimos.',
  whereWeGo: 'Onde vamos',
  visionTitle: 'Visão',
  visionDesc: 'Ser reconhecida como a empresa multidisciplinar de referência em Moçambique e um parceiro credível para operações regionais na África Austral.',
  howWeAct: 'Como agimos',
  commitmentTitle: 'Compromisso',
  commitmentDesc: 'Cumprir o que prometemos, com transparência, ética e responsabilidade em cada interação com clientes, colaboradores e comunidade.',
  valuesBadge: 'O nosso ADN',
  valuesTitle: 'Valores que guiam cada decisão.',
  values: {
    rigor: { title: 'Rigor', text: 'Compromissos claros, medidos e cumpridos.' },
    confidentiality: { title: 'Confidencialidade', text: 'Discrição absoluta em cada engajamento.' },
    excellence: { title: 'Excelência', text: 'Padrão internacional, executado localmente.' },
    partnership: { title: 'Parceria', text: 'Relação de longo prazo, orientada a resultados.' }
  },
  historyBadge: 'O nosso percurso',
  historyTitle: 'Uma década de transformação.',
  historyDesc: 'De uma consultoria local a uma empresa corporativa multidisciplinar, o nosso percurso é marcado por crescimento sustentado e adaptação.',
  timeline: {
    y2010: { title: 'Fundação', text: 'Início da atividade em Maputo com foco em consultoria e informática.' },
    y2014: { title: 'Expansão', text: 'Alargamento a serviços de logística, procurement e recursos humanos.' },
    y2019: { title: 'Cibersegurança', text: 'Criação da unidade de segurança cibernética e serviços geridos.' },
    y2023: { title: 'Comércio Internacional', text: 'Operações estruturadas de importação e exportação na SADC.' },
    today: { title: 'Multidisciplinar', text: 'Dez áreas de atuação sob uma única marca corporativa.' }
  }
};

en.about = {
  ...en.about,
  breadcrumbs: 'About Us',
  heroTitle: 'A corporate partner, built to last.',
  heroDesc: 'We were born in Mozambique with the ambition of offering corporate services to the standard that the best markets demand — without compromising deep knowledge of the local reality.',
  whatWeDo: 'What we do',
  missionTitle: 'Mission',
  missionDesc: 'Provide integrated business solutions that increase the competitiveness, efficiency and security of the organizations we serve.',
  whereWeGo: 'Where we go',
  visionTitle: 'Vision',
  visionDesc: 'To be recognized as the reference multidisciplinary company in Mozambique and a credible partner for regional operations in Southern Africa.',
  howWeAct: 'How we act',
  commitmentTitle: 'Commitment',
  commitmentDesc: 'Fulfill what we promise, with transparency, ethics and responsibility in every interaction with clients, employees and the community.',
  valuesBadge: 'Our DNA',
  valuesTitle: 'Values that guide every decision.',
  values: {
    rigor: { title: 'Rigor', text: 'Clear, measured and fulfilled commitments.' },
    confidentiality: { title: 'Confidentiality', text: 'Absolute discretion in every engagement.' },
    excellence: { title: 'Excellence', text: 'International standard, executed locally.' },
    partnership: { title: 'Partnership', text: 'Long-term relationship, results-oriented.' }
  },
  historyBadge: 'Our journey',
  historyTitle: 'A decade of transformation.',
  historyDesc: 'From a local consultancy to a multidisciplinary corporate company, our journey is marked by sustained growth and adaptation.',
  timeline: {
    y2010: { title: 'Foundation', text: 'Start of activity in Maputo focusing on consulting and IT.' },
    y2014: { title: 'Expansion', text: 'Expansion into logistics, procurement and human resources services.' },
    y2019: { title: 'Cybersecurity', text: 'Creation of the cybersecurity and managed services unit.' },
    y2023: { title: 'International Trade', text: 'Structured import and export operations in the SADC.' },
    today: { title: 'Multidisciplinary', text: 'Ten areas of expertise under a single corporate brand.' }
  }
};

pt.contact = {
  breadcrumbs: 'Contactos',
  title: 'Fale com a nossa equipa.',
  description: 'Seja para um projeto imediato ou para uma parceria de longo prazo, estamos prontos para ouvir e estruturar a melhor solução.',
  infoTitle: 'Informação de Contacto',
  infoDesc: 'A nossa equipa está disponível para responder às suas questões.',
  location: 'Sede Operacional',
  phones: 'Contactos Telefónicos',
  emails: 'Correio Eletrónico',
  hours: 'Horário de Funcionamento',
  headquarters: 'Sede'
};

en.contact = {
  breadcrumbs: 'Contact',
  title: 'Talk to our team.',
  description: 'Whether for an immediate project or a long-term partnership, we are ready to listen and structure the best solution.',
  infoTitle: 'Contact Information',
  infoDesc: 'Our team is available to answer your questions.',
  location: 'Operational Headquarters',
  phones: 'Phone Contacts',
  emails: 'Email',
  hours: 'Working Hours',
  headquarters: 'Headquarters'
};

pt.contactForm = {
  name: 'Nome completo',
  email: 'Email profissional',
  service: 'Área de interesse',
  message: 'Como podemos ajudar?',
  sending: 'A enviar...',
  send: 'Enviar Mensagem',
  selectArea: 'Selecione a área'
};

en.contactForm = {
  name: 'Full Name',
  email: 'Professional Email',
  service: 'Area of Interest',
  message: 'How can we help?',
  sending: 'Sending...',
  send: 'Send Message',
  selectArea: 'Select an area'
};

pt.quote = {
  breadcrumbs: 'Orçamento',
  title: 'Solicite um orçamento estruturado.',
  description: 'Preencha o formulário abaixo. A nossa equipa comercial entrará em contacto num prazo de 24 horas úteis com uma proposta ou pedido de reunião de alinhamento.'
};

en.quote = {
  breadcrumbs: 'Quote',
  title: 'Request a structured quote.',
  description: 'Fill out the form below. Our commercial team will contact you within 24 business hours with a proposal or request for an alignment meeting.'
};

fs.writeFileSync(ptPath, JSON.stringify(pt, null, 2));
fs.writeFileSync(enPath, JSON.stringify(en, null, 2));
