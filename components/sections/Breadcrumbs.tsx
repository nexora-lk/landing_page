import Link from "next/link";
import Box from "@mui/material/Box";

type Crumb = { label: string; href?: string };

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  // BreadcrumbList JSON-LD per spec §27.7
  const ld = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      ...(c.href ? { item: `https://nextora.lk${c.href}` } : {}),
    })),
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
      />
      <Box
        component="nav"
        aria-label="Breadcrumb"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "8px",
          fontSize: 13,
          color: "var(--grey-1)",
          mb: "24px",
        }}
      >
        {items.map((c, i) => {
          const isLast = i === items.length - 1;
          return (
            <Box key={`${c.label}-${i}`} component="span" sx={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
              {c.href && !isLast ? (
                <Link
                  href={c.href}
                  className="nav-link-hover"
                  style={{
                    color: "var(--grey-1)",
                    textDecoration: "none",
                  }}
                >
                  {c.label}
                </Link>
              ) : (
                <Box component="span" aria-current={isLast ? "page" : undefined} sx={{ color: isLast ? "var(--ink)" : "var(--grey-1)", fontWeight: isLast ? 500 : 400 }}>
                  {c.label}
                </Box>
              )}
              {!isLast && (
                <Box component="span" aria-hidden sx={{ color: "var(--grey-2)" }}>
                  /
                </Box>
              )}
            </Box>
          );
        })}
      </Box>
    </>
  );
}
