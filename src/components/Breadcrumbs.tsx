import { Link } from "@tanstack/react-router";
import { ChevronRight, Home } from "lucide-react";

export function Breadcrumbs({ items }: { items: { label: string; to?: string; params?: Record<string, string> }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground">
      <ol className="flex flex-wrap items-center gap-1.5">
        <li>
          <Link to="/" className="inline-flex items-center gap-1 hover:text-navy">
            <Home className="h-3 w-3" /> Início
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="inline-flex items-center gap-1.5">
            <ChevronRight className="h-3 w-3 opacity-50" />
            {item.to ? (
              // @ts-expect-error dynamic to
              <Link to={item.to} params={item.params as never} className="hover:text-navy">
                {item.label}
              </Link>
            ) : (
              <span className="text-foreground">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
