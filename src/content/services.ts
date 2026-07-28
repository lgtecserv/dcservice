import {
  Briefcase,
  Cpu,
  ShieldCheck,
  ClipboardList,
  Calculator,
  Users,
  Truck,
  PackageSearch,
  Handshake,
  Ship,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  short: string;
  icon: LucideIcon;
  image: string;
  intro: string;
  description: string;
  problems: string[];
  benefits: string[];
  how: { title: string; text: string }[];
  methodology: string[];
  differentiators: string[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "materiais-escritorio",
    title: "Fornecimento de Materiais de Escritório e Consumíveis",
    short:
      "Aprovisionamento contínuo de material de escritório e consumíveis para organizações de qualquer dimensão.",
    icon: Briefcase,
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1200",
    intro:
      "Simplificamos o abastecimento diário das suas equipas com um catálogo curado, prazos previsíveis e faturação centralizada.",
    description:
      "Assumimos a responsabilidade integral pela gestão dos consumíveis de escritório da sua organização: papel, tinteiros, economato, mobiliário e material técnico. Trabalhamos com contratos-quadro que garantem preços estáveis, entregas programadas e reposição automática a partir de níveis mínimos definidos consigo.",
    problems: [
      "Ruturas frequentes de material essencial",
      "Compras dispersas por múltiplos fornecedores",
      "Custos difíceis de controlar e auditar",
      "Ausência de padronização de qualidade",
    ],
    benefits: [
      "Ponto único de contacto para todas as necessidades",
      "Faturação consolidada e reporte mensal",
      "Reposição preventiva com base em histórico de consumo",
      "Redução comprovada de custos administrativos",
    ],
    how: [
      { title: "Levantamento", text: "Mapeamos o consumo real e definimos catálogo aprovado." },
      { title: "Contrato", text: "Estabelecemos condições, SLAs e níveis mínimos de stock." },
      { title: "Operação", text: "Executamos entregas periódicas e reposições automáticas." },
      { title: "Reporte", text: "Enviamos indicadores de consumo e oportunidades de poupança." },
    ],
    methodology: [
      "Análise ABC de consumo",
      "Catálogo empresarial com preços fechados",
      "Portal de encomendas dedicado",
      "Auditoria trimestral de custos",
    ],
    differentiators: [
      "Rede logística própria em Maputo",
      "Capacidade de importação direta",
      "Faturação eletrónica integrável no seu ERP",
    ],
    faqs: [
      { q: "Trabalham com contratos anuais?", a: "Sim. Propomos contratos-quadro anuais com revisão semestral de preços." },
      { q: "Fazem entregas fora de Maputo?", a: "Sim, com cobertura nacional através dos nossos parceiros logísticos." },
    ],
  },
  {
    slug: "informatica",
    title: "Informática",
    short: "Equipamento, software e suporte técnico para o dia a dia das suas operações.",
    icon: Cpu,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200",
    intro:
      "Do posto de trabalho ao data center: fornecemos, instalamos e mantemos a infraestrutura tecnológica que sustenta o seu negócio.",
    description:
      "Desenhamos e implementamos soluções de TI de ponta a ponta, incluindo fornecimento de hardware, licenciamento de software, redes empresariais, servidores, virtualização, cloud e suporte técnico gerido.",
    problems: [
      "Infraestrutura desatualizada e instável",
      "Falta de padronização entre postos de trabalho",
      "Suporte técnico reativo e sem SLA",
      "Custos de licenciamento fora de controlo",
    ],
    benefits: [
      "Ambiente tecnológico moderno e homogéneo",
      "Suporte proativo com tempos de resposta contratados",
      "Racionalização de custos de software",
      "Escalabilidade sem interrupção de serviço",
    ],
    how: [
      { title: "Auditoria", text: "Avaliamos infraestrutura, licenças e postos de trabalho existentes." },
      { title: "Plano diretor", text: "Definimos roadmap de modernização por prioridades." },
      { title: "Implementação", text: "Executamos com janelas de manutenção controladas." },
      { title: "Gestão", text: "Assumimos operação e monitorização contínua." },
    ],
    methodology: ["ITIL v4", "Monitorização 24/7", "Backup e recuperação testados", "Gestão de ativos"],
    differentiators: [
      "Equipa técnica certificada",
      "Parcerias com principais fabricantes",
      "Capacidade de resposta on-site em Maputo",
    ],
    faqs: [
      { q: "Prestam suporte fora do horário laboral?", a: "Sim, em regime 24/7 mediante contrato." },
      { q: "Trabalham com Microsoft 365 e Google Workspace?", a: "Sim, somos revendedores de ambas as plataformas." },
    ],
  },
  {
    slug: "seguranca-cibernetica",
    title: "Segurança Cibernética",
    short: "Proteção contínua de dados, sistemas e operações contra ameaças modernas.",
    icon: ShieldCheck,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200",
    intro:
      "Protegemos o património digital da sua organização com serviços de segurança que combinam tecnologia, processo e formação.",
    description:
      "Implementamos programas de cibersegurança adequados à realidade da sua empresa: avaliação de vulnerabilidades, hardening, monitorização, resposta a incidentes, sensibilização de utilizadores e conformidade regulatória.",
    problems: [
      "Exposição a ransomware e phishing",
      "Falta de visibilidade sobre incidentes",
      "Colaboradores sem formação em segurança",
      "Ausência de plano de resposta a incidentes",
    ],
    benefits: [
      "Redução mensurável da superfície de ataque",
      "Deteção precoce e resposta coordenada",
      "Continuidade operacional garantida",
      "Alinhamento com boas práticas internacionais",
    ],
    how: [
      { title: "Assessment", text: "Análise de risco, pentest e maturidade." },
      { title: "Remediação", text: "Correção de vulnerabilidades críticas priorizadas." },
      { title: "Operação", text: "Monitorização contínua e resposta a incidentes." },
      { title: "Evolução", text: "Revisões periódicas e formação recorrente." },
    ],
    methodology: ["NIST CSF", "ISO 27001", "OWASP", "MITRE ATT&CK"],
    differentiators: [
      "Analistas seniores dedicados",
      "Playbooks de resposta testados",
      "Relatórios executivos claros",
    ],
    faqs: [
      { q: "Fazem testes de intrusão?", a: "Sim, black-box, grey-box e white-box, com relatório executivo e técnico." },
      { q: "Ajudam com conformidade regulatória?", a: "Sim, para ISO 27001, RGPD e requisitos setoriais." },
    ],
  },
  {
    slug: "consultoria",
    title: "Consultoria Empresarial",
    short: "Aconselhamento estratégico e operacional para decisões críticas.",
    icon: ClipboardList,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200",
    intro:
      "Ajudamos direções executivas a estruturar decisões complexas, com análise rigorosa e recomendações acionáveis.",
    description:
      "Prestamos consultoria em estratégia, organização, processos, transformação digital, otimização operacional e entrada em novos mercados. Cada projeto é conduzido por consultores seniores com experiência de terreno.",
    problems: [
      "Estratégia pouco clara ou não implementada",
      "Processos ineficientes e redundantes",
      "Dificuldade em avaliar novas oportunidades",
      "Estruturas organizacionais desalinhadas",
    ],
    benefits: [
      "Decisões apoiadas em dados",
      "Roadmap executável com marcos claros",
      "Transferência de competências para equipas internas",
      "Alinhamento entre estratégia e operação",
    ],
    how: [
      { title: "Diagnóstico", text: "Entrevistas, análise documental e benchmarks." },
      { title: "Recomendações", text: "Cenários, business case e priorização." },
      { title: "Implementação", text: "Acompanhamento hands-on das iniciativas." },
      { title: "Governança", text: "Comités de acompanhamento e KPIs." },
    ],
    methodology: ["Balanced Scorecard", "Lean", "PMBOK", "Design Thinking"],
    differentiators: [
      "Consultores com experiência executiva",
      "Foco em implementação, não apenas relatório",
      "Conhecimento profundo do mercado moçambicano",
    ],
    faqs: [
      { q: "Trabalham com PME?", a: "Sim, com pacotes adaptados à dimensão e maturidade da organização." },
      { q: "Assinam NDA?", a: "Sim, é prática obrigatória em todos os engajamentos." },
    ],
  },
  {
    slug: "contabilidade",
    title: "Contabilidade",
    short: "Contabilidade organizada, fiscalidade e reporte financeiro sob controlo.",
    icon: Calculator,
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1200",
    intro:
      "Asseguramos o cumprimento contabilístico e fiscal da sua empresa com rigor, prazo e transparência.",
    description:
      "Prestamos serviços integrados de contabilidade, fiscalidade e reporting financeiro, com equipa técnica sénior e utilização de ferramentas digitais que garantem visibilidade em tempo real sobre a situação da empresa.",
    problems: [
      "Atrasos no fecho contabilístico mensal",
      "Riscos fiscais não identificados",
      "Reporte financeiro pouco fiável",
      "Falta de indicadores para gestão",
    ],
    benefits: [
      "Fecho mensal em prazo",
      "Otimização fiscal legal e documentada",
      "Dashboards de gestão mensais",
      "Preparação para auditoria a qualquer momento",
    ],
    how: [
      { title: "Onboarding", text: "Migração de dados e definição de plano de contas." },
      { title: "Rotina", text: "Registo diário, conciliações e obrigações fiscais." },
      { title: "Reporte", text: "Demonstrações financeiras e indicadores mensais." },
      { title: "Assessoria", text: "Reuniões periódicas com a direção." },
    ],
    methodology: ["PGC-NIRF", "IFRS", "Controlo interno", "Auditoria preventiva"],
    differentiators: ["Técnicos oficiais de contas certificados", "Software de gestão integrado", "Confidencialidade absoluta"],
    faqs: [
      { q: "Fazem processamento de salários?", a: "Sim, incluindo declarações à segurança social e IRPS." },
      { q: "Trabalham com empresas estrangeiras?", a: "Sim, com experiência em subsidiárias de grupos internacionais." },
    ],
  },
  {
    slug: "recursos-humanos",
    title: "Recursos Humanos",
    short: "Recrutamento, gestão e desenvolvimento de talento para o seu negócio.",
    icon: Users,
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1200",
    intro:
      "Ajudamos a atrair, integrar e desenvolver as pessoas certas para as suas ambições estratégicas.",
    description:
      "Cobrimos todo o ciclo de gestão de talento: recrutamento executivo e técnico, avaliação, formação, processamento salarial, políticas de compensação e desenvolvimento organizacional.",
    problems: [
      "Dificuldade em atrair perfis técnicos qualificados",
      "Rotatividade elevada de colaboradores-chave",
      "Falta de política salarial estruturada",
      "Ausência de avaliação de desempenho",
    ],
    benefits: [
      "Contratações mais rápidas e assertivas",
      "Retenção de talento",
      "Compensação justa e competitiva",
      "Cultura organizacional consolidada",
    ],
    how: [
      { title: "Mapeamento", text: "Perfil, competências e enquadramento salarial." },
      { title: "Sourcing", text: "Pesquisa ativa, entrevistas e assessment." },
      { title: "Integração", text: "Onboarding estruturado nos primeiros 90 dias." },
      { title: "Desenvolvimento", text: "Planos de formação e progressão." },
    ],
    methodology: ["Competency-based interviewing", "Assessment center", "9-box grid", "OKRs"],
    differentiators: ["Base de candidatos regional", "Confidencialidade nas pesquisas executivas", "Acompanhamento pós-contratação"],
    faqs: [
      { q: "Fazem headhunting?", a: "Sim, para posições de gestão e altamente especializadas." },
      { q: "Gerem processamento salarial?", a: "Sim, com plataforma dedicada e portal do colaborador." },
    ],
  },
  {
    slug: "logistica",
    title: "Logística",
    short: "Transporte, armazenagem e distribuição com controlo end-to-end.",
    icon: Truck,
    image: "https://images.unsplash.com/photo-1586528116311-ad8ed7c83a9f?auto=format&fit=crop&q=80&w=1200",
    intro:
      "Operações logísticas fiáveis, com visibilidade em tempo real e SLAs contratados.",
    description:
      "Concebemos e operamos cadeias logísticas para clientes industriais, comerciais e institucionais: transporte nacional e internacional, armazenagem, gestão de inventário, distribuição capilar e logística inversa.",
    problems: [
      "Atrasos e perdas na cadeia de fornecimento",
      "Falta de visibilidade sobre expedições",
      "Custos logísticos não competitivos",
      "Armazenagem sem controlo de inventário",
    ],
    benefits: [
      "Rastreabilidade ponta a ponta",
      "Otimização de rotas e ocupação",
      "Redução de perdas e ruturas",
      "Indicadores logísticos mensais",
    ],
    how: [
      { title: "Desenho", text: "Modelo logístico alinhado ao negócio." },
      { title: "Ativação", text: "Contratação de transporte e armazém adequados." },
      { title: "Operação", text: "Execução com tracking e KPIs." },
      { title: "Melhoria", text: "Revisão trimestral de rotas e custos." },
    ],
    methodology: ["Lean logistics", "WMS", "TMS", "SLA management"],
    differentiators: ["Rede de parceiros na SADC", "Experiência em carga sensível", "Capacidade de desalfandegamento"],
    faqs: [
      { q: "Operam cargas internacionais?", a: "Sim, marítimas, aéreas e rodoviárias, incluindo desalfandegamento." },
      { q: "Têm armazém próprio?", a: "Trabalhamos com armazéns parceiros certificados em Maputo." },
    ],
  },
  {
    slug: "procurement",
    title: "Procurement",
    short: "Compras corporativas estratégicas com poupança comprovada.",
    icon: PackageSearch,
    image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&q=80&w=1200",
    intro:
      "Executamos aquisições complexas com metodologia formal, garantindo transparência, competitividade e conformidade.",
    description:
      "Assumimos a gestão de processos de compra estratégica: sourcing internacional, RFQ/RFP, negociação, contratação e gestão de fornecedores. Ideal para organizações que precisam de rigor documental e poupanças reais.",
    problems: [
      "Compras urgentes com preços inflacionados",
      "Fornecedores sem avaliação estruturada",
      "Falta de rastreabilidade documental",
      "Ausência de política de compras",
    ],
    benefits: [
      "Poupanças típicas entre 8% e 20%",
      "Fornecedores homologados e avaliados",
      "Processos auditáveis",
      "Redução de risco de fornecimento",
    ],
    how: [
      { title: "Análise", text: "Categorização de gastos e oportunidades." },
      { title: "Sourcing", text: "Prospeção nacional e internacional." },
      { title: "Negociação", text: "RFQ/RFP estruturado, com adjudicação transparente." },
      { title: "Gestão", text: "Contratos, KPIs e avaliação de fornecedores." },
    ],
    methodology: ["Category management", "TCO", "SRM", "e-Sourcing"],
    differentiators: ["Rede internacional de fornecedores", "Especialistas em bens técnicos", "Conformidade documental"],
    faqs: [
      { q: "Trabalham com concursos públicos?", a: "Sim, apoiamos a preparação técnica e comercial de propostas." },
      { q: "Fazem importações?", a: "Sim, com gestão integral do processo aduaneiro." },
    ],
  },
  {
    slug: "parcerias",
    title: "Intermediação de Parcerias",
    short: "Ligamos empresas certas para criar valor de negócio real.",
    icon: Handshake,
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=1200",
    intro:
      "Facilitamos parcerias estratégicas entre organizações locais e internacionais, com base em due diligence e alinhamento de interesses.",
    description:
      "Identificamos, avaliamos e estruturamos parcerias comerciais, tecnológicas e institucionais. Cobrimos desde a prospeção até à assinatura, incluindo due diligence, apoio jurídico e desenho de modelo de governança.",
    problems: [
      "Dificuldade em identificar o parceiro certo",
      "Falta de due diligence antes de contratualizar",
      "Modelos de governança pouco claros",
      "Barreira cultural em parcerias internacionais",
    ],
    benefits: [
      "Acesso a rede qualificada",
      "Parcerias com base sólida",
      "Redução de risco reputacional",
      "Aceleração de entrada em novos mercados",
    ],
    how: [
      { title: "Briefing", text: "Perfil de parceiro ideal e objetivos." },
      { title: "Prospeção", text: "Shortlist qualificada e primeiro contacto." },
      { title: "Estruturação", text: "Due diligence e desenho do acordo." },
      { title: "Acompanhamento", text: "Governança e revisão trimestral." },
    ],
    methodology: ["Due diligence estratégica", "Term sheet", "MoU", "Joint Steering Committee"],
    differentiators: ["Presença em Moçambique e África do Sul", "Rede de contactos executivos", "Discrição e confidencialidade"],
    faqs: [
      { q: "Cobrem parcerias com investidores estrangeiros?", a: "Sim, com foco na SADC e mercados de língua portuguesa." },
      { q: "Apoiam contratação jurídica?", a: "Sim, através de escritórios de advogados parceiros." },
    ],
  },
  {
    slug: "importacao-exportacao",
    title: "Importação e Exportação",
    short: "Comércio internacional gerido do primeiro contacto ao desalfandegamento.",
    icon: Ship,
    image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&q=80&w=1200",
    intro:
      "Simplificamos operações de importação e exportação, com gestão documental, logística e aduaneira integrada.",
    description:
      "Prestamos serviços completos de comércio internacional: sourcing, negociação, transporte multimodal, seguros, documentação, licenciamento e desalfandegamento. Trabalhamos como um departamento externo de comércio internacional.",
    problems: [
      "Documentação aduaneira complexa",
      "Custos ocultos em operações internacionais",
      "Prazos imprevisíveis",
      "Falta de fornecedores homologados no estrangeiro",
    ],
    benefits: [
      "Um único interlocutor para toda a operação",
      "Custos totais previsíveis (landed cost)",
      "Redução de tempos de trânsito",
      "Conformidade aduaneira garantida",
    ],
    how: [
      { title: "Sourcing", text: "Identificação e homologação de fornecedores." },
      { title: "Contratação", text: "Negociação Incoterms e condições de pagamento." },
      { title: "Logística", text: "Transporte, seguro e monitorização." },
      { title: "Desalfandegamento", text: "Documentação e libertação da mercadoria." },
    ],
    methodology: ["Incoterms 2020", "Carta de crédito", "SAD", "Compliance aduaneiro"],
    differentiators: ["Experiência em rotas Ásia–África", "Parcerias com despachantes oficiais", "Gestão documental digital"],
    faqs: [
      { q: "Fazem exportação de produtos locais?", a: "Sim, incluindo apoio à obtenção de certificados de origem." },
      { q: "Trabalham com carga contentorizada e break-bulk?", a: "Sim, ambas as modalidades." },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
