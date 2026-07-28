import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { posts } from "../content/posts";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — DC SERVICE, LDA" },
      { name: "description", content: "Perspetivas e análises sobre consultoria, tecnologia, cibersegurança, procurement e comércio internacional em Moçambique." },
      { property: "og:title", content: "Blog — DC SERVICE, LDA" },
      { property: "og:description", content: "Artigos e análises da equipa DC SERVICE, LDA." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: Blog,
});

function Blog() {
  return (
    <>
      <section className="border-b border-border bg-surface">
        <div className="container-page py-12">
          <Breadcrumbs items={[{ label: "Blog" }]} />
          <h1 className="mt-6 max-w-3xl font-display text-5xl leading-tight text-navy sm:text-6xl">
            Ideias e análises da nossa equipa.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Reflexões práticas sobre os temas que atravessam a vida das organizações que servimos.
          </p>
        </div>
      </section>

      <section className="container-page py-20">
        <div className="grid gap-8 lg:grid-cols-2">
          {posts.map((p) => (
            <Link
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="group flex flex-col rounded-2xl border border-border bg-background p-8 transition-all hover:-translate-y-0.5 hover:border-cyan-brand/40 hover:shadow-lg"
            >
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span className="rounded-full bg-navy/5 px-2.5 py-1 font-medium text-navy">{p.category}</span>
                <span>{new Date(p.date).toLocaleDateString("pt-PT", { day: "2-digit", month: "short", year: "numeric" })}</span>
                <span>· {p.readTime}</span>
              </div>
              <h2 className="mt-4 font-display text-2xl leading-snug text-navy group-hover:text-cyan-brand">
                {p.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.excerpt}</p>
              <span className="mt-6 text-sm font-medium text-cyan-brand">Ler artigo →</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
