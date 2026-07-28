import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { CTASection } from "../components/CTASection";
import { posts } from "../content/posts";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }): { post: import("../content/posts").Post } => {
    const post = posts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Artigo não encontrado" }, { name: "robots", content: "noindex" }] };
    }
    const p = loaderData.post;
    return {
      meta: [
        { title: `${p.title} — Blog DC SERVICE` },
        { name: "description", content: p.excerpt },
        { property: "og:title", content: p.title },
        { property: "og:description", content: p.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/blog/${p.slug}` },
      ],
      links: [{ rel: "canonical", href: `/blog/${p.slug}` }],
      scripts: [{
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: p.title,
          description: p.excerpt,
          datePublished: p.date,
          author: { "@type": "Organization", name: "DC SERVICE, LDA" },
        }),
      }],
    };
  },
  component: PostPage,
});

function PostPage() {
  const { post: p } = Route.useLoaderData() as { post: import("../content/posts").Post };
  return (
    <>
      <section className="border-b border-border bg-surface">
        <div className="container-page py-12">
          <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: p.title }]} />
          <div className="mt-6 max-w-3xl">
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span className="rounded-full bg-navy/5 px-2.5 py-1 font-medium text-navy">{p.category}</span>
              <span>{new Date(p.date).toLocaleDateString("pt-PT", { day: "2-digit", month: "long", year: "numeric" })}</span>
              <span>· {p.readTime}</span>
            </div>
            <h1 className="mt-4 font-display text-5xl leading-tight text-navy sm:text-6xl">{p.title}</h1>
            <p className="mt-4 text-lg text-muted-foreground">{p.excerpt}</p>
          </div>
        </div>
      </section>

      <article className="container-page py-16">
        <div className="mx-auto max-w-3xl space-y-6 text-base leading-relaxed text-foreground">
          {p.content.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
        <div className="mx-auto mt-14 max-w-3xl border-t border-border pt-8">
          <Link to="/blog" className="text-sm font-medium text-cyan-brand">← Ver todos os artigos</Link>
        </div>
      </article>

      <CTASection />
    </>
  );
}
