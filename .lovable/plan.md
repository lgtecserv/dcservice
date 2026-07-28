
# DC SERVICE, LDA — Website Corporativo Premium

Website institucional multi-página, estilo Premium Corporate (referência: IBM, Deloitte, Accenture), com identidade azul marinho / azul claro / branco baseada no logotipo enviado.

## Nota técnica importante

O PRD pede **Next.js**, mas este projeto usa **TanStack Start + React + TypeScript + TailwindCSS v4**, que é o stack fixo da plataforma. A migração para Next.js não é possível aqui. Todo o resto do stack pedido é compatível e será usado:
- React + TypeScript + TailwindCSS
- Framer Motion (animações)
- Lucide Icons
- Google Fonts
- Google Maps (embed)
- SEO completo (head por rota, sitemap dinâmico, robots.txt, JSON-LD, Open Graph, Twitter Cards, canonical)

Se preferir mesmo Next.js, o projeto teria de ser recriado noutra plataforma — confirme antes de avançar se este stack não serve.

## Identidade visual

- Primária: Azul marinho (`#0A1F44` aprox., calibrado ao logo)
- Secundária: Azul claro ciano (`#22B6EA` aprox., do arco do logo)
- Apoio: Branco `#FFFFFF`
- Destaque: Cinza muito claro `#F5F7FA`
- Tipografia: par serif/sans corporativo elegante (ex.: Instrument Serif + Inter, ou DM Serif Display + Work Sans) — ajustável
- Muito whitespace, sombras suaves, bordas discretas, gradientes muito subtis, micro-animações Framer Motion
- Logotipo enviado como asset via Lovable Assets, usado no header, footer, favicon e OG image
- Fotografia corporativa: gerada em alta qualidade (não ilustração IA "cartoon"), estilo real corporate

## Estrutura de rotas

```
/                            Home
/quem-somos                  Sobre a empresa
/servicos                    Índice de serviços
/servicos/$slug              Página individual por serviço (template único)
/parceiros                   Parceiros
/blog                        Listagem de artigos
/blog/$slug                  Artigo
/contactos                   Contactos + mapa + formulário
/orcamento                   Pedido de orçamento
/sitemap.xml                 Sitemap dinâmico
```

10 serviços com página própria (mesmo template):
office-supplies, informatica, ciberseguranca, consultoria, contabilidade, recursos-humanos, logistica, procurement, parcerias, importacao-exportacao.

## Componentes principais

- `SiteHeader` fixo com scroll, mega-menu para Serviços, CTA "Orçamento"
- `SiteFooter` completo (logo, descrição, serviços, links, contactos, redes sociais, newsletter, copyright)
- `Hero` com headline forte, subheadline, dois CTAs (Orçamento / WhatsApp), imagem corporativa
- `ServicesGrid`, `StatsCounter` (animado), `ProcessSteps`, `PartnersMarquee`, `TestimonialsCarousel`, `FAQAccordion`, `CTASection`, `MapEmbed`
- Template `ServicePage` reutilizado pelos 10 serviços via dados estáticos em `src/content/services.ts`
- `WhatsAppFloat` botão flutuante com link `wa.me`
- `Breadcrumbs` em todas as páginas internas
- Formulários com validação Zod: Contacto, Orçamento, Parceria, Consultoria — envio via server function

## Página inicial (Home)

Ordem das secções:
1. Hero
2. Quem Somos (resumo + link)
3. Serviços em destaque (grid 10 cards com ícone Lucide monocromo)
4. Porque escolher a DC SERVICE (4-6 pilares)
5. Estatísticas (contadores)
6. Processo de trabalho (4 passos)
7. Parceiros (marquee de logos)
8. Depoimentos
9. CTA final
10. Mapa + formulário compacto
11. Footer

## SEO e metadata

- `head()` por rota com title, description, og:title, og:description, og:type, og:url, canonical relativo
- OG image absoluto apenas em leaf routes que tenham hero significativo
- JSON-LD: `Organization` no root; `Service` nas páginas de serviço; `Article` nas do blog; `BreadcrumbList` nas internas
- `public/robots.txt`: `User-agent: *` / `Allow: /` (sem `Sitemap:` até haver domínio final)
- `src/routes/sitemap[.]xml.ts` dinâmico, `BASE_URL = ""` com TODO até definir domínio
- Favicon a partir do logotipo (PNG em `public/`), remove `favicon.ico` default
- Alt text em todas as imagens, `<main>` único por rota, `h1` único

## Formulários (armazenamento e envio)

Sem backend externo neste primeiro build. Opções:
- (A) Ativar **Lovable Cloud** para persistir submissões em base de dados e permitir envio de email — recomendado.
- (B) Server function que apenas valida e devolve sucesso (submissões não persistidas), com link `mailto:` / WhatsApp como fallback.

**Assumindo (A) a menos que indique o contrário.** Se sim, ativo Lovable Cloud e crio tabela `contact_submissions` com colunas `id, form_type, name, email, phone, company, service, message, created_at`, RLS restritiva (INSERT anon; SELECT só service_role), e um formulário server function que insere a submissão.

## Conteúdo

- Textos institucionais em português (pt-PT/pt-MZ), tom corporativo, autoridade técnica
- Contactos reais no site e footer:
  - Telefones: +258 86 301 3135 · +258 85 301 3335 · +27 64 912 4839
  - Emails: geral@dcservice.co.mz · dchongole@dcservice.co.mz
  - WhatsApp: primeiro número
- Cada uma das 10 páginas de serviço com introdução, descrição, problemas resolvidos, benefícios, como funciona, metodologia, diferenciais, FAQ, galeria, CTA, formulário, serviços relacionados

## Blog

Neste primeiro build: estrutura de rotas `/blog` e `/blog/$slug` com 2-3 artigos exemplo em ficheiros TS (`src/content/posts.ts`). Categorias e pesquisa client-side. Se preferir CMS/base de dados para o blog, indico e ativo Lovable Cloud com tabela `posts`.

## Performance e acessibilidade

- Lazy loading de imagens, `aspect-*` para reservar espaço
- Preload da imagem LCP do Hero via `head().links`
- Tokens semânticos (nada de `text-white` hardcoded)
- Componentes shadcn já acessíveis; `aria-label` em botões icon-only; `<main>` único por rota
- Tap targets ≥ 44px em mobile

## Perguntas antes de começar (respondo por defeito se não indicar)

1. **Formulários**: ativo Lovable Cloud para guardar submissões? (default: sim)
2. **Blog**: conteúdo estático em ficheiros ou tabela na base de dados? (default: estático agora)
3. **Google Analytics / Search Console / Google Maps API key**: forneço integração pronta mas sem chaves até me passar as credenciais — ok? (default: sim)
4. **Idioma**: só português, ou também inglês? (default: só português)

Confirme (ou ajuste) e implemento.
