export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  content: string[];
};

export const posts: Post[] = [
  {
    slug: "ciberseguranca-pme-mocambique",
    title: "Cibersegurança para PME em Moçambique: por onde começar",
    excerpt:
      "Um guia executivo com as cinco medidas de maior impacto para reduzir risco cibernético em pequenas e médias empresas.",
    category: "Segurança Cibernética",
    date: "2026-05-14",
    readTime: "6 min",
    content: [
      "A digitalização acelerada das PME moçambicanas trouxe eficiência mas também exposição a ameaças cibernéticas. Ransomware, phishing e fraude por email são hoje ocorrências comuns em empresas de qualquer dimensão.",
      "Este artigo apresenta as cinco medidas com melhor relação custo-benefício para elevar significativamente o nível de proteção da sua organização, sem investimentos inacessíveis.",
      "1. Autenticação multifator em todos os serviços críticos. 2. Backups testados e isolados. 3. Formação recorrente de utilizadores. 4. Atualização automática de sistemas. 5. Plano documentado de resposta a incidentes.",
    ],
  },
  {
    slug: "procurement-estrategico",
    title: "Procurement estratégico: como transformar compras em vantagem competitiva",
    excerpt:
      "Como uma função de compras estruturada pode gerar poupanças recorrentes e reduzir risco de fornecimento.",
    category: "Procurement",
    date: "2026-04-02",
    readTime: "5 min",
    content: [
      "Muitas organizações continuam a tratar compras como uma função transacional. A realidade é que uma abordagem estratégica ao procurement pode representar 8% a 20% de poupança sobre o volume gerido.",
      "A chave está em três elementos: análise de gasto por categoria, homologação criteriosa de fornecedores e gestão contratual ativa ao longo do ciclo de vida do fornecimento.",
    ],
  },
  {
    slug: "importar-de-forma-eficiente",
    title: "Importar de forma eficiente: erros comuns e como evitá-los",
    excerpt:
      "Do sourcing ao desalfandegamento — os custos ocultos mais frequentes em operações de importação e como preveni-los.",
    category: "Comércio Internacional",
    date: "2026-02-20",
    readTime: "7 min",
    content: [
      "Operações de importação mal preparadas escondem custos que podem representar 15% do valor total da mercadoria: demurrage, penalizações aduaneiras, seguros mal dimensionados e câmbios desvantajosos.",
      "Uma boa preparação começa pelo domínio dos Incoterms, escolha adequada do modal e antecipação da documentação junto do despachante oficial.",
    ],
  },
];
