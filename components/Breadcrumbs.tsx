import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  return (
    <nav aria-label="Breadcrumb" className="mb-7">
      <ol className="flex items-center gap-2 text-sm">
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`} className="flex items-center gap-2">
            {index > 0 && (
              <span className="text-neutral-60">/</span>
            )}

            {index === items.length - 1 ? (
              <span className="text-neutral-80 text-sm">
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href || "#"}
                className="text-neutral-60 text-sm"
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};