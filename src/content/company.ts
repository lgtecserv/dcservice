export const company = {
  name: "DC SERVICE, LDA",
  shortName: "DC SERVICE",
  tagline: "Soluções empresariais integradas para organizações que exigem excelência.",
  description:
    "A DC SERVICE, LDA é uma empresa moçambicana multidisciplinar, dedicada a fornecer soluções corporativas em consultoria, tecnologia, segurança cibernética, logística, procurement, recursos humanos, contabilidade e comércio internacional.",
  phones: [
    { label: "Moçambique", value: "+258 86 301 3135", tel: "+258863013135" },
    { label: "Moçambique", value: "+258 85 301 3335", tel: "+258853013335" },
    { label: "África do Sul", value: "+27 64 912 4839", tel: "+27649124839" },
  ],
  emails: [
    { label: "Geral", value: "geral@dcservice.co.mz" },
    { label: "Direção", value: "dchongole@dcservice.co.mz" },
  ],
  whatsapp: "258863013135",
  address: "Maputo, Moçambique",
  hours: "Segunda a Sexta · 08h00 – 17h00",
  social: {
    linkedin: "#",
    facebook: "#",
    instagram: "#",
  },
} as const;

export const stats = [
  { value: 10, suffix: "+", label: "Áreas de atuação" },
  { value: 50, suffix: "+", label: "Clientes corporativos" },
  { value: 15, suffix: " anos", label: "Experiência acumulada" },
  { value: 98, suffix: "%", label: "Taxa de retenção" },
] as const;

export const pillars = [
  {
    title: "Rigor operacional",
    text: "Processos auditáveis, SLAs claros e entrega mensurável em todos os projetos.",
  },
  {
    title: "Multidisciplinaridade",
    text: "Um único parceiro para consultoria, tecnologia, logística, RH e comércio internacional.",
  },
  {
    title: "Confidencialidade",
    text: "Políticas de segurança da informação e NDAs por defeito em cada engajamento.",
  },
  {
    title: "Presença regional",
    text: "Operação em Moçambique com capacidade de execução transfronteiriça na SADC.",
  },
] as const;

export const processSteps = [
  { n: "01", title: "Diagnóstico", text: "Sessão executiva para mapear objetivos, restrições e critérios de sucesso." },
  { n: "02", title: "Proposta", text: "Plano de trabalho estruturado, com cronograma, entregáveis e investimento." },
  { n: "03", title: "Execução", text: "Equipa dedicada, marcos semanais e comunicação transparente." },
  { n: "04", title: "Sustentação", text: "Transferência de conhecimento e acompanhamento pós-entrega." },
] as const;

export const testimonials = [
  {
    quote:
      "A DC SERVICE tornou-se uma extensão da nossa operação. Cumprem prazos, comunicam com clareza e antecipam problemas.",
    author: "Direção Financeira",
    role: "Grupo industrial · Maputo",
  },
  {
    quote:
      "Combinam competência técnica em TI com uma visão de negócio pouco comum no mercado local.",
    author: "CTO",
    role: "Fintech regional",
  },
  {
    quote:
      "O procurement internacional que gerem para nós é impecável — documentação, prazos e custos sempre sob controlo.",
    author: "Diretor de Operações",
    role: "Construção civil",
  },
] as const;
